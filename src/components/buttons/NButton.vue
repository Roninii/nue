<template>
  <button
    :class="[
      'bg-frost-1',
      'rounded',
      'px-4',
      'py-2',
      'text-polar-1',
      'font-medium',
      'hover:bg-frost-2',
      'transition-colors',
      'duration-300',
      'ease-linear',
      'cursor-pointer',
      'disabled:cursor-not-allowed',
      'disabled:opacity-50'
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
