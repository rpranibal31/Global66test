<template>
  <section
    class="bg-primary text-white overflow-hidden relative z-0 pt-12 lg:pt-16"
  >
    <div
      class="mx-auto max-w-7xl px-5 sm:px-6 min-h-[340px] sm:min-h-[420px] grid gap-10 lg:gap-0 lg:grid-cols-2 items-center"
    >
      <!-- TEXT -->
      <div class="text-center lg:text-left flex justify-center">
        <div class="max-w-xl">
          <h1
            class="text-4xl sm:text-5xl lg:text-5xl font-medium tracking-tight"
          >
            Valor del dólar hoy
          </h1>

          <p
            class="mt-5 text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight"
          >
            1 USD = {{ rate }} {{ currency }}
          </p>

          <p class="mt-4 text-base sm:text-lg text-white/80">
            Tipo de cambio para {{ asOf }}
          </p>
        </div>
      </div>

      <!-- IMAGE -->
      <div class="flex justify-center lg:justify-end">
        <img
          :src="renderSrc || heroImage"
          :alt="`Ilustración tipo de cambio USD a ${currency}`"
          width="520"
          height="340"
          fetchpriority="high"
          decoding="async"
          loading="eager"
          class="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[560px]
                 h-[180px] sm:h-[240px] lg:h-[320px]
                 object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroCurrency",

  props: {
    rate: { type: [String, Number], required: true },
    currency: { type: String, required: true },
    asOf: { type: String, required: true },
    country: { type: String, default: "CL" },
    heroOverride: { type: String, default: "" },
  },

  data() {
    return {
      renderSrc: "",
      isSwapping: false,
    };
  },

  computed: {
    heroImage() {
      if (this.heroOverride) return this.heroOverride;

      return this.country === "PE"
        ? "/images/hero-img-pe.svg"
        : "/images/hero-img-cl.svg";
    },
  },

  mounted() {
    this.renderSrc = this.heroImage;
    this.warmOther(this.country);
  },

  watch: {
    heroImage(nextSrc) {
      this.swapWhenLoaded(nextSrc);
    },

    country(newCountry) {
      this.warmOther(newCountry);
    },
  },

  methods: {
    warmOther(country) {
      const other =
        country === "PE"
          ? "/images/hero-img-cl.svg"
          : "/images/hero-img-pe.svg";

      const img = new Image();
      img.src = other;
    },

    swapWhenLoaded(nextSrc) {
      if (nextSrc === this.renderSrc) return;

      this.isSwapping = true;

      const img = new Image();
      img.decoding = "async";

      img.onload = () => {
        this.renderSrc = nextSrc;
        this.isSwapping = false;
      };

      img.onerror = () => {
        this.isSwapping = false;
      };

      img.src = nextSrc;
    },
  },
};
</script>