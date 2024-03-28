<script setup lang="ts">

import imgHeroBanner01 from '~/assets/images/page-front/hero-banner-01.png';
import PageContent from "~/views/page-front/components/page-content/PageContent.vue";
import Pagination from "~/views/page-front/components/pagination/Pagination.vue";

</script>

<template>
<section class="relative h-screen">
  <div class="fixed left-0 top-0 w-full h-full">
    <div class="w-full h-full bg-cover bg-no-repeat bg-center"
      :style="{backgroundImage: `url(${imgHeroBanner01})`}">
      <span class="absolute w-full sm:w-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-serif-h4-nm sm:text-serif-h2-nm text-white uppercase sm:whitespace-nowrap text-center sm:text-left">
        True Luxury <br class="sm:hidden" /> Living Mastery
      </span>
      <div class="absolute left-0 bottom-0 w-full py-11">
        <page-content>
          <div class="flex flex-row justify-end items-center">
            <pagination />
          </div>
        </page-content>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>
