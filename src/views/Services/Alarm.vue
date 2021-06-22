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
          <p class="text-center text-blue-600 text-3xl pt-10 mb-10">Alarme de sécurité</p>

          <div>
            <router-link :to="{ name : 'Paiement', params: { service: `${service.category}`, id : service.id } }" v-for="service in services" :key="service.id">
              <ion-card class="mb-5 bg-white border-2 border-gray-300">
                <ion-card-header>
                  <ion-card-subtitle class="flex items-center justify-center"><img src="/assets/img/products/sensor1.jpg" :alt="service.category" class="h-20"></ion-card-subtitle>
                  <ion-card-title class="text-blue-600 text-center">{{ service.name}}</ion-card-title>
                </ion-card-header>
                <ion-card-content class="text-center">
                  {{ service.description }}<br>
                  Prix: {{ service.price }}€/mois*<br>
                  <small>*(Prix TTC)</small>
                </ion-card-content>
              </ion-card>
            </router-link>
          </div>
          <div v-if="message">
            {{ message }}
            <ion-card class="mb-5 bg-white border-2 border-gray-300">
              <ion-card-header>
                <ion-card-title class="text-red-600 text-center">Erreur</ion-card-title>
              </ion-card-header>
              <ion-card-content class="text-center">
                {{ message }}
              </ion-card-content>
            </ion-card>
          </div>
          
        </div>
        <Footer/>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { defineComponent } from 'vue';
import Nav from '../../components/_partials/Nav.vue'
import Footer from '../../components/_partials/Footer.vue'

export default defineComponent({
  name: 'Alarm',
  data(){
    return {
      services : [],
      message : ''
    }
  },


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

  mounted () {
    fetch(`https://ezcurity.herokuapp.com/api/plans/alarm`)
    .then(response => response.json())
    .then(data => {
      if(!data.success === true){
        return this.message = data.message + " Ou alors quittez la page, rechargez puis revenez"
      }
      if (data['alarm'].length === 0) {
        this.message = "Pas de résultat pour cette catégorie"
      }
      return this.services = data['alarm']
    })
    .catch(error => {console.log('error : ', error)})
  },
});
</script>