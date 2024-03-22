<script setup lang="ts">

const props = defineProps<{
  banner: string,
  title: string,
}>();

const banner = props.banner;
const title = props.title;

</script>

<template>
<div class="group sm:h-[324px] sm:hover:h-full z-10 relative w-[260px] flex flex-col justify-start items-stretch overflow-hidden transition-all duration-300 ease-in-out">
  <div class="w-full flex-shrink-0 aspect-square bg-center bg-cover bg-no-repeat"
    :style="{backgroundImage: `url(${banner})`}" />
  <div class="p-4 bg-backdrop-light space-y-4 flex flex-col justify-start items-stretch">
    <div class="space-x-4 flex flex-row justify-between items-center">
      <span class="block text-serif-h5-nm text-txt-dark-main">
        {{ title }}
      </span>
      <div class="relative w-8 h-8">
        <i class="absolute left-0 top-0 text-icon-lg text-txt-gold-main leading-none icon-minus opacity-0 -rotate-180 group-hover:rotate-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
        <i class="absolute left-0 top-0 text-icon-lg text-txt-gold-main leading-none icon-plus group-hover:rotate-180 group-hover:opacity-0 transition-all duration-300 ease-in-out" />
      </div>
    </div>
    <p class="text-txt-dark-main text-body-1-nm">
      Experience unmatched elegance with every handcrafted detail.
    </p>
  </div>
</div>
</template>

<style scoped>

</style>
