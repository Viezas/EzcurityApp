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
              <ion-card-subtitle class="flex items-center justify-center"><img src="/assets/img/services/cctv-camera.png" alt="Camera services" class="h-20"></ion-card-subtitle>
              <ion-card-title class="text-blue-600 text-center">Système de vidéosurveillance</ion-card-title>
            </ion-card-header>
            <ion-card-content class="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic animi nesciunt vel! Quia adipisci veniam eius pariatur accusamus explicabo. Quas eveniet molestias eius neque dolor molestiae adipisci sed? Aliquam, molestias.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam hic est laudantium beatae odit accusamus. Dolorum tenetur repudiandae eligendi, sequi at odit velit quia, numquam repellat, voluptatibus nesciunt excepturi repellendus?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit harum expedita praesentium, tempore ad quae aperiam doloremque, quos in dolor natus sunt, delectus libero fuga sapiente maxime nisi reiciendis commodi!
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
  name: 'Actualite',
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