<template>
  <div class="bg-white text-black">
    <div class="flex items-center justify-between p-2">

      <router-link :to="{ name : 'Home' }">
        <img src="/assets/img/logo.png" alt="Link to homepage" class="h-10">
      </router-link>

      <router-link :to="{ name : 'Connexion' }">
        <img src="/assets/img/account.png" alt="Link to account" class="h-10">
      </router-link>
    </div>
    <div class="mt-2 pb-5 text-lg px-2" id="mobileMenu">
    <ul>
      <li class="mb-3">
        <form class="flex" action="/" method="GET">
          <input type="text" name="search" id="search" class="border-2 border-black bg-white w-3/5 px-1 focus:outline-none focus:border-blue-600" placeholder="Votre recherche...">
          <button type="submit" class="border-2 border-blue-900 w-2/5 bg-blue-600 text-white">Rechercher !</button>
        </form>
      </li>
      <li class="mb-3 border-b-2 border-blue-600"><router-link :to="{ name : 'Home' }">Services</router-link></li>
      <li class="mb-3 border-b-2 border-blue-600"><router-link :to="{ name : 'Actualites' }">Actualités</router-link></li>
      <li class="border-b-2 border-blue-600"><router-link :to="{ name : 'Contact' }">Contact</router-link></li>
    </ul>
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Nav',
});
</script>
