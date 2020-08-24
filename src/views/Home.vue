<template>
  <main class="min-h-screen grid place-center text-snow-1">
    <header class="w-full flex flex-col items-center">
      <h1 class="text-5xl font-semibold tracking-wide">NÜE</h1>
      <img
        alt="Nue logo"
        src="@/assets/Nue.svg"
        class="logo w-2/3 sm:w-1/3 lg:w-1/4 py-8"
      />
      <h2 class="font-light text-center">
        A <span class="font-normal text-frost-1">Nordic</span> UI Theme for Vue
        and TailwindCSS.
      </h2>
      <NButton class="my-4">
        <router-link to="/about">
          Get Started
        </router-link>
      </NButton>
    </header>
    <main class="px-4">
      👷🏻‍♂️ Everything here is under active development, so you may not find
      everything you're looking for right now. Be sure to check back soon!
    </main>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NButton from "@/components/buttons/NButton.vue";

export default defineComponent({
  name: "App",
  components: {
    NButton
  }
});
</script>

<style lang="postcss">
body {
  background: #242933;
  @apply text-snow-0;
}
.logo {
  filter: drop-shadow(0px 3px 6px rgba(15, 17, 21, 0.2));
}
</style>
