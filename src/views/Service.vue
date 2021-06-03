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
          <p class="text-center text-blue-600 text-3xl pt-10 mb-10">{{ this.service }}</p>

          <router-link :to="{ name : 'Paiement', params: { service: 'camera', id : 1 } }">
            <ion-card class="mb-5 bg-white border-2 border-gray-300">
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
          </router-link>

          <router-link :to="{ name : 'Paiement', params: { service: 'camera', id : 2 } }">
            <ion-card class="mb-5 bg-white border-2 border-gray-300">
              <ion-card-header>
                <ion-card-subtitle class="flex items-center justify-center"><img src="/assets/img/products/sensor2.jpg" alt="Camera services" class="h-20"></ion-card-subtitle>
                <ion-card-title class="text-blue-600 text-center">ZGFM-P07</ion-card-title>
              </ion-card-header>
              <ion-card-content class="text-center">
                Détecteur de fumée haute gamme permettant de prévenir les risques d'incendies.
                Installation gratuite et garantie à vie durant toute la durée de la souscription à ce service.<br>
                Prix: 40€/mois*<br>
                <small>*(Prix TTC)</small>
              </ion-card-content>
            </ion-card>
          </router-link>
          
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
  name: 'Service',
  props : ['service'],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,IonCard, 
    IonCardHeader, 
    IonCardContent, 
    IonCardSubtitle, 
    IonCardTitle,
    Nav,
    Footer
  },
});
</script>