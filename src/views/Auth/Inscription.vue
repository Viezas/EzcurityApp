<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Ezcurity</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ezcurity</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <div id="container mt-96">
        <Nav />
          <div class="bg-white text-black py-5">

            <div class="w-full mb-5 bg-red-600 py-2 text-white text-center" v-if="error">
              {{ error }}
            </div>

            <form @submit.prevent="handleSubmit" class="flex justify-center items-center flex-wrap py-6 mb-10">
              <div class="w-5/6 mb-5">
                <label for="name">Nom d'utilisateur<span class="text-red-600">*</span></label><br>
                <input type="text" name="name" id="name" class="border border-gray-600 w-full px-1 bg-white" autofocus required v-model="form.name">
              </div>
              <div class="w-5/6 mb-5">
                <label for="email">Email<span class="text-red-600">*</span></label><br>
                <input type="text" name="email" id="email" class="border border-gray-600 w-full px-1 bg-white" required v-model="form.email">
              </div>
              <div class="w-5/6 mb-5">
                <label for="password">Mot de passe<span class="text-red-600">*</span></label><br>
                <input type="password" name="password" id="password" class="border border-gray-600 w-full px-1 bg-white" required v-model="form.password">
              </div>
              <div class="w-5/6 mb-1">
                <label for="phone">Numéro de téléphone<span class="text-red-600">*</span></label><br>
                <input type="tel" name="phone" id="phone" class="border border-gray-600 w-full px-1 bg-white" required v-model="form.phone">
              </div>
              <small class="text-red-600 w-5/6 mb-5">*champs obligatoire</small>
              <button type="submit" class="text-white bg-blue-600 border-2 border-blue-900 px-5 py-1 mb-2" :disabled="form.name.length == 0 || form.email.length == 0 || form.password.length == 0 || form.phone.length < 10">Inscription</button>
              <small class="w-5/6 text-center">Vous possédez déjà compte ? <router-link :to="{name : 'Connexion'}" class="text-blue-500 underline">Connectez-vous.</router-link></small>
            </form>

          </div>
        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import { defineComponent } from 'vue';
import Nav from '../../components/_partials/Nav.vue'
import Footer from '../../components/_partials/Footer.vue'
import { mapActions } from "vuex"

export default defineComponent({
  name: 'Inscription',
  data(){
    return {
      form : {
        name : '',
        password : '',
        email : '',
        phone : ''
      },
      error : '',
      message : ''
    }
  },

  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    Nav,
    Footer
  },

  methods : {
    ...mapActions({
      addUser : "addUser"
    }),
    
    handleSubmit(){
      let init = {
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(this.form)
      }

      fetch(`https://ezcurity.herokuapp.com/api/auth/register`, init)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (!data.token) {
          if (data.errors) {
            return this.error = data.errors[Object.keys(data.errors)[0]]
          }
          return this.error = data.message
        }
        this.addUser(data)
        this.$router.push({name : 'Profile'})
      })
    }
  }
});
</script>