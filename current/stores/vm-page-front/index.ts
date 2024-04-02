import { defineStore } from "pinia";
import axios from "axios";
import {useRoute} from "vue-router";

import type Article from "~/models/types/article";
import type NewsEntry from "~/models/types/news-entry";

export const useVmPageFront = defineStore('vm-page-front', () => {

  const route = useRoute();
  const { params } = route;
  const { locale = 'th' } = params;

  const articles = ref([] as Article[]);
  const newsEntries = ref([] as NewsEntry[]);

  const listFrontArticles = async (): Promise<Article[]> => {
    const response = await axios.get(`/api/front/article?locale=${locale}`);
    const { data: responseData = {} } = response;
    const { data } = responseData;
    return (data || []) as Article[];
  };

  const listNewsEntries = async () => {
    const response = await axios.get(`/api/front/news-entry?locale=${locale}`);
    const { data: responseData = {} } = response;
    const { data } = responseData;
    return (data || []) as NewsEntry[];
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
