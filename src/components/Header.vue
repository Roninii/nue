<template>
  <header class="h-16 flex justify-center">
    <img
      src="@/assets/Nue.svg"
      alt="Nue logo"
      :class="[isHome ? 'hidden' : 'block', 'h-full', 'p-4']"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
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
