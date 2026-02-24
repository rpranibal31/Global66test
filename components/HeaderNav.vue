<template>
  <header class="bg-primary text-white relative z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="h-[72px] flex items-center relative">
        <!-- LEFT -->
        <div class="flex items-center gap-4 lg:gap-10 min-w-0">
          <img
            src="/images/text-right.svg"
            alt="Global66"
            class="h-6 w-auto shrink-0"
            width="120"
            height="24"
            decoding="async"
          />

          <!-- PERSONAS / EMPRESAS (desktop) -->
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

        <!-- RIGHT (desktop / tablet) -->
        <div class="ml-auto hidden md:flex items-center gap-6">
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

          <!-- Country dropdown (desktop/tablet) -->
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

        <!-- MOBILE TOGGLE (shown < md) -->
        <div class="ml-auto flex items-center gap-3 md:hidden">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-full px-3 py-2 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            :aria-expanded="mobileOpen ? 'true' : 'false'"
            aria-controls="mobile-menu"
            aria-label="Abrir menú"
            @click="toggleMobile"
            @keydown.esc.prevent="closeAll"
          >
            <svg
              v-if="!mobileOpen"
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>

            <svg
              v-else
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- MOBILE MENU PANEL -->
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="md:hidden pb-4"
      >
        <div class="rounded-2xl bg-white/10 backdrop-blur px-4 py-4">
          <!-- PERSONAS / EMPRESAS (mobile) -->
          <div class="flex gap-2">
            <button
              type="button"
              class="flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              :class="
                activeTab === 'PERSONAS'
                  ? 'bg-white text-primary'
                  : 'bg-white/10 text-white'
              "
              @click="setActive('PERSONAS')"
            >
              PERSONAS
            </button>

            <button
              type="button"
              class="flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              :class="
                activeTab === 'EMPRESAS'
                  ? 'bg-white text-primary'
                  : 'bg-white/10 text-white'
              "
              @click="setActive('EMPRESAS')"
            >
              EMPRESAS
            </button>
          </div>

          <!-- LINKS (mobile) -->
          <nav class="mt-4 grid gap-2" aria-label="Navegación móvil">
            <a
              class="rounded-xl px-3 py-3 text-sm font-medium bg-white/10 hover:bg-white/15 transition cursor-pointer"
            >
              Productos
            </a>
            <a
              class="rounded-xl px-3 py-3 text-sm font-medium bg-white/10 hover:bg-white/15 transition cursor-pointer"
            >
              Beneficios
            </a>
            <a
              class="rounded-xl px-3 py-3 text-sm font-medium bg-white/10 hover:bg-white/15 transition cursor-pointer"
            >
              Ayuda
            </a>
          </nav>

          <!-- COUNTRY (mobile) -->
          <div class="mt-4">
            <div class="text-xs opacity-80 mb-2">País</div>
            <div class="grid grid-cols-2 gap-2">
              <button
                type="button"
                class="rounded-xl px-3 py-3 bg-white/10 hover:bg-white/15 transition flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
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
                class="rounded-xl px-3 py-3 bg-white/10 hover:bg-white/15 transition flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
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

          <!-- CTA (mobile) -->
          <div class="mt-4 grid gap-2">
            <a
              class="rounded-xl px-3 py-3 text-sm font-semibold bg-white/10 hover:bg-white/15 transition cursor-pointer text-center"
            >
              Iniciar Sesión
            </a>

            <button
              type="button"
              class="rounded-xl px-3 py-3 text-sm font-semibold bg-white text-primary hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Crear cuenta
            </button>
          </div>
        </div>
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
      mobileOpen: false,
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

    toggleMobile() {
      // cerrar dropdown desktop si estuviera abierto
      this.open = false;
      this.detachOutsideClick();

      this.mobileOpen = !this.mobileOpen;
    },

    closeAll() {
      this.mobileOpen = false;
      this.closeMenu();
    },

    toggleMenu() {
      // si está abierto el menú mobile, ciérralo
      this.mobileOpen = false;

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
      // Cierra ambos menús (mobile + dropdown)
      this.mobileOpen = false;
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