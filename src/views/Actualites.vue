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

          <router-link :to="{ name : 'Actualite', params: { id: article.id } }" v-for="article in news" :key="article.id">
            <ion-card class="mb-5 bg-white border-2 border-gray-300">
              <ion-card-header>
                <ion-card-subtitle class="flex items-center justify-center"><img :src="article.img_url" alt="Camera services" class="h-20"></ion-card-subtitle>
                <ion-card-title class="text-blue-600 text-center">{{ article.title }}</ion-card-title>
              </ion-card-header>
              <ion-card-content class="text-center">
                {{ article.body.substring(0, 150) }}              
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
  data(){
    return {
      news : []
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

  mounted(){
    fetch(`https://ezcurity.herokuapp.com/api/posts`)
    .then(response => response.json())
    .then(data => {
      this.news = data[0]
    })
    .catch(error => {console.log('error : ', error)})
  }
});
</script>