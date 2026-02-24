<template>
  <header class="bg-primary text-white relative py-6 z-50">
    <div class="max-w-7xl mx-auto h-[72px] px-6 flex items-center relative">
      <div class="flex items-center gap-10">
        <img
          src="/images/text-right.svg"
          alt="Global66"
          class="h-6 w-auto"
          width="120"
          height="24"
          decoding="async"
        />

        <nav
          class="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide"
        >
          <a
            class="relative inline-flex items-center pb-2 opacity-90 hover:opacity-100 cursor-pointer"
            :class="
              activeTab === 'PERSONAS' ? 'text-brand-primary opacity-100' : ''
            "
            @click.prevent="setActive('PERSONAS')"
          >
            PERSONAS
            <span
              v-if="activeTab === 'PERSONAS'"
              class="absolute left-0 -bottom-[2px] h-[2px] w-full bg-brand-primary rounded-full"
            />
          </a>

          <a
            class="relative inline-flex items-center pb-2 opacity-90 hover:opacity-100 cursor-pointer"
            :class="
              activeTab === 'EMPRESAS' ? 'text-brand-primary opacity-100' : ''
            "
            @click.prevent="setActive('EMPRESAS')"
          >
            EMPRESAS
            <span
              v-if="activeTab === 'EMPRESAS'"
              class="absolute left-0 -bottom-[2px] h-[2px] w-full bg-brand-primary rounded-full"
            />
          </a>
        </nav>
      </div>

      <div class="ml-auto flex items-center gap-6">
        <nav
          class="hidden md:flex items-center gap-10 text-sm font-medium"
          aria-label="Navegación principal"
        >
          <a
            class="opacity-90 hover:opacity-100 cursor-pointer flex items-center gap-2"
          >
            Productos
            <svg
              class="h-4 w-4 opacity-90"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a
            class="opacity-90 hover:opacity-100 cursor-pointer flex items-center gap-2"
          >
            Beneficios
            <svg
              class="h-4 w-4 opacity-90"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <a class="opacity-90 hover:opacity-100 cursor-pointer"> Ayuda </a>
        </nav>
        <div class="relative z-50" ref="dropdown">
          <button
            ref="toggleBtn"
            type="button"
            class="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            :aria-expanded="open ? 'true' : 'false'"
            aria-haspopup="menu"
            aria-label="Seleccionar país"
            @click="toggleMenu"
            @keydown.esc.prevent="closeMenu"
          >
            <img
              :src="countryFlagSrc"
              :alt="countryLabel"
              class="h-5 w-5"
              width="20"
              height="20"
              decoding="async"
            />
            <svg
              class="h-4 w-4 opacity-90"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clip-rule="evenodd"
              />
            </svg>
          </button>

          <div
            v-if="open"
            class="absolute right-0 mt-2 w-44 rounded-xl bg-white text-gray-900 shadow-lg overflow-hidden ring-1 ring-black/5"
            role="menu"
            aria-label="Países"
            @keydown.esc.prevent="closeMenu"
          >
            <button
              ref="firstItem"
              type="button"
              class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              role="menuitem"
              @click="goToCountry('CL')"
            >
              <img
                src="/images/Flag.svg"
                alt="Chile"
                class="h-5 w-5"
                width="20"
                height="20"
                decoding="async"
              />
              <span class="text-sm font-medium">Chile</span>
            </button>

            <button
              type="button"
              class="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
              role="menuitem"
              @click="goToCountry('PE')"
            >
              <img
                src="/images/Flag-1.svg"
                alt="Perú"
                class="h-5 w-5"
                width="20"
                height="20"
                decoding="async"
              />
              <span class="text-sm font-medium">Perú</span>
            </button>
          </div>
        </div>

        <span class="hidden md:block h-6 w-px bg-white" />

        <a
          class="text-sm opacity-90 hover:opacity-100 cursor-pointer whitespace-nowrap"
        >
          Iniciar Sesión
        </a>

        <button
          type="button"
          class="bg-white text-primary px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          Crear cuenta
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",

  props: {
    selectedCountry: {
      type: String,
      default: "CL",
      validator: (v) => ["CL", "PE"].includes(v),
    },
    active: {
      type: String,
      default: "PERSONAS",
      validator: (v) => ["PERSONAS", "EMPRESAS"].includes(v),
    },
  },

  data() {
    return {
      open: false,
      _onDocClick: null,
      activeTab: this.active,
    };
  },

  computed: {
    countryFlagSrc() {
      return this.selectedCountry === "PE"
        ? "/images/Flag-1.svg"
        : "/images/Flag.svg";
    },
    countryLabel() {
      return this.selectedCountry === "PE" ? "Perú" : "Chile";
    },
  },

  watch: {
    active(newVal) {
      this.activeTab = newVal;
    },
  },

  mounted() {
    this.preloadImage("/images/Flag.svg");
    this.preloadImage("/images/Flag-1.svg");
    this.preloadImage("/images/hero-img-cl.svg");
    this.preloadImage("/images/hero-img-pe.svg");
  },

  beforeDestroy() {
    this.detachOutsideClick();
  },

  methods: {
    setActive(tab) {
      this.activeTab = tab;
    },

    toggleMenu() {
      this.open = !this.open;
      if (this.open) {
        this.attachOutsideClick();
        this.$nextTick(() => this.$refs.firstItem?.focus?.());
        this.preloadImage("/images/hero-img-cl.svg");
        this.preloadImage("/images/hero-img-pe.svg");
      } else {
        this.detachOutsideClick();
      }
    },

    closeMenu() {
      this.open = false;
      this.detachOutsideClick();
      this.$nextTick(() => this.$refs.toggleBtn?.focus?.());
    },

    attachOutsideClick() {
      if (this._onDocClick) return;

      this._onDocClick = (e) => {
        const root = this.$refs.dropdown;
        if (!root) return;
        if (!root.contains(e.target)) this.closeMenu();
      };

      document.addEventListener("mousedown", this._onDocClick, {
        passive: true,
      });
      document.addEventListener("touchstart", this._onDocClick, {
        passive: true,
      });
    },

    detachOutsideClick() {
      if (!this._onDocClick) return;
      document.removeEventListener("mousedown", this._onDocClick);
      document.removeEventListener("touchstart", this._onDocClick);
      this._onDocClick = null;
    },

    preloadImage(src) {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
    },

    preloadImageWithTimeout(src, timeoutMs = 140) {
      return new Promise((resolve) => {
        let done = false;
        const finish = () => {
          if (done) return;
          done = true;
          resolve(true);
        };

        const timer = setTimeout(finish, timeoutMs);

        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          clearTimeout(timer);
          finish();
        };
        img.onerror = () => {
          clearTimeout(timer);
          finish();
        };
        img.src = src;
      });
    },

    async goToCountry(code) {
      this.closeMenu();

      const routes = {
        CL: "/precio/peso-chileno",
        PE: "/precio/sol-peruano",
      };

      const heroByCountry = {
        CL: "/images/hero-img-cl.svg",
        PE: "/images/hero-img-pe.svg",
      };

      const targetRoute = routes[code];
      const targetHero = heroByCountry[code];
      if (!targetRoute) return;

      if (this.$route.path === targetRoute) return;

      await this.preloadImageWithTimeout(targetHero, 140);
      this.$router.push(targetRoute);
    },
  },
};
</script>
