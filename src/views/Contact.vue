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
        <div class="bg-white py-5">
          <p class="text-center text-blue-600 text-3xl pt-10 mb-10">Contact</p>

          <ion-card class="mb-5 bg-white border-2 border-gray-300">
            <ion-card-header>
              <ion-card-title class="text-blue-600 text-center">Nos coordonnées</ion-card-title>
            </ion-card-header>
            <ion-card-content class="text-center">
              <ul class="text-center">
                <li class="mb-3"><span class="border-b-2 border-blue-600">Adresse : 19 Rue Yves Toudic, 75010 Paris</span></li>
                <li class="mb-3"><span class="border-b-2 border-blue-600">Mail : contact@ecole-webstart.com</span></li>
                <li class="mb-3"><span class="border-b-2 border-blue-600">Téléphone : 01 42 41 97 76</span></li>
              </ul>
              <img src="/assets/img/screenshot.png" alt="googlemap location">
            </ion-card-content>
          </ion-card>

          <ion-card class="mb-5 bg-white border-2 border-gray-300">
            <ion-card-header>
              <ion-card-title class="text-blue-600 text-center">Nous contacter</ion-card-title>
              <ion-card-subtitle class="bg-red-600 py-2 text-white text-center" v-if="error">{{ error }}</ion-card-subtitle>
              <ion-card-subtitle class="bg-red-600 py-2 text-white text-center" v-else-if="message">{{ message }}</ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
              <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                  <label for="email">Votre adresse email<span class="text-red-600">*</span> : </label>
                  <input type="email" name="email" id="email" class="border border-gray-600 w-full px-1 bg-white" autofocus required v-model="form.email">
                </div>

                <div class="md:flex md:justify-between md:items-center">
                  <div class="mb-4 md:w-2/5">
                    <label for="last_name">Nom<span class="text-red-600">*</span> : </label>
                    <input type="text" name="last_name" id="last_name" class="border border-gray-600 w-full px-1 bg-white" required v-model="form.last_name">
                  </div>

                  <div class="mb-4 md:w-2/5">
                    <label for="first_name">Prénom<span class="text-red-600">*</span> : </label>
                    <input type="text" name="first_name" id="first_name" class="border border-gray-600 w-full px-1 bg-white" required v-model="form.first_name">
                  </div>
                </div>

                <div class="mb-4">
                  <label for="object">Objet<span class="text-red-600">*</span> : </label>
                  <input type="text" name="object" id="object" class="border border-gray-600 w-full px-1 bg-white" required v-model="form.object">
                </div>

                <div class="mb-4">
                  <label for="object">Votre message<span class="text-red-600">*</span> : </label>
                  <textarea name="body" id="body" class="border border-gray-600 w-full px-1 resize-none h-52 bg-white" placeholder="min 15 caractères" required v-model="form.body"></textarea>
                  <small class="text-red-600">*champs obligatoire</small>
                </div>

                <div class="flex items-center justify-center">
                  <button type="submit" class="border-2 border-blue-900 bg-blue-600 text-white text-center px-20 py-2" :disabled="form.email.length == 0 || form.last_name.length == 0 || form.first_name.length == 0 || form.object.length == 0 || form.body.length < 15">Envoyer !</button>
                </div>
              </form>
              
            </ion-card-content>
          </ion-card>
          
        </div>
        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle} from '@ionic/vue';
import { defineComponent } from 'vue';
import Nav from '../components/_partials/Nav.vue'
import Footer from '../components/_partials/Footer.vue'

export default defineComponent({
  name: 'Contact',
  data(){
    return {
      form : {
        email : '',
        last_name : '',
        first_name : '',
        object : '',
        body : ''
      },
      message : '',
      error : ''
    }
  },
  
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,IonCard, 
    IonCardHeader, 
    IonCardContent, 
    IonCardTitle,
    IonCardSubtitle,
    Nav,
    Footer
  },

  methods : {
    handleSubmit(){
      let init = {
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(this.form)
      }

      fetch(`http://127.0.0.1:8000/api/contact`, init)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.errors) {
          return this.error = data.errors[Object.keys(data.errors)[0]]
        }
        this.error = ""
        this.form = []
        return this.message = "Votre email a été envoyé !"
      })
    }
  }
});
</script>