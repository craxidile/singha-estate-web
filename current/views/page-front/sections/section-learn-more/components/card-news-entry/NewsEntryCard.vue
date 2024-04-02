<script setup lang="ts">

import dayjs from 'dayjs';

const props = defineProps<{
  banner: string,
  title: string,
  type: string,
  publishedAt: string,
}>();

const { banner, title, publishedAt } = props;

</script>

<template>
<a href="#" class="flex flex-col justify-start items-stretch">
  <div class="aspect-[386/250] bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${banner})` }">
  </div>
  <div class="p-6 bg-backdrop-light space-y-4 flex flex-col justify-start items-stretch">
    <div class="h-4 pl-3 box-border flex flex-row justify-start items-center border-l-2 border-se-yellow-500">
      <span class="block text-txt-dark-desc text-caption-sb uppercase">{{ type }}</span>
    </div>
    <span class="text-gray-700 text-body-3-sb text-body-3-sb-clamp-2">{{ title }}</span>
    <span class="text-caption-nm text-txt-dark-disabled uppercase">
      {{ dayjs(publishedAt).format('D MMM YYYY') }}
    </span>
  </div>
</a>
</template>

<style scoped>

</style>
