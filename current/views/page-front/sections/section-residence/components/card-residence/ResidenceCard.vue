<script setup lang="ts">

const props = defineProps<{
  banner: string;
  title: string;
  location: string;
  minBudget: number;
  maxBudget?: number;
  isNew?: boolean,
  ribbonClass?: string;
}>();

const { banner, title, location, minBudget, maxBudget, isNew } = props;

</script>

<template>
<a href="#" class="flex flex-col justify-start items-stretch">
  <div class="aspect-[16/9] bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${banner})` }" />
  <div v-if="!!isNew" class="sm:hidden px-4 py-1 bg-gradient-ribbon-new">
    <span class="block text-body-3-sb text-txt-light-main text-center">New Project</span>
  </div>
  <div class="flex flex-row justify-start items-stretch bg-backdrop-light">
    <div class="w-4 sm:w-6" :class="ribbonClass" />
    <div class="sm:space-x-6 flex-1 flex flex-row justify-start items-start bg-backdrop-light">
      <div class="flex-1 py-5 sm:py-6 pl-4 sm:pl-6 space-y-4 flex flex-col justify-start items-stretch text-txt-dark-main">
        <div class="space-y-2 flex flex-col justify-start items-stretch">
          <span class="text-body-1-sb sm:text-sans-h6-sb uppercase">{{ title }}</span>
          <span class="text-caption-nm sm:text-body-2-nm uppercase">{{ location }}</span>
        </div>
        <div class="space-x-1 flex flex-row justify-start items-center text-caption-nm sm:text-body-3-nm uppercase">
          <span class="block">Starts {{ minBudget }}</span>
          <span v-if="maxBudget" class="block">- {{ maxBudget }}</span>
          <span class="block">MB</span>
        </div>
      </div>
      <div class="hidden sm:block py-6 pr-6">
        <div v-if="!!isNew" class="px-4 py-1 bg-gradient-ribbon-new">
          <span class="block text-body-3-sb text-txt-light-main">New Project</span>
        </div>
      </div>
    </div>
  </div>
</a>
</template>

<style scoped>

</style>
