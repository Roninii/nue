<template>
  <Header />
  <main class="min-h-screen">
    <router-view />
  </main>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  components: {
    Header,
    Footer
  }
});
</script>
