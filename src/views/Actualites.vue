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
          <p class="text-center text-blue-600 text-3xl pt-10 mb-10">Actualités</p>

          <router-link :to="{ name : 'Actualite', params: { id: 1 } }">
            <ion-card class="mb-5 bg-white border-2 border-gray-300">
              <ion-card-header>
                <ion-card-subtitle class="flex items-center justify-center"><img src="/assets/img/services/cctv-camera.png" alt="Camera services" class="h-20"></ion-card-subtitle>
                <ion-card-title class="text-blue-600 text-center">Système de vidéosurveillance</ion-card-title>
              </ion-card-header>
              <ion-card-content class="text-center">
                Nous sommes heureux de vous annoncer qu'à compté de ce jour, Ezcurity met à votre disposition des appareils de vidéosurveillance !
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
  name: 'Actualites',
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
});
</script>