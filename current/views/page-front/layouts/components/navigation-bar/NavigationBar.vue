<script setup lang="ts">

import PageContent from "~/views/page-front/components/page-content/PageContent.vue";
</script>

<template>
<div class="flex flex-col justify-start items-stretch bg-gradient-nav-main">
  <page-content>
    <div class="h-[72px] sm:h-24 flex flex-row justify-start items-center">
      <div class="w-1/4 flex-shrink-0">
        <img alt="Logo" src="~/assets/images/logo/logo-se-light.svg" class="hidden sm:block h-12"/>
        <img alt="Logo" src="~/assets/images/logo/logo-se-standalone.svg" class="block sm:hidden h-10"/>
      </div>
      <div class="w-1/2 flex-shrink-0">
      <span class="block text-serif-h6-nm text-center text-txt-light-main">
        Residential
      </span>
      </div>
      <div class="w-1/4 flex-shrink-0 flex flex-row justify-end items-center">
        <i class="sm:hidden text-icon-xs icon-menu text-txt-light-main" />
      </div>
    </div>
  </page-content>
  <div class="h-2 bg-gradient-nav-stripe" />
</div>
</template>

<style scoped>
</style>
