<template>
  <div class="bg-white text-black">
    <div class="flex items-center justify-between p-2">

      <router-link :to="{ name : 'Home' }">
        <img src="/assets/img/logo.png" alt="Link to homepage" class="h-10">
      </router-link>

      <router-link :to="{ name : 'Connexion' }" v-if="!user.token">
        <img src="/assets/img/account.png" alt="Link to account" class="h-10">
      </router-link>

      <router-link :to="{ name : 'Profile' }" v-else>
        <img src="/assets/img/account.png" alt="Link to account" class="h-10">
      </router-link>
    </div>
    <div class="mt-2 pb-5 text-lg px-2" id="mobileMenu">
    <ul>
      <li class="mb-3 border-b-2 border-blue-600"><router-link :to="{ name : 'Home' }">Services</router-link></li>
      <li class="mb-3 border-b-2 border-blue-600"><router-link :to="{ name : 'Actualites' }">Actualités</router-link></li>
      <li class="border-b-2 border-blue-600"><router-link :to="{ name : 'Contact' }">Contact</router-link></li>
    </ul>
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import {mapGetters} from 'vuex'

export default defineComponent({
  name: 'Nav',

  computed : {
    ...mapGetters({
      user : 'user'
    })
  }
});
</script>
