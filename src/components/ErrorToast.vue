<template>
  <div class="toast toast-top toast-end">
    <div class="alert alert-error rounded">
      <x-circle-icon class="cursor-pointer h-7 w-7" @click="store.toggleError" />
      <span>
        We have encountered an error. Please contact administrator
      </span>
    </div>
  </div>
</template>
<script setup>
import { useGlobalStore } from '../stores';
import { XCircleIcon } from '@heroicons/vue/24/solid';

const store = useGlobalStore();
</script>