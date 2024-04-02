<script setup lang="ts">

import dayjs from "dayjs";

const props = defineProps<{
  banner: string,
  type: string,
  title: string,
  tags: string[],
  publishedAt: string,
}>();

const { banner, type, title, publishedAt } = props;

</script>

<template>
<a href="#" class="flex flex-row justify-start items-stretch">
  <div class="flex-1 aspect-[16/10] bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${banner})` }" />
  <div class="w-[448px] flex flex-col justify-start items-stretch bg-backdrop-light">
    <div class="flex-1 px-6 pt-10 p-5 flex flex-col justify-between items-start border-b border-gray-100">
      <div class="h-4 pl-3 box-border flex flex-row justify-start items-center border-l-2 border-se-yellow-500">
        <span class="block text-txt-dark-desc text-caption-sb uppercase">{{ type }}</span>
      </div>
      <div class="space-y-3 flex flex-col justify-start items-start">
        <span class="block text-sans-h6-sb text-txt-dark-main">{{ title }}</span>
        <div class="inline-flex flex-row justify-start items-center flex-wrap">
        <span class="pr-2 block text-txt-gold-main text-caption-nm"
              v-for="(tag, index) in tags" :key="tag"
              :class="{ 'pl-2 border-l border-gray-100': index !== 0 }">
          {{ tag }}
        </span>
        </div>
      </div>
    </div>
    <div class="px-6 pt-5 pb-4 bg-backdrop-light space-x-4 flex flex-row justify-start items-stretch border-b-4 border-backdrop-light">
      <div class="space-x-2 flex flex-row justify-start items-center text-txt-dark-disabled">
        <i class="text-xl leading-none icon-heart" />
        <span class="block text-txt-gold-main text-caption-nm">232</span>
      </div>
      <div class="space-x-1 flex flex-row justify-start items-center text-txt-dark-disabled">
        <i class="text-xl leading-none icon-clock" />
        <span class="block text-txt-gold-main text-caption-nm">{{ dayjs(publishedAt).format('D MMM YYYY') }}</span>
      </div>
    </div>
  </div>
</a>
</template>

<style scoped>

</style>
