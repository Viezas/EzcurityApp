<template>
  <div class="bg-white text-black">
    <div class="flex items-center justify-between p-2">

      <router-link :to="{ name : 'Home' }">
        <img src="/assets/img/logo.png" alt="Link to homepage" class="h-10">
      </router-link>
      
    </div>
    <div class="mt-2 pb-5 text-lg px-2" id="mobileMenu">
    <ul>
      <li class="mb-3 border-b-2 border-blue-600"><router-link :to="{ name : 'Profile' }">Mes informations</router-link></li>
      <li class="mb-3 border-b-2 border-blue-600"><router-link :to="{ name : 'Abonnement' }">Mes abonnements</router-link></li>
      <li class="mb-3 border-b-2 border-blue-600"><router-link :to="{ name : 'Facturations' }">Mes facturations</router-link></li>
      <router-link :to="{ name : 'Home' }">
        <li class="px-10 py-1 text-base text-white text-center border-2 border-red-900 bg-red-600">Déconnexion</li>
      </router-link>
    </ul>
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfileNav',
});
</script>
