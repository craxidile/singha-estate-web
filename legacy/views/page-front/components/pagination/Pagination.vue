<script setup lang="ts">

import ProgressBar from "~/views/page-front/components/progress-bar/ProgressBar.vue";


const props = defineProps<{
  max?: number,
}>();

const { max = 5 } = props;

const emit = defineEmits<{
  next: [],
  back: [],
  change: [current: number];
}>();

const current = ref(1);

const onClickBack = () => {
  current.value = Math.max(1, current.value - 1);
  emit('back');
  emit('change', current.value);
};

const onClickNext = () => {
  current.value = Math.min(max, current.value + 1);
  emit('next');
  emit('change', current.value);
};

const onChangeCurrent = (c: number) => {
  emit('change', c);
};

</script>

<template>
  <div class="self-stretch sm:self-auto space-x-4 flex flex-row justify-start items-center">
    <progress-bar :current="current" :max="max" @change="onChangeCurrent" />
    <span class="block text-txt-light-main text-body-3-nm">{{ current }}/{{ max }}</span>
    <button class="w-10 h-10 box-border border border-txt-light-main flex flex-row justify-center items-center"
      @click="onClickBack">
      <i class="block text-txt-light-main text-icon-sm leading-none icon-arrow-narrow-left" />
    </button>
    <button class="w-10 h-10 box-border border border-txt-light-main flex flex-row justify-center items-center"
      @click="onClickNext">
      <i class="block text-txt-light-main text-icon-sm leading-none icon-arrow-narrow-right" />
    </button>
  </div>
</template>

<style scoped>

</style>
