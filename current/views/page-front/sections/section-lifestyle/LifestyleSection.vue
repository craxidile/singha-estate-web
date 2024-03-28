<script setup lang="ts">

import imgLifeStyle01 from '~/assets/images/page-front/lifestyle-01.png';
import PageContent from "~/views/page-front/components/page-content/PageContent.vue";
import ArticleEntryCard
  from "~/views/page-front/sections/section-lifestyle/components/card-article-entry/ArticleEntryCard.vue";

import imgHeroArticleEntry01 from '~/assets/images/page-front/hero-article-entry-01.png';
import imgArticleEntry01 from '~/assets/images/page-front/article-entry-01.png';
import imgArticleEntry02 from '~/assets/images/page-front/article-entry-02.png';
import imgArticleEntry03 from '~/assets/images/page-front/article-entry-03.png';
import HeroArticleEntryCard
  from "~/views/page-front/sections/section-lifestyle/components/card-hero-article-entry/HeroArticleEntryCard.vue";

</script>

<template>
<div class="z-[3] relative pt-[72px] pb-[132px] sm:pt-[156px] sm:pb-[164px] bg-cream">
  <div class="absolute left-0 top-0 w-full h-[520px] bg-center bg-no-repeat bg-cover"
    :style="{ backgroundImage: `url(${imgLifeStyle01})` }" />
  <page-content class="z-[3]">
    <div class="space-y-10 sm:space-y-[76px] flex flex-col justify-start items-stretch">
      <div class="flex flex-col justify-start items-stretch">
        <span class="text-serif-h5-bd text-serif-h3-bd text-txt-light-main text-center">Elevate your lifestyle</span>
        <span class="text-serif-h5-nm text-serif-h3-nm text-txt-light-main text-center">by our stories</span>
      </div>
      <div class="sm:p-[72px] flex flex-col justify-start items-center sm:bg-cream-300">
        <div class="m-auto w-full max-w-[1096px] flex-col justify-start items-stretch">
          <hero-article-entry-card :banner="imgHeroArticleEntry01" type="S BLOG" :tags="['S Residence']"
            title="Singha Estate unveils RISE ABOVE strategy to drive Residential business"
            class="hidden sm:flex mb-8" />
          <article-entry-card :banner="imgHeroArticleEntry01" type="S BLOG" :tags="['S Residence']"
            title="Singha Estate unveils RISE ABOVE strategy to drive Residential business"
            class="sm:hidden mb-8" />
          <div class="space-y-8 sm:space-y-0 sm:space-x-8 flex flex-col sm:flex-row justify-start items-stretch">
            <div class="flex-1">
              <article-entry-card :banner="imgArticleEntry01" type="S BLOG" :tags="['Lifestyle', 'Travel']"
                title="5 Ways to Create a Productive Working Environment" />
            </div>
            <div class="flex-1">
              <article-entry-card :banner="imgArticleEntry02" type="TRAVEL" :tags="['Lifestyle', 'Travel']"
                title="Make Your Dream Honeymoon a Reality at CROSSROADS Maldives" />
            </div>
            <div class="flex-1">
              <article-entry-card :banner="imgArticleEntry03" type="S LIFE" :tags="['Lifestyle', 'Travel']"
                title="SIRANINN Residences’ A Perfect Home for Living in an ‘Aging Society’" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="mt-10 sm:mt-0 self-center rounded-sm py-3 px-6 bg-btn-primary-idle">
      <span class="text-txt-light-main text-body-1-sb">Explore more articles</span>
    </button>
  </page-content>
</div>
</template>

<style scoped>

</style>
