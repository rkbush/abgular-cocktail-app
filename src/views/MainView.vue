<template>
  <menu-bar />
  <main-loader v-if="store.isLoading" />
  <div v-else-if="store.cocktails" class="grid grid-cols-1 gap-10 lg:grid-cols-4 w-full mt-20">
    <cocktail-item
      v-for="drink in store.cocktails" 
      :key="drink.idDrink" 
      :drink="drink"
      :language="store.lang" 
    />
  </div>
  <div 
    v-else 
    class="flex w-full"
  >
    <div class="flex items-center justify-center text-3xl font-bold w-full mt-20">
      <div>
        <exclamation-triangle-icon class="h-20 w-20 mx-auto" />
        No data found
      </div>
    </div>
  </div>
  <error-toast v-if="store.error" />
</template>
<script setup>
import { onBeforeMount } from 'vue';
import MainLoader from '../components/MainLoader.vue';
import MenuBar from '../components/header/MenuBar.vue';
import CocktailItem from '../components/CocktailItem.vue';
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid';
import { useGlobalStore } from '../stores';
import ErrorToast from '../components/ErrorToast.vue';

const store = useGlobalStore();

onBeforeMount(async () => {
  await store.getCocktails();
});

</script>
