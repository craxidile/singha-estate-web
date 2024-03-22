<script setup lang="ts">

import PageContent from "~/views/page-front/components/page-content/PageContent.vue";
</script>

<template>
  <div class="py-[72px] sm:py-20 bg-earth-100">
    <page-content>
      <div class="relative w-full max-w-[1100px] m-auto space-y-6 sm:space-y-10 flex flex-col justify-start items-stretch">
        <div class="sm:space-x-8 space-y-6 sm:space-y-0 flex flex-col sm:flex-row justify-between items-center sm:items-end">
          <div class="space-y-8 flex flex-col justify-start items-center sm:items-start">
            <img alt="Logo" src="~/assets/images/logo/logo-se-dark.svg" class="block h-14 sm:h-20" />
            <div class="space-y-4 flex flex-col justify-start items-center sm:items-start text-txt-blue-main">
              <span class="block uppercase text-body-3-bd text-center sm:text-left">
                SINGHA ESTATE PCL.
              </span>
              <p class="block max-w-[508px] text-center sm:text-left">
                123 Suntowers Building B, 22nd Floor, Vibhavadi-Rangsit Road, Chom Phon, Chatuchak, Bangkok 10900
              </p>
            </div>
          </div>
          <div class="sm:hidden w-full h-px bg-earth-200" />
          <div class="space-y-8 flex flex-col justify-start items-center sm:items-end text-txt-blue-main">
            <div class="space-y-4 flex flex-col justify-start items-center sm:items-end">
              <a href="tel:1221" class="block">
                <img alt="Call 1221" src="~/assets/images/page-front/call-se.svg" class="block h-7 sm:h-auto" />
              </a>
              <ul class="space-x-5 flex flex-row justify-start items-center text-icon-lg sm:text-icon-sm text-txt-blue-main">
                <li><a href="#"><i class="icon-line" /></a></li>
                <li><a href="#"><i class="icon-facebook" /></a></li>
                <li><a href="#"><i class="icon-instagram" /></a></li>
                <li><a href="#"><i class="icon-youtube" /></a></li>
              </ul>
            </div>
            <ul class="space-x-8 hidden sm:flex flex-row justify-start items-center text-body-3-nm menu">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Venue Rentals</a></li>
              <li><a href="#">Feedback & Enquiries</a></li>
            </ul>
          </div>
        </div>
        <div class="w-full h-px bg-earth-200" />
        <div class="sm:space-x-8 flex flex-col sm:flex-row justify-between items-stretch">
          <div class="space-x-8 hidden sm:flex flex-row justify-between items-end">
            <div class="space-y-8 flex flex-col justify-start items-end text-txt-blue-main">
              <ul class="space-x-8 flex flex-row justify-start items-center text-caption-nm menu">
                <li><a href="#">Report Vulnerability</a></li>
                <li><a href="#">Privacy Statement</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Legal</a></li>
              </ul>
            </div>
          </div>
          <span class="text-txt-blue-main text-caption-nm text-center sm:text-left">
            Copyright © 2023, Singha Estate Public Company Limited.
          </span>
        </div>
      </div>
    </page-content>
  </div>
</template>

<style scoped>
ul.menu li {
  @apply relative;
}
ul.menu li:not(:first-child)::before {
  @apply absolute top-1/2 -translate-y-1/2 w-px h-3/4 bg-earth-200;
  left: -17px;
  content: "";
}
</style>
