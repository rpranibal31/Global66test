<template>
  <section
    class="bg-primary text-white overflow-hidden relative z-0 pt-12 lg:pt-16"
  >
    <div class="mx-auto max-w-7xl px-6 h-[420px] grid lg:grid-cols-2">
      <div class="flex items-center">
        <div>
          <h1 class="text-4xl font-medium tracking-tight lg:text-5xl">
            Valor del dólar hoy
          </h1>

          <p class="mt-6 text-3xl font-extrabold lg:text-5xl">
            1 USD = {{ rate }} {{ currency }}
          </p>

          <p class="mt-4 text-sm text-white/80 lg:text-base">
            Tipo de cambio para {{ asOf }}
          </p>
        </div>
      </div>

      <div class="flex items-end justify-center lg:justify-end">
        <img
          :src="heroImage"
          :alt="`Ilustración tipo de cambio USD a ${currency}`"
          width="520"
          height="340"
          fetchpriority="high"
          decoding="async"
          loading="eager"
          class="w-auto object-contain h-[220px] sm:h-[250px] lg:h-[320px] max-w-[520px] lg:max-w-[560px]"
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
    heroImage: {
      immediate: false,
      handler(nextSrc) {
        this.swapWhenLoaded(nextSrc);
      },
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
