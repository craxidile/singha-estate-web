<script setup lang="ts">

const props = defineProps<{
  max: number,
  current: number,
}>();

const emit = defineEmits<{
  change: [current: number],
}>();

const { max } = props;

const current = computed(() => props.current);

</script>

<template>
  <div class="flex-1 sm:flex-auto sm:w-[280px] h-1 flex flex-row justify-start items-stretch bg-se-gold-100">
    <button v-for="(_, index) in [...Array(max)]" :key="index" class="flex-1"
      :class="{ 'bg-se-gold-400': index === current - 1 }"
      @click="() => emit('change', index + 1)"/>
  </div>
</template>

<style scoped>

</style>
