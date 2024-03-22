<script setup lang="ts">

import dayjs from 'dayjs';

import PageContent from "~/views/page-front/components/page-content/PageContent.vue";
import Pagination from "~/views/page-front/components/pagination/Pagination.vue";

import imgPromotion01 from '~/assets/images/page-front/promotion-01.png';

</script>

<template>
<div class="z-[3] relative flex flex-col justify-start items-stretch">
  <div class="pt-20 sm:pt-[156px] pb-8 sm:pb-[72px] bg-se-blue-800 flex flex-col justify-start items-stretch">
    <page-content>
      <div class="space-y-6 flex flex-col justify-start items-center">
        <span class="text-serif-h5-nm sm:text-serif-h3-nm text-se-yellow-300 text-center">
          Highlight Promotion & Special Privilege
        </span>
        <p class="text-txt-light-main text-body-3-nm sm:text-body-1-nm text-center sm:text-left">
          Discover exclusive promotions tailored for our esteemed residents. Experience luxury at its finest.
        </p>
      </div>
    </page-content>
  </div>
  <div class="aspect-[144/78] bg-cover bg-center bg-no-repeat"
       :style="{ backgroundImage: `url(${imgPromotion01})` }" />
  <div class="py-16 bg-se-blue-700 flex flex-col justify-start items-stretch">
    <page-content>
       <div class="w-full max-w-[1096px] m-auto space-y-6 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row justify-between items-start">
         <div class="space-y-4 sm:space-y-5 flex flex-col justify-start items-start">
           <div class="h-[18px] box-border pl-3 space-x-3 flex flex-row justify-start items-center text-txt-dark-desc border-l-2 border-se-yellow-500">
             <span class="text-caption-sb uppercase">Promotions</span>
             <span class="hidden sm:block text-xs leading-none uppercase">●</span>
             <span class="hidden sm:block text-caption-nm uppercase">{{ dayjs().format('D MMMM YYYY ')}}</span>
           </div>
           <div class="space-y-2 flex flex-col justify-between items-start">
             <div class="max-w-[540px] flex-1 space-y-4 sm:space-y-2 flex flex-col justify-start items-start">
               <span class="text-body-1-sb sm:text-sans-h3-sb text-txt-light-main">
                 Experience unmatched success at The Extro!
               </span>
               <p class="text-body-3-nm text-txt-light-main">
                 the new Sales Gallery at THE EXTRO Phayathai-Rangnam.
                 Condo next to city center garden Potential location near BTS Victory.
               </p>
             </div>
           </div>
           <button class="space-x-1 flex flex-row justify-start items-center text-txt-gold-main">
             <span class="text-body-3-nm">Explore More</span>
             <i class="text-2xl leading-none icon-chevron-right" />
           </button>
         </div>
         <pagination />
       </div>
    </page-content>
  </div>
</div>
</template>

<style scoped>

</style>
