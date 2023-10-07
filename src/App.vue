<script setup>
import { onMounted } from 'vue';
import { useGlobalStore } from './stores';
import MainView from './views/MainView.vue';
const store = useGlobalStore();

onMounted(() => {
  if (localStorage.getItem('theme')) {
    store.changeTheme(localStorage.getItem('theme'));
  }
  if (localStorage.getItem('language')) {
    store.changeLanguage(localStorage.getItem('language'));
  }
});
</script>

<template>
  <main id="main-container">
    <main-view />
  </main>
</template>