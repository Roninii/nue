<template>
  <main class="px-4 grid gap-4">
    <section class="grid gap-4">
      <h1 class="text-xl">What is this?</h1>
      <p class="font-light leading-tight">
        Nue is an opinionated UI component library for Vue. It uses TailwindCSS
        for styling, but it is built around the
        <a
          href="https://nordtheme.com"
          target="_blank"
          rel="no-referrer noopener"
          class="text-aurora-1 inline-flex items-end underline lg:no-underline"
          >Nord Theme <ExternalLink class="hidden lg:inline-block" />
        </a>
      </p>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ExternalLink from "@/components/icons/ExternalLink.vue";

export default defineComponent({
  components: {
    ExternalLink
  },
  setup() {
    return {};
  }
});
</script>

<style scoped></style>
