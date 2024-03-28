<script setup lang="ts">

import NavigationBar from "~/views/page-front/layouts/components/navigation-bar/NavigationBar.vue";
import PageFooter from "~/views/page-front/layouts/components/page-footer/PageFooter.vue";

</script>

<template>
<div class="flex flex-col justify-start items-stretch">
  <header class="z-[1] fixed left-0 top-0 w-full flex flex-col justify-start items-stretch">
    <navigation-bar />
  </header>
  <main class="flex flex-col justify-start items-stretch">
    <slot name="main" />
  </main>
  <footer class="z-[3] flex flex-col justify-start items-stretch">
    <page-footer />
  </footer>
</div>
</template>

<style scoped>

</style>
