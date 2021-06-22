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
        <div class="bg-white py-5 text-black">
          <form @submit.prevent="handleSubmit" class="flex justify-center items-center flex-wrap py-6 mb-10">
            <div class="mb-6">
              <p class="text-blue-600 text-3xl text-center">Mes informations</p>
            </div>

            <div class="w-full mb-5 bg-red-600 py-2 text-white text-center" v-if="error">
              {{ error }}
            </div>
            <div class="w-full mb-5 bg-green-600 py-2 text-white text-center" v-else-if="message">
              {{ message }}
            </div>

            <div class="w-5/6 mb-5">
              <label for="name">Nom d'utilisateur</label><br>
              <input type="text" name="name" id="name" class="border border-gray-600 w-full px-1 bg-white" v-model="form.name">
            </div>
            <div class="w-5/6 mb-5">
              <label for="email">Email</label><br>
              <input type="text" name="email" id="email" class="border border-gray-600 w-full px-1 bg-white"  v-model="form.email">
            </div>
            <div class="w-5/6 mb-5">
              <label for="password">Mot de passe</label><br>
              <input type="password" name="password" id="password" class="border border-gray-600 w-full px-1 bg-white" v-model="form.password" placeholder="Pour des raisons de sécurité, le mot de passe n'est pas affiché">
            </div>
            <div class="w-5/6 mb-1">
              <label for="phone">Numéro de téléphone</label><br>
              <input type="tel" name="phone" id="phone" class="border border-gray-600 w-full px-1 bg-white" v-model="form.phone">
            </div>
            <button type="submit" class="bg-yellow-600 border-2 border-yellow-900 px-5 py-1 my-2" :disabled="form.name.length == 0 || form.email.length == 0 || form.phone.length == 0">Modifier</button>
          </form>
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
  name: 'Profile',
  data(){
    return {
      form : {
        name : '',
        email : '',
        password : '',
        phone : ''
      },
      error : '',
      message : ''
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

  methods : {
    handleSubmit(){
      console.log('salut')

      let init = {
        method : 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + this.user.token,
        },
        body : JSON.stringify(this.form)
      }

      fetch(`https://ezcurity.herokuapp.com/api/auth/me/update`, init)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.success == false) {
          return this.error = data.message
        }
        this.error = ''
        return this.message = data.message
      })
    }
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
    fetch("https://ezcurity.herokuapp.com/api/auth/me", init)
    .then(response => response.json())
    .then(data => {
      this.form.name = data[0].username
      this.form.email = data[0].email
      this.form.phone = data[0].phone
    })
    .catch(error => {console.log('error : ', error)})
  }
});
</script>