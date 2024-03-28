<script setup lang="ts">

import PageContent from "~/views/page-front/components/page-content/PageContent.vue";
import ResidenceCard from "~/views/page-front/sections/section-residence/components/card-residence/ResidenceCard.vue";

import imgResidence01 from '~/assets/images/page-front/residence-01.png';
import imgResidence02 from '~/assets/images/page-front/residence-02.png';
import imgResidence03 from '~/assets/images/page-front/residence-03.png';
import imgResidence04 from '~/assets/images/page-front/residence-04.png';
import DropdownList from "~/views/page-front/components/dropdown-list/DropdownList.vue";

</script>

<template>
<div class="z-[3] relative py-20 sm:py-[156px] bg-earth-100">
  <page-content>
    <div class="space-y-10 sm:space-y-[72px] flex flex-col justify-start items-stretch">
      <span class="text-serif-h5-nm sm:text-serif-h3-nm text-txt-dark-main text-center">
        Residence <br class="sm:hidden" /> Discovery
      </span>
      <div class="sm:space-y-10 flex flex-col justify-start items-stretch">
        <div class="space-x-6 hidden sm:flex flex-row justify-start items-stretch">
          <div class="flex-1">
            <dropdown-list placeholder="Property type" />
          </div>
          <div class="flex-1">
            <dropdown-list placeholder="Location" />
          </div>
          <div class="flex-1">
            <dropdown-list placeholder="Brands" />
          </div>
        </div>
        <div class="mb-7 sm:mb-0 space-y-7 sm:space-y-0 flex flex-col sm:flex-row justify-between items-stretch sm:items-center">
          <div class="space-x-1 flex flex-row justify-start items-center uppercase">
            <span class="text-body-3-sb text-txt-dark-main">22 Projects</span>
            <span class="text-body-3-nm text-placeholder">(4/22)</span>
          </div>
          <div class="h-px bg-earth-200" />
          <div class="space-x-4 flex flex-row justify-start items-stretch">
            <button class="w-10 h-10 rounded-sm border border-btn-ghost-idle bg-btn-ghost-idle flex flex-row justify-center items-center">
              <i class="icon-view-grid text-txt-light-main text-icon-xs leading-none" />
            </button>
            <button class="w-10 h-10 rounded-sm border border-btn-ghost-idle flex flex-row justify-center items-center">
              <i class="icon-view-list text-btn-ghost-idle text-icon-xs leading-none" />
            </button>
            <div class="flex-1 sm:hidden" />
            <button class="px-4 py-2 rounded-sm border border-btn-ghost-idle">
              <span class="text-caption-sb sm:text-body-3-sb text-btn-ghost-idle leading-none">Map view</span>
            </button>
          </div>
        </div>
        <div class="space-y-7 sm:space-y-0 flex flex-col sm:grid sm:grid-cols-2 sm:gap-6">
          <residence-card :banner="imgResidence01" title="SHAWN" location="PANYA INDRA"
            :min-budget="22" :max-budget="45" :is-new="true" ribbon-class="bg-brand-shawn-main" />
          <residence-card :banner="imgResidence02" title="S’RIN" location="Ratchaphruek-Sai1"
            :min-budget="39" :max-budget="75" :is-new="true" ribbon-class="bg-brand-srin-main" />
          <residence-card :banner="imgResidence03" title="SMYTH'S" location="RAMINTRA"
            :min-budget="120" ribbon-class="bg-gradient-smyth" />
          <residence-card :banner="imgResidence04" title="SIRANINN Residences" location="PATTANAKARN"
            :min-budget="80" :max-budget="180" ribbon-class="bg-brand-siraninn-main" />
        </div>
      </div>
      <button class="self-center rounded-sm py-3 px-6 bg-btn-primary-idle">
        <span class="text-txt-light-main text-body-1-sb">Explore more properties</span>
      </button>
    </div>
  </page-content>
</div>
</template>

<style scoped>

</style>
