<template>
  <div class="menu-bar">
    <search-input />
    <div 
      class="settings-bar">
      <theme-changer />
      <language-changer />
    </div>
  </div>
</template>
<script setup>
import SearchInput from './SearchInput.vue';
import ThemeChanger from './ThemeChanger.vue';
import LanguageChanger from './LanguageChanger.vue';
</script>