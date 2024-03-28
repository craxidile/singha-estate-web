<script setup lang="ts">

import PageContent from "~/views/page-front/components/page-content/PageContent.vue";
import ExperienceCard
  from "~/views/page-front/sections/section-experience/components/card-experience/ExperienceCard.vue";

import imgExperience01 from '~/assets/images/page-front/experience-01.png';
import imgExperienceStory01 from '~/assets/images/page-front/experience-story-01.png';
import imgExperienceStory02 from '~/assets/images/page-front/experience-story-02.png';
import imgExperienceStory03 from '~/assets/images/page-front/experience-story-03.png';

</script>

<template>
  <div class="relative z-[3] pt-12 sm:pt-[120px] pb-20 sm:pb-[280px] bg-se-blue-700">
    <div class="absolute left-0 top-0 w-full aspect-[375/510] bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: `url(${imgExperience01})` }" />
    <page-content>
      <div class="relative box-border sm:py-[60px] sm:px-[80px] sm:aspect-[1328/748] flex flex-col justify-start items-stretch sm:items-start">
        <div class="hidden sm:block absolute left-0 top-0 w-full h-full bg-cover bg-center bg-no-repeat"
          :style="{ backgroundImage: `url(${imgExperience01})` }" />
        <div class="relative w-full sm:h-24 flex flex-col sm:flex-row justify-start items-stretch sm:items-center">
          <span class="block text-serif-h5-nm sm:text-serif-h3-nm text-txt-yellow-main text-center sm:text-left">
            Experience <br class="sm:hidden" /> unmatched living
          </span>
        </div>
        <p class="mt-3 sm:mt-0 relative w-full max-w-[800px] text-body-1-nm sm:text-sans-h5-nm text-txt-light-main text-center sm:text-left">
          with “True Luxury Living Mastery” where craftsmanship and sophistication redefine concept of luxury
        </p>
        <div class="mt-[84px] sm:mt-0 sm:absolute w-full sm:left-0 sm:bottom-[212px] sm:translate-y-full sm:space-x-20 flex flex-col sm:flex-row justify-end items-center sm:items-start">
          <div class="sm:h-[428px] space-y-5 sm:space-y-0 sm:space-x-16 flex flex-col sm:flex-row justify-end items-center sm:items-start">
            <experience-card :banner="imgExperienceStory01" title="Quality" />
            <experience-card :banner="imgExperienceStory02" title="Healthy" />
            <experience-card :banner="imgExperienceStory03" title="Sustainable" />
          </div>
          <button class="rounded-sm w-10 h-10 mt-10 sm:mt-[288px] bg-btn-primary-idle flex flex-row justify-center items-center">
            <i class="block text-icon-md text-txt-light-main icon-arrow-narrow-right" />
          </button>
        </div>
      </div>
    </page-content>
  </div>
</template>

<style scoped>

</style>
