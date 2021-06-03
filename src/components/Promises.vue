<template>
  <div class="bg-blue-600 py-5">
    <p class="text-3xl text-white mb-10 text-center"><span class="border-b border-white">Nos engagements</span></p>

    <div class="flex items-center justify-center flex-wrap">
      <div class="mb-10 w-full flex justify-center items-center flex-wrap">
        <img src="/assets/img/promises/chat.png" alt="" class="h-20 mb-2">
        <p class="text-2xl text-center w-full">Conseils</p>
      </div>

      <div class="mb-10 w-full flex justify-center items-center flex-wrap">
        <img src="/assets/img/promises/labour-day.png" alt="" class="h-20 mb-2">
        <p class="text-2xl text-center w-full">Installation</p>
      </div>

      <div class="mb-10 w-full flex justify-center items-center flex-wrap">
        <img src="/assets/img/promises/maintenance.png" alt="" class="h-20 mb-2">
        <p class="text-2xl text-center w-full">Réparation</p>
      </div>

      <div class="mb-10 w-full flex justify-center items-center flex-wrap">
        <img src="/assets/img/promises/operator.png" alt="" class="h-20 mb-2">
        <p class="text-2xl text-center w-full">Maintenance & SAV</p>
      </div>

      <div class="mb-10 w-full flex justify-center items-center flex-wrap">
        <img src="/assets/img/promises/settings.png" alt="" class="h-20 mb-2">
        <p class="text-2xl text-center w-full">Paramétrage</p>
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Promises',
  components: {
  },
});
</script>