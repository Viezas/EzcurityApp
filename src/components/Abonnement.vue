<template>
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
  <div>
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
</template>

<script>
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Service',
  props : ['category'],
  data(){
    return {
      services : [],
      message : ''
    }
  },

  mounted(){
    fetch(`https://ezcurity.herokuapp.com/api/plans/${this.category}`)
    .then(response => response.json())
    .then(data => {
      if(!data.success === true){
        return this.message = data.message + " Ou alors quittez la page, rechargez puis revenez"
      }

      return this.services = data[this.category]
    })
    .catch(error => {console.log('error : ', error)})
  },

  components: {
    IonCard, 
    IonCardHeader, 
    IonCardContent, 
    IonCardSubtitle, 
    IonCardTitle,
  }
});
</script>