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
              <ion-card-title class="text-blue-600 text-center">{{ article.title }}</ion-card-title>
            </ion-card-header>
            <ion-card-content class="text-center">
              {{ article.body }}
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
  data(){
    return {
      article : {
        title : '',
        body : ''
      }
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
    IonCardSubtitle, 
    IonCardTitle,
    Nav,
    Footer
  },

  updated () {
    fetch(`http://127.0.0.1:8000/api/posts/${this.$route.params.id}`)
    .then(response => response.json())
    .then(data => {
      this.article = {}
      this.article = data.article[0]
    })
    .catch(error => {console.log('error : ', error)})
  },
  
});
</script>