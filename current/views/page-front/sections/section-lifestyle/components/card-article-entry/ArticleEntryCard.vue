<script setup lang="ts">

import dayjs from 'dayjs';

const props = defineProps<{
  banner: string,
  type: string,
  tags: string[],
  title: string,
  createdAt: string,
}>();

const { banner, type, tags = [], title } = props;

</script>

<template>
  <a href="#" class="group flex flex-col justify-start items-stretch card transition-all duration-700 ease-in-out">
    <div class="aspect-[7/5] bg-center bg-cover bg-no-repeat"
      :style="{ backgroundImage: `url(${banner})` }" />
    <div class="px-6 pt-6 pb-5 bg-backdrop-light space-y-3 flex flex-col justify-start items-stretch border-b border-gray-100">
      <div class="h-4 pl-3 box-border flex flex-row justify-start items-center border-l-2 border-se-yellow-500">
        <span class="block text-txt-dark-desc text-caption-sb uppercase">{{ type }}</span>
      </div>
      <span class="block text-body-3-sb text-body-3-sb-clamp-2">{{ title }}</span>
      <div class="inline-flex flex-row justify-start items-center flex-wrap">
        <span class="pr-2 block text-txt-gold-main text-caption-nm"
          v-for="(tag, index) in tags" :key="tag"
          :class="{ 'pl-2 border-l border-gray-100': index !== 0 }">
          {{ tag }}
        </span>
      </div>
    </div>
    <div class="box-border px-6 pt-5 pb-4 bg-backdrop-light space-x-4 flex flex-row justify-start items-stretch border-b-4 border-backdrop-light group-hover:border-se-gold-400 transition-all duration-700 ease-in-out">
      <div class="space-x-2 flex flex-row justify-start items-center text-txt-dark-disabled">
        <i class="text-xl leading-none icon-heart" />
        <span class="block text-txt-gold-main text-caption-nm">232</span>
      </div>
      <div class="space-x-1 flex flex-row justify-start items-center text-txt-dark-disabled">
        <i class="text-xl leading-none icon-clock" />
        <span class="block text-txt-gold-main text-caption-nm">{{ dayjs(createdAt).format('D MMM YYYY') }}</span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.card:hover {
  box-shadow: 0 20px 40px 0 rgba(35, 44, 52, 0.12);
}
</style>
