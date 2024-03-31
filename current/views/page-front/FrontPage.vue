<script setup lang="ts">

import FrontLayout from "~/views/page-front/layouts/FrontLayout.vue";
import HeroBannersSection from "~/views/page-front/sections/section-hero-banners/HeroBannersSection.vue";
import ExperienceSection from "~/views/page-front/sections/section-experience/ExperienceSection.vue";
import DiscoverSection from "~/views/page-front/sections/section-discover/DiscoverSection.vue";
import LearnMoreSection from "~/views/page-front/sections/section-learn-more/LearnMoreSection.vue";
import LifestyleSection from "~/views/page-front/sections/section-lifestyle/LifestyleSection.vue";
import PromotionSection from "~/views/page-front/sections/section-promotion/PromotionSection.vue";
import ResidenceSection from "~/views/page-front/sections/section-residence/ResidenceSection.vue";
import PortfoliosSection from "~/views/page-front/sections/section-portfolios/PortfoliosSection.vue";
import {useVmPageFront} from "~/stores/vm-page-front";

const vmPageFront = useVmPageFront();

onMounted(async () => {
  await vmPageFront.bind();
});

onBeforeUnmount(() => {
  vmPageFront.unbind();
});

</script>

<template>
<front-layout>
  <template #main>
    <hero-banners-section />
    <experience-section />
    <discover-section />
    <portfolios-section />
    <residence-section />
    <promotion-section />
    <lifestyle-section />
    <learn-more-section />
  </template>
</front-layout>
</template>

<style scoped>

</style>
