import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useGlobalStore = defineStore('global', () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
  const cocktails = ref({});
  const lang = ref('EN');
  const error = ref(false);
  const isLoading = ref(false);
  const theme = ref('dark');

  const getCocktails = async () => {
    try {
      isLoading.value = true;
      const { data, status } = await axios.get(`${url}`, {
        params: {
          f: 'a',
        }
      });
      isLoading.value = false;
      
      if (status === 200) {
        cocktails.value = data.drinks;
      }
    } catch (er) {
      isLoading.value = false;
      error.value = true;
    }
  };

  const searchCocktails = async (search) => {
    try {
      isLoading.value = true;
      const { data, status } = await axios.get(`${url}`, {
        params: {
          s: search,
        }
      });
      isLoading.value = false;
      
      if (status === 200) {
        cocktails.value = data.drinks;
      }
    } catch (er) {
      isLoading.value = false;
      error.value = true;
    }
  };

  const toggleError = () => {
    error.value = !error.value;
  }

  const changeLanguage = (data) => {
    lang.value = data;
    localStorage.setItem('language', data);
  }

  const changeTheme = (data) => {
    theme.value = data;
    localStorage.setItem('theme', data);
    document.documentElement.setAttribute('data-theme', data);
  }

  return {
    cocktails,
    lang,
    error,
    isLoading,
    theme,
    getCocktails,
    changeLanguage,
    changeTheme,
    searchCocktails,
    toggleError,
  }
});
