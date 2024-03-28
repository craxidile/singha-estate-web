<script setup lang="ts">

import type ResidenceProject from "~/models/types/residence-project";
import PageContent from "~/views/page-front/components/page-content/PageContent.vue";
import Pagination from "~/views/page-front/components/pagination/Pagination.vue";
import {ResidenceProjectDto} from "~/models/dto/residence-project-dto";

import imgDiscover01 from '~/assets/images/page-front/discover-01.png';

const projects = ref([] as ResidenceProject[]);
const projectIndex = ref(0);

const residenceProjectDto = new ResidenceProjectDto();

const currentProject = computed(() => projects.value[projectIndex.value]);

onMounted(async () => {
  projectIndex.value = 0;
  projects.value = await residenceProjectDto.list();
});

onBeforeUnmount(() => {
});

const onChange = (page: number) => {
  projectIndex.value = page - 1;
};

</script>

<template>
  <div v-if="currentProject" class="z-[3] relative py-20 sm:pt-[156px] sm:py-[252px] transition-all duration-700 ease-in-out"
    :style="{ backgroundColor: currentProject.mainColor }">
    <div class="space-y-[72px] flex flex-col justify-start items-center">
      <page-content>
        <div class="flex flex-col justify-start items-center">
          <div class="w-full max-w-[1096px] space-y-6 flex flex-col justify-start items-stretch">
            <span class="block text-serif-h5-nm sm:text-serif-h3-nm text-txt-light-main text-center">
              Discover our collections
            </span>
            <p class="text-body-3-nm sm:text-body-1-nm text-txt-light-main text-center">
              Singha Estate's varied residential development, from high-rise to low-rise projects, features a range of
              properties—single detached houses, private estates, home offices, and condominiums. Tailored to luxury
              customers across different brands, these distinctive offerings not only define Singha Estate homes but
              also embody the company's commitment "Best - in - class" to excellence across all segments.
            </p>
          </div>
        </div>
      </page-content>
      <div class="relative w-full sm:aspect-[16/10]">
        <div class="aspect-[16/10] sm:aspect-auto sm:absolute sm:left-0 sm:top-0 sm:w-full sm:h-full bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
          :style="{ backgroundImage: `url(${currentProject.banner})` }" />
        <div class="sm:absolute w-full sm:left-0 sm:bottom-[72px] sm:translate-y-full">
          <page-content>
            <div class="-mx-6 sm:mx-auto px-6 py-5 sm:p-10 m-auto w-[calc(100%+48px)] sm:w-full max-w-[1096px] space-y-6 flex flex-col sm:flex-row justify-between items-stretch transition-all duration-700 ease-in-out"
              :style="{ backgroundColor: currentProject.subColor }">
              <div class="space-y-2 flex flex-col justify-start items-start">
                <span class="block text-txt-light-main text-sans-h6-sb">{{ currentProject.title }}</span>
                <span class="block text-txt-light-main text-body-3-sb uppercase">{{ currentProject.location }}</span>
                <span class="block text-txt-light-main text-body-3-nm uppercase">{{ currentProject.slogan }}</span>
              </div>
              <pagination :max="projects.length" @change="onChange" />
            </div>
          </page-content>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
