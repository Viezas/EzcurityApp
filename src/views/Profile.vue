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
        <div class="bg-white py-5 text-black">
          <form @submit.prevent="handleSubmit" class="flex justify-center items-center flex-wrap py-6 mb-10">
            <div class="mb-6">
              <p class="text-blue-600 text-3xl text-center">Mes informations</p>
            </div>
            <div class="w-5/6 mb-5">
              <label for="name">Nom d'utilisateur</label><br>
              <input type="text" name="name" id="name" class="border border-gray-600 w-full px-1 bg-white" required v-model="form.name">
            </div>
            <div class="w-5/6 mb-5">
              <label for="email">Email</label><br>
              <input type="text" name="email" id="email" class="border border-gray-600 w-full px-1 bg-white"  required v-model="form.email">
            </div>
            <div class="w-5/6 mb-5">
              <label for="password">Mot de passe</label><br>
              <input type="password" name="password" id="password" class="border border-gray-600 w-full px-1 bg-white" required v-model="form.password">
            </div>
            <div class="w-5/6 mb-1">
              <label for="phone">Numéro de téléphone</label><br>
              <input type="tel" name="phone" id="phone" class="border border-gray-600 w-full px-1 bg-white" required v-model="form.phone">
            </div>
            <button type="submit" class="bg-yellow-600 border-2 border-yellow-900 px-5 py-1 my-2" :disabled="form.name.length == 0 || form.email.length == 0 || form.password.length == 0 || form.phone.length == 0">Modifier</button>
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
import Nav from '../components/_partials/ProfileNav.vue'
import Footer from '../components/_partials/Footer.vue'

export default defineComponent({
  name: 'Profile',
  data(){
    return {
      form : {
        name : 'username',
        email : 'user@email.com',
        password : '***************',
        phone : '0101010101'
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
      console.log('salut')
    }
  }
});
</script>