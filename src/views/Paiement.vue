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
          <div class="bg-white text-black p-5">
            <ion-card class="bg-white border-2 border-gray-300 mb-10">
              <ion-card-header>
                <ion-card-subtitle class="flex items-center justify-center"><img src="/assets/img/products/sensor1.jpg" alt="Camera services" class="h-20"></ion-card-subtitle>
                <ion-card-title class="text-blue-600 text-center">DMVC-745B</ion-card-title>
              </ion-card-header>
              <ion-card-content class="text-center">
                Détecteur de mouvement permettant envoyant une notification lorsqu'elle est activée.
                Installation gratuite et garantie à vie durant toute la durée de la souscription à ce service.<br>
                Prix: 40€/mois*<br>
                <small>*(Prix TTC)</small>
              </ion-card-content>
            </ion-card>

            <ion-card class="bg-white border-2 border-gray-300">
              <ion-card-content>
                <form @submit.prevent="handleSubmit">

                  <div class="mb-4">
                    <label for="email">Email<span class="text-red-600">*</span> : </label>
                    <input type="email" name="email" id="email" class="border border-gray-600 w-full px-1 bg-white" autofocus required v-model="form.email">
                  </div>

                  <div class="mb-4">
                    <label for="phone">Numéro de téléphone<span class="text-red-600">*</span> : </label>
                    <input type="tel" name="phone" id="phone" class="border border-gray-600 w-full px-1 bg-white" required v-model="form.phone">
                  </div>

                  <div class="mb-4 flex items-center justify-start flex-wrap">
                    <label for="phone">Informations de la carte<span class="text-red-600">*</span> : </label>
                    <input type="tel" name="phone" id="phone" class="border border-gray-600 w-full px-1 bg-white" required placeholder="1234 1234 1234 1234" v-model="cardInfos.numbers">
                    <input type="month" name="expiration" id="expiration" class="border border-t-0 border-gray-600 w-1/2 bg-white" required v-model="cardInfos.expiration">
                    <input type="number" name="secret" id="secret" class="border border-t-0 border-gray-600 w-1/2 px-1 bg-white" required placeholder="CVC" v-model="cardInfos.cvc">
                  </div>

                  <div class="mb-4">
                    <label for="name">Nom du titulaire de la carte<span class="text-red-600">*</span> : </label>
                    <input type="text" name="name" id="name" class="border border-gray-600 w-full px-1 bg-white" required v-model="cardInfos.owner">
                  </div>

                  <div class="mb-4">
                    <label for="discount">Code promo : </label>
                    <input type="text" name="discount" id="discount" class="border border-gray-600 w-full px-1 bg-white">
                    <small class="text-red-600">*champs obligatoire</small>
                  </div>

                  <div class="mb-4 flex items-center justify-center">
                    <button type="submit" class="border-2 border-blue-900 bg-blue-600 text-white px-10 py-1" :disabled="form.email.length == 0 || form.phone.length < 10 || cardInfos.cvc.length < 4 || cardInfos.expiration.length == 0 || cardInfos.owner.length == 0">S'abonner</button>
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
  name: 'Paiement',
  data(){
    return {
      form : {
        'email' : '',
        'phone' : '',
      },
      cardInfos : {
        cvc : '',
        expiration : '',
        numbers : '',
        owner :''
      }
    }
  },
  props : ['service', 'id'],

  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard, 
    IonCardHeader, 
    IonCardContent, 
    IonCardSubtitle, 
    IonCardTitle,
    Nav,
    Footer
  },

  methods : {
    handleSubmit(){
      this.$router.push({ name: 'Paiee' });
    }
  }
});
</script>