<template>
  <div>
    <HeaderNav :selectedCountry="country" />

    <HeroCurrency
      :rate="formattedRate"
      :currency="currency"
      :asOf="formattedAsOf"
      :country="country"
    />

    <GlobalSection />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav.vue";
import HeroCurrency from "@/components/HeroCurrency.vue";
import GlobalSection from "@/components/GlobalSection.vue";

const SLUG_MAP = {
  "peso-chileno": { currency: "CLP", country: "CL" },
  "sol-peruano": { currency: "PEN", country: "PE" },
};

export default {
  components: {
    HeaderNav,
    HeroCurrency,
    GlobalSection,
  },

  async asyncData({ params, $axios, error }) {
    const resolved = SLUG_MAP[params.slug];

    if (!resolved) {
      return error({ statusCode: 404 });
    }
    const data = await $axios.$get("/api/rates");

    const rate = data?.rates?.[resolved.currency];
    if (!rate) {
      return error({ statusCode: 404 });
    }

    return {
      slug: params.slug,
      country: resolved.country,
      currency: resolved.currency,
      rate,
      asOf: data.asOf,
    };
  },

  computed: {
    formattedRate() {
      return new Intl.NumberFormat("es-CL", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(this.rate);
    },

    formattedAsOf() {
      const d = new Date(this.asOf);
      const yyyyMmDd = d.toISOString().slice(0, 10);
      const hhMm = d.toISOString().slice(11, 16);
      return `${yyyyMmDd} a las ${hhMm} UTC`;
    },
  },

head() {
  const title = `Valor del dólar hoy - USD/${this.currency}`;
  const description = `Tipo de cambio USD a ${this.currency} actualizado. 1 USD en ${this.currency} con fecha y hora UTC.`;

  const clHero = "/images/hero-img-cl.svg";
  const peHero = "/images/hero-img-pe.svg";

  const currentHero = this.country === "PE" ? peHero : clHero;
  const nextHero = this.country === "PE" ? clHero : peHero;

  const path = `/precio/${this.slug}`;

  const host = process.server ? this.$ssrContext?.req?.headers?.host : window.location.host;
  const protocol = host && host.includes("localhost") ? "http" : "https";
  const absoluteUrl = host ? `${protocol}://${host}${path}` : path;

  return {
    title,
    meta: [{ hid: "description", name: "description", content: description }],
    link: [
      { rel: "canonical", href: absoluteUrl },
      { rel: "alternate", hreflang: "es-CL", href: absoluteUrl },
      { rel: "preload", as: "image", href: currentHero },
      { rel: "prefetch", as: "image", href: nextHero },
    ],
  };
},
};
</script>
