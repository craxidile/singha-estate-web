<script setup lang="ts">

const props = defineProps<{
  placeholder?: string;
}>();

const { placeholder } = props;

</script>

<template>
  <div class="rounded-sm p-3 flex flex-row justify-start items-center border border-btn-ghost-idle bg-backdrop-light cursor-pointer">
    <span class="block flex-1 text-txt-dark-desc">{{ placeholder }}</span>
    <i class="text-2xl text-txt-gold-main leading-none icon-chevron-down" />
  </div>
</template>

<style scoped>

</style>
