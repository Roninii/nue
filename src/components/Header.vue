<template>
  <header class="h-16 grid grid-cols-3 px-4">
    <button>
      <MenuIcon class="h-8 text-frost-1 focus:outline-none lg:hidden" />
    </button>

    <router-link to="/" class="p-4 flex justify-center">
      <img
        src="@/assets/Nue.svg"
        alt="Nue logo"
        :class="[isHome ? 'hidden' : 'block', 'h-8']"
      />
    </router-link>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";

import MenuIcon from "@/components/icons/MenuIcon.vue";

export default defineComponent({
  components: {
    MenuIcon
  },
  setup() {
    const route = useRoute();
    const isHome = computed(() => route.name === "Home");

    return {
      isHome
    };
  }
});
</script>

<style scoped></style>
