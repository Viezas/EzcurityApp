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
          <div class="bg-white text-black h-96">
            <form @submit.prevent="handleSubmit" class="flex justify-center items-center flex-wrap py-6">
              <div class="w-5/6 mb-5">
                <label for="email">Email<span class="text-red-600">*</span></label><br>
                <input type="text" name="email" id="email" class="border border-gray-600 w-full px-1 bg-white" autofocus required v-model="form.email">
              </div>
              <div class="w-5/6 mb-1">
                <label for="password">Mot de passe<span class="text-red-600">*</span></label><br>
                <input type="password" name="password" id="password" class="border border-gray-600 w-full px-1 bg-white" required v-model="form.password">
              </div>
              <small class="text-red-600 w-5/6 mb-5">*champs obligatoire</small>
              <button type="submit" class="text-white bg-blue-600 border-2 border-blue-900 px-5 py-1 mb-2" :disabled="form.email.length == 0 || form.password.length == 0">Connexion</button>
              <small class="w-5/6 text-center">Vous n'avez pas encore de compte ? <router-link :to="{name : 'Inscription'}" class="text-blue-500 underline">Cliquez ici.</router-link></small>
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

export default defineComponent({
  name: 'Connexion',
  data(){
    return {
      form : {
        'email' : '',
        'password' : ''
      }
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
    handleSubmit(){
      this.$router.push({ name: 'Profile' });
    }
  }
});
</script>