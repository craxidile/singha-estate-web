<script setup lang="ts">

</script>

<template>
  <div class="relative m-auto flex flex-col justify-start items-stretch theme-default">
    <slot />
  </div>
</template>

<style scoped>
.theme-default {
  @apply box-border w-full;
  padding: 0 24px;
  max-width: 1440px;

  @screen sm {
    padding: 0 60px;
  }
}
</style>
