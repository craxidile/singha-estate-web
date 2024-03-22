<script setup lang="ts">

import PageContent from "~/views/page-front/components/page-content/PageContent.vue";
import BrandCard from "~/views/page-front/sections/section-portfolios/components/card-brand/BrandCard.vue";

import imgPortfolio01 from '~/assets/images/page-front/portfolio-01.png';
import imgPortfolio02 from '~/assets/images/page-front/portfolio-02.png';

import imgBrand01Light from '~/assets/images/logo/logo-santiburi-light.svg';
import imgBrand01Dark from '~/assets/images/logo/logo-santiburi-dark.svg';
import imgBrand02Light from '~/assets/images/logo/logo-la-soie-light.svg';
import imgBrand02Dark from '~/assets/images/logo/logo-la-soie-dark.svg';
import imgBrand03Light from '~/assets/images/logo/logo-smyths-light.svg';
import imgBrand03Dark from '~/assets/images/logo/logo-smyths-dark.svg';
import imgBrand04Light from '~/assets/images/logo/logo-siraninn-light.svg';
import imgBrand04Dark from '~/assets/images/logo/logo-siraninn-dark.svg';
import imgBrand05Light from '~/assets/images/logo/logo-srin-light.svg';
import imgBrand05Dark from '~/assets/images/logo/logo-srin-dark.svg';
import imgBrand06Light from '~/assets/images/logo/logo-shawn-light.svg';
import imgBrand06Dark from '~/assets/images/logo/logo-shawn-dark.svg';
import imgBrand07Light from '~/assets/images/logo/logo-sentre-light.svg';
import imgBrand07Dark from '~/assets/images/logo/logo-sentre-dark.svg';
import imgBrand08Light from '~/assets/images/logo/logo-esse-light.svg';
import imgBrand08Dark from '~/assets/images/logo/logo-esse-dark.svg';
import imgBrand09Light from '~/assets/images/logo/logo-extro-light.svg';
import imgBrand09Dark from '~/assets/images/logo/logo-extro-dark.svg';

</script>

<template>
  <div class="z-[3] relative pt-20 sm:pt-[84px] pb-[120px] sm:pb-[160px] bg-gradient-portfolio">
    <page-content class="mb-[60px]">
      <span class="text-serif-h4-nm sm:text-serif-h3-nm text-txt-light-main text-center">
        Our <br class="sm:hidden" /> Portfolios
      </span>
    </page-content>
    <div class="space-y-[92px] sm:space-y-[132px] flex flex-col justify-start items-stretch">
      <div class="-space-y-6 sm:-space-y-10 flex flex-col justify-start items-stretch">
        <div class="aspect-[375/210] sm:aspect-[4/1] bg-cover bg-no-repeat bg-center"
          :style="{ backgroundImage: `url(${imgPortfolio01})` }"/>
        <page-content>
          <div class="w-full max-w-[1184px] space-y-8 sm:space-y-[100px] flex flex-col justify-start items-stretch">
            <span class="text-serif-h4-nm sm:text-serif-h1-nm text-se-yellow-300 text-center sm:text-left">
              House <br class="sm:hidden" /> Projects
            </span>
            <div class="space-y-8 sm:space-y-7 flex flex-col justify-start items-stretch sm:items-start">
              <div class="space-y-8 sm:space-y-0 sm:space-x-20 flex flex-col sm:flex-row justify-start items-center sm:items-start">
                <brand-card :light-banner="imgBrand01Light" :dark-banner="imgBrand01Dark" title="Santiburi" />
                <brand-card :light-banner="imgBrand02Light" :dark-banner="imgBrand02Dark" title="La Soie" />
                <brand-card :light-banner="imgBrand03Light" :dark-banner="imgBrand03Dark" title="Smyths" />
              </div>
              <div class="space-y-8 sm:space-y-0 sm:space-x-20 flex flex-col sm:flex-row justify-start items-center sm:items-start">
                <brand-card :light-banner="imgBrand04Light" :dark-banner="imgBrand04Dark" title="Siraninn" />
                <brand-card :light-banner="imgBrand05Light" :dark-banner="imgBrand05Dark" title="Srin" />
                <brand-card :light-banner="imgBrand06Light" :dark-banner="imgBrand06Dark" title="Shawn" />
                <brand-card :light-banner="imgBrand07Light" :dark-banner="imgBrand07Dark" title="Sentre" />
              </div>
            </div>
          </div>
        </page-content>
      </div>
      <div class="-space-y-6 sm:-space-y-10 flex flex-col justify-start items-stretch">
        <div class="aspect-[375/210] sm:aspect-[4/1] bg-cover bg-no-repeat bg-center"
          :style="{ backgroundImage: `url(${imgPortfolio02})` }"/>
        <page-content>
          <div class="w-full max-w-[1184px] space-y-8 sm:space-y-[84px] flex flex-col justify-start items-stretch">
            <span class="text-serif-h4-nm sm:text-serif-h1-nm text-se-yellow-300 text-center sm:text-left">
              Condominium Projects
            </span>
            <div class="space-y-7 flex flex-col justify-start items-stretch sm:items-start">
              <div class="space-y-8 sm:space-y-0 sm:space-x-20 flex flex-col sm:flex-row justify-start items-center sm:items-start">
                <brand-card :light-banner="imgBrand08Light" :dark-banner="imgBrand08Dark" title="Esse" />
                <brand-card :light-banner="imgBrand09Light" :dark-banner="imgBrand09Dark" title="Extro" />
              </div>
            </div>
          </div>
        </page-content>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
