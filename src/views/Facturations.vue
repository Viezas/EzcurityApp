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
        <div class="bg-white py-5 text-black border border-gray-600">
          <div class="py-6 px-2">
            <div class="mb-6">
              <p class="text-blue-600 text-3xl text-center">Mes facturations</p>
            </div>

            <div class="flex items-center justify-center text-xl">
              <a :href="url" v-if="url.length != 0">Voir mes facturations</a>
            </div>
            <div v-if="url.length == 0">
              <p>Patientez quelques instants, génération du lien en cours ...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template> 

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import { defineComponent } from 'vue';
import Nav from '../components/_partials/ProfileNav.vue'
import Footer from '../components/_partials/Footer.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Facturation',

  data(){
    return {
      url : ''
    }
  },

  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    Nav,
    Footer
  },

  computed : {
    ...mapGetters({
      user : 'user'
    })
  },

  mounted(){
    let init = {
      method : 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.user.token,
        'Content-Type': 'application/json'
      },
    }
    fetch("https://ezcurity.herokuapp.com/api/billing", init)
    .then(response => response.json())
    .then(data => {
      this.url = data
    })
    .catch(error => {console.log('error : ', error)})
  }
});
</script>