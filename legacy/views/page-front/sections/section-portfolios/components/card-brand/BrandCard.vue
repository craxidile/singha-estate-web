<script setup lang="ts">

const props = defineProps<{
  lightBanner: string,
  darkBanner: string,
  title?: string,
  path?: string,
}>();

const { lightBanner, darkBanner, path } = props;

</script>

<template>
  <a :href="path || '#'"
    class="group flex flex-col justify-start items-stretch hover:bg-backdrop-light rounded-sm transition-all duration-700 ease-in-out">
    <img :alt="title" :src="lightBanner" class="h-20 sm:h-auto block group-hover:hidden" />
    <img :alt="title" :src="darkBanner" class="h-20 sm:h-auto hidden group-hover:block" />
  </a>
</template>

<style scoped>

</style>
