import { defineStore } from "pinia";
import axios from "axios";
import {useRoute} from "vue-router";

export const useVmPageFront = defineStore('vm-page-front', () => {

  const route = useRoute();
  const { params } = route;
  const { locale = 'th' } = params;

  const articles = ref([] as any[]);
  const newsEntries = ref([] as any[]);

  const listFrontArticles = async () => {
    const response = await axios.get(`/api/front/article?locale=${locale}`);
    const { data: responseData = {} } = response;
    const { data } = responseData;
    return data;
  };

  const listNewsEntries = async () => {
    const response = await axios.get(`/api/front/news-entry?locale=${locale}`);
    const { data: responseData = {} } = response;
    const { data } = responseData;
    return data;
  };

  const bind = async () => {
    articles.value = await listFrontArticles();
    newsEntries.value = await listNewsEntries();
  };

  const unbind = () => {
  };

  return {
    // Observables
    articles,
    newsEntries,
    // Actions
    bind,
    unbind,
  };

});
