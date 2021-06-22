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
          <div class="bg-white text-black p-5">
            <ion-card class="bg-white border-2 border-gray-300 mb-10">
              <ion-card-header>
                <ion-card-title class="text-blue-600 text-center">{{ plan.name }}</ion-card-title>
              </ion-card-header>
              <ion-card-content class="text-center">
                {{ plan.description }}<br>
                Prix: {{ plan.price }}€/mois*<br>
                <small>*(Prix TTC)</small>
              </ion-card-content>
            </ion-card>

            <ion-card class="bg-white border-2 border-gray-300">
              <ion-card-content>
                <form @submit.prevent="handleSubmit">

                   <div class="w-full mb-5 bg-red-600 py-2 text-white text-center" v-if="error">
                    {{ error }}
                  </div>

                  <div class="mb-4">
                    <label for="name">Name<span class="text-red-600">*</span> : </label>
                    <input type="text" name="name" id="name" class="border border-gray-600 w-full px-1 bg-white" autofocus required v-model="form.name">
                  </div>

                  <p>Informations de la carte<span class="text-red-600">*</span> :</p>
                  <div id="card-element">
                  </div>

                  <div id="card-errors" role="alert" class="text-red-600 mt-1"></div>

                  <div class="my-4">
                    <label for="discount">Code promo : </label>
                    <input type="text" name="discount" id="discount" class="border border-gray-600 w-full px-1 bg-white" v-model="form.discount">
                    <small class="text-red-600">*champs obligatoire</small>
                  </div>

                  <div class="mb-4 flex items-center justify-center">
                    <button type="submit" class="border-2 border-blue-900 bg-blue-600 text-white px-10 py-1" :disabled="form.name.length == 0 " id="card-button">S'abonner</button>
                  </div>

                </form>
              </ion-card-content>
            </ion-card>
            

          </div>
        <Footer />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardContent, IonCardTitle} from '@ionic/vue';
import { defineComponent } from 'vue';
import Nav from '../components/_partials/Nav.vue'
import Footer from '../components/_partials/Footer.vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Paiement',
  data(){
    return {
      form : {
        name : '',
        discount : '',
      },

      plan : {
        name : '',
        price : 0,
        description : ''
      },

      intent : {
        client_secret : null
      },
      card: null,
      stripe: null,
      error : '',
    }
  },
  props : ['service', 'id'],

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

   methods : {
    async handleSubmit(){
      console.log('salut');
      const { setupIntent, error } = await this.stripe.confirmCardSetup(
        this.intent.client_secret,
        {
          payment_method: {
            card: this.card,
            billing_details: { name: this.form.name },
          },
        }
      );
      if (error) {
        this.error = error.message + " Veuillez rafraîchir la page !"
        console.log(error);
      }
      else {
        let init = {
          method : 'POST',
          headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.user.token,
            'Content-Type': 'application/json'
          },
          body : JSON.stringify({
            name : this.form.name,
            discount : this.form.discount,
            token: setupIntent.payment_method
          })
        }
        fetch(`https://ezcurity.herokuapp.com/api/stripe/subscribe/${this.id}`, init)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.success === false) {
            return this.error = data.message
          }

          this.$router.push({name : 'Paiee'})
        })
        .catch(error => {console.log('error : ', error)})
      }
    }
  },

  computed : {
    ...mapGetters({
      user : 'user'
    })
  },

  updated () {
    let init = {
      method : 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.user.token,
        'Content-Type': 'application/json'
      },
    }
    fetch(`https://ezcurity.herokuapp.com/api/stripe/plans/${this.id}`, init)
    .then(response => response.json())
    .then(data => {
      this.plan = data.plan[0]
    })
    .catch(error => {console.log('error : ', error)})
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
    fetch(`https://ezcurity.herokuapp.com/api/stripe/plans/${this.id}`, init)
    .then(response => response.json())
    .then(data => {
      this.plan = data.plan[0]
      this.intent = data.intent
    })
    .catch(error => {console.log('error : ', error)})
    
    this.stripe  = window.Stripe(process.env.VUE_APP_STRIPE_PUBLIC_KEY)
    const elements = this.stripe.elements()

    this.card = elements.create("card")
    this.card.mount("#card-element")
    const card_elemen = document.getElementById("card-element");
    card_elemen.classList.add("border", "border-gray-600", "w-full", "px-1", "py-1");

    let displayError = document.getElementById('card-errors');
    this.card.on('change', ({error}) => {
    if (error) {
      displayError.textContent = error.message;
    } else {
      displayError.textContent = '';
    }
  });
  }
});
</script>