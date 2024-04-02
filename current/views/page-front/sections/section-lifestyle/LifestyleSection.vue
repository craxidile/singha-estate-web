<script setup lang="ts">

import { computed } from 'vue';
import { useVmPageFront } from '~/stores/vm-page-front';

import PageContent from '~/views/page-front/components/page-content/PageContent.vue';
import HeroArticleEntryCard
  from '~/views/page-front/sections/section-lifestyle/components/card-hero-article-entry/HeroArticleEntryCard.vue';
import ArticleEntryCard
  from '~/views/page-front/sections/section-lifestyle/components/card-article-entry/ArticleEntryCard.vue';

import imgLifeStyle01 from '~/assets/images/page-front/lifestyle-01.png';
import type Article from "~/models/types/article";

const vmPageFront = useVmPageFront();
const { articles } = storeToRefs(vmPageFront);

const firstArticle = computed(() => !articles.value ? undefined : articles.value[0] as Article | undefined);
const otherArticles = computed(() => !articles.value ? [] : articles.value.slice(1) as Article[]);

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
          <hero-article-entry-card
            v-if="firstArticle"
            :banner="firstArticle.attributes.media?.banner?.data.attributes.url || ''"
            :type="firstArticle.attributes.category?.data?.attributes?.title || ''"
            :tags="(firstArticle.attributes.tags?.data || []).map(tag => tag.attributes.title)"
            :title="firstArticle.attributes.title"
            :published-at="firstArticle.attributes.publishedAt"
            class="hidden sm:flex mb-8" />
          <article-entry-card
            v-if="firstArticle"
            :banner="firstArticle.attributes.media?.banner?.data.attributes.url || ''"
            :type="firstArticle.attributes.category?.data?.attributes?.title || ''"
            :tags="(firstArticle.attributes.tags?.data || []).map(tag => tag.attributes.title)"
            :title="firstArticle.attributes.title"
            :published-at="firstArticle.attributes.publishedAt"
            class="sm:hidden mb-8" />
          <div class="space-y-8 sm:space-y-0 sm:space-x-8 flex flex-col sm:flex-row justify-start items-stretch">
            <div class="flex-1" v-for="article in otherArticles">
              <article-entry-card
                :banner="article.attributes.media?.banner?.data.attributes.url || ''"
                :type="article.attributes.category?.data.attributes.title || ''"
                :tags="(article.attributes.tags?.data || []).map(tag => tag.attributes.title)"
                :title="article.attributes.title"
                :published-at="article.attributes.publishedAt" />
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
