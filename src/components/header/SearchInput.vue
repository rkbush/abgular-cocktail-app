<template>
  <div class="flex order-2 lg:order-1 w-full mb-5 lg:mb-0 lg:w-3/4">
    <input
      v-model="search"
      type="text" 
      placeholder="Search by name..." 
      class="input input-bordered w-full" 
    />
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useGlobalStore } from '../../stores';

const store = useGlobalStore();
const search = ref('');

watch(search, async (newSearch, oldSearch) => {
  if (newSearch !== oldSearch) {
    if (newSearch !== '') {
      store.searchCocktails(newSearch);
    } else {
      store.getCocktails();
    }
  }
});

</script>