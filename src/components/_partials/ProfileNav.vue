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
      <div class="flex items-center justify-center">
        <button class="px-10 py-1 text-base text-white text-center border-2 border-red-900 bg-red-600" @click="logout">Déconnexion</button>
      </div>
    </ul>
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapGetters } from "vuex"
import { mapActions } from "vuex"

export default defineComponent({
  name: 'ProfileNav',
  computed : {
    ...mapGetters({
      user : 'user'
    })
  },
  methods : {
    ...mapActions({
      clearState : 'clearState'
    }),

    logout(){
      let init = {
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.user.token,
          'Content-Type': 'application/json'
        },
      }
      fetch("https://ezcurity.herokuapp.com/api/auth/logout", init)
      .catch(error => {console.log('error : ', error)})

      this.clearState()
      this.$router.push({ name: 'Home' })
    }
  }
});
</script>
