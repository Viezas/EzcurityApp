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
        <div class="bg-white flex items-center justify-center py-5">
          <ion-card class="mb-5 bg-white border-2 border-gray-300">
            <ion-card-header>
              <ion-card-title class="text-green-600 text-center">Paiement effectué !</ion-card-title>
            </ion-card-header>
          </ion-card>
        </div>
        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle} from '@ionic/vue';
import { defineComponent } from 'vue';
import Nav from '../components/_partials/Nav.vue'
import Footer from '../components/_partials/Footer.vue'

export default defineComponent({
  name: 'Paiee',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,IonCard, 
    IonCardHeader, 
    IonCardTitle,
    Nav,
    Footer
  },
});
</script>