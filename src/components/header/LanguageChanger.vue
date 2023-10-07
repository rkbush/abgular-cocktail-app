<template>
  <div>
    <select 
      class="select select-bordered w-full max-w-xs"
      v-model="lang"
      @change="changeLang"
    >
      <option v-for="(value, key) in languages" :key="key" :value="value">
        {{ key }}
      </option>
    </select>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { useGlobalStore } from '../../stores';
  import { languages } from '../../enums/language';

  const store = useGlobalStore();
  const lang = ref(store.lang);

  const changeLang = () => {
    store.changeLanguage(lang.value);
  }
</script>