<template>
  <footer>
    <h6 class="text-center flex justify-center items-center py-4">
      Made With
      <svg
        viewBox="0 0 20 20"
        fill="currentColor"
        class="heart text-aurora-0 h-6 inline-block px-1"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        ></path>
      </svg>
      by
      <a
        href="http://ronini.dev"
        target="_blank"
        rel="noopener noreferrer"
        class="underline hover:text-aurora-1 px-1 transition-colors duration-300 ease-out"
        >Ronnie Villarini</a
      >
    </h6>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.heart {
  animation: 2s pulse infinite linear;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
