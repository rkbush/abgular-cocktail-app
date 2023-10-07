<template>
  <div>
    <label class="swap swap-rotate">
      <input type="checkbox" v-model="selTheme" @click="changeTheme" />
      <moon-icon class="swap-off w-7 h-7 text-white" />
      <sun-icon class="swap-on w-8 h-8 text-yellow-600" />
    </label>
  </div>
</template>
<script setup>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';
import { ref, onMounted } from 'vue';
import { useGlobalStore } from '../../stores';
const store = useGlobalStore();
const selTheme = ref(false);

onMounted(() => {
  selTheme.value = store.theme !== 'dark';
});

/**
 * Change of theme
 */
const changeTheme = () => {
  let selected = 'dark'; 
  if (selTheme.value) {
    selected = 'dark';
  } else {
    selected = 'light';
  }
  store.changeTheme(selected);
}

</script>