<script setup lang="ts">

import PageContent from "~/views/page-front/components/page-content/PageContent.vue";
import NewsEntryCard from "~/views/page-front/sections/section-learn-more/components/card-news-entry/NewsEntryCard.vue";

import imgLearnMore from '~/assets/images/page-front/learn-more-01.png';
import imgNewsEntry01 from '~/assets/images/page-front/news-entry-01.png';
import imgNewsEntry02 from '~/assets/images/page-front/news-entry-02.png';
import imgNewsEntry03 from '~/assets/images/page-front/news-entry-03.png';
import {useVmPageFront} from "~/stores/vm-page-front";

const vmPageFront = useVmPageFront();
const { newsEntries } = storeToRefs(vmPageFront);

</script>

<template>
  <div class="z-[3] relative py-10 sm:pt-[236px] sm:pb-[158px] bg-se-blue-700">
    <page-content class="z-[3] mb-10 sm:mb-0">
      <div class="w-full max-w-[1096px] m-auto flex flex-col justify-start items-stretch">
        <div class="space-y-8 sm:space-y-10 flex flex-col justify-start items-start">
          <div class="space-y-8 sm:space-y-6 flex flex-col justify-start items-start">
            <p class="text-serif-h5-nm sm:text-serif-h3-nm text-txt-light-main text-center sm:text-left">
              Learn more about <b>Singha Estate</b>
            </p>
            <p class="text-body-3-nm sm:text-body-1-nm text-txt-light-main">
              Tap below to unveil the narrative behind our Singha Estate
              <span class="font-medium">“Entrusted and Value Enricher”</span>, the philosophy
              that guides us, and the passion that drives us to elevate your definition of real estate and luxury.
            </p>
          </div>
          <button class="self-stretch sm:self-auto rounded-sm py-2 sm:py-3 px-4 sm:px-6 bg-btn-primary-idle">
            <span class="text-txt-light-main text-body-3-sb sm:text-body-1-sb">Learn More</span>
          </button>
        </div>
      </div>
    </page-content>
    <div class="z-[1] relative mb-7 sm:mb-0 sm:h-[592px]">
      <div class="w-full aspect-[375/210] sm:aspect-auto sm:h-[calc(100%+232px)] sm:-translate-y-[116px] bg-cover bg-no-repeat bg-center"
        :style="{ backgroundImage: `url(${imgLearnMore})` }" />
    </div>
    <page-content class="z-[3]">
      <div class="w-full sm:max-w-[1096px] m-auto flex flex-col justify-start items-stretch">
        <div class="space-y-10 sm:space-y-[72px] flex flex-col justify-start items-center">
          <div class="self-stretch sm:p-14 sm:bg-backdrop-blue-100 space-y-7 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row justify-start items-stretch">
            <div v-for="newsEntry in newsEntries" class="relative flex-1">
              <news-entry-card
                :title="newsEntry.attributes?.title"
                :type="newsEntry.attributes?.category?.data?.attributes?.title"
                :banner="newsEntry.attributes?.media?.banner?.data?.attributes?.url"
                :created-at="newsEntry.attributes?.createdAt" />
            </div>
          </div>
          <button class="rounded-sm py-3 px-6 bg-btn-primary-idle">
            <span class="text-txt-light-main text-body-1-sb">Explore more news</span>
          </button>
        </div>
      </div>
    </page-content>
  </div>
</template>

<style scoped>

</style>
