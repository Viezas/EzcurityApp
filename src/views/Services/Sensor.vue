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
          <p class="text-center text-blue-600 text-3xl pt-10 mb-10">Détecteurs</p>

          <div>
            <router-link :to="{ name : 'Paiement', params: { service: `${service.category}`, id : service.id } }" v-for="service in services" :key="service.id">
              <ion-card class="mb-5 bg-white border-2 border-gray-300">
                <ion-card-header>
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
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardContent, IonCardTitle } from '@ionic/vue';
import { defineComponent } from 'vue';
import Nav from '../../components/_partials/Nav.vue'
import Footer from '../../components/_partials/Footer.vue'

export default defineComponent({
  name: 'Sensor',
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
    IonCardTitle,
    Nav,
    Footer
  },

  mounted () {
    fetch(`http://127.0.0.1:8000/api/plans/sensor`)
    .then(response => response.json())
    .then(data => {
      if(!data.success === true){
        return this.message = data.message + " Ou alors quittez la page, rechargez puis revenez"
      }
      if (data['sensor'].length === 0) {
        this.message = "Pas de résultat pour cette catégorie"
      }

      return this.services = data['sensor']
    })
    .catch(error => {console.log('error : ', error)})
  },
});
</script>