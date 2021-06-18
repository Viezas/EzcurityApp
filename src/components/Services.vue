<template>
  <div class="bg-white pb-20"> 
    <p class="text-3xl text-blue-600 pt-5 mb-10 text-center"><span class="border-b border-gray-600">Nos services</span></p>

    <router-link :to="{ name : 'Camera' }">
      <ion-card class="mb-5 bg-white border-2 border-gray-300">
        <ion-card-header>
          <ion-card-subtitle class="flex items-center justify-center"><img src="/assets/img/services/cctv-camera.png" alt="Camera services" class="h-20"></ion-card-subtitle>
          <ion-card-title class="text-blue-600 text-center">Vidéosurveillance</ion-card-title>
        </ion-card-header>
        <ion-card-content class="text-center">
          Gardez un œil sur votre domaine où que vous soyez grâce à l'application Ezcurity !
        </ion-card-content>
      </ion-card>
    </router-link>

    <router-link :to="{ name : 'Alarm' }">
      <ion-card class="mb-5 bg-white border-2 border-gray-300">
        <ion-card-header>
          <ion-card-subtitle class="flex items-center justify-center"><img src="/assets/img/services/alert.png" alt="Alert services" class="h-20"></ion-card-subtitle>
          <ion-card-title class="text-blue-600 text-center">Alarme de sécurité</ion-card-title>
        </ion-card-header>
        <ion-card-content class="text-center">
          Alarme de sécurité qui s'active lors d'une intrusion manifeste sur votre propriété.
        </ion-card-content>
      </ion-card>
    </router-link>

    <router-link :to="{ name : 'Keycard' }">
      <ion-card class="mb-5 bg-white border-2 border-gray-300">
        <ion-card-header>
          <ion-card-subtitle class="flex items-center justify-center"><img src="/assets/img/services/keycard.png" alt="Keycard services" class="h-20"></ion-card-subtitle>
          <ion-card-title class="text-blue-600 text-center">Badge de sécurité</ion-card-title>
        </ion-card-header>
        <ion-card-content class="text-center">
          Badge simple d'usage permettant d'activer l'alarme et inversement.
        </ion-card-content>
      </ion-card>
    </router-link>

    <router-link :to="{ name : 'Biometric' }">
      <ion-card class="mb-5 bg-white border-2 border-gray-300">
        <ion-card-header>
          <ion-card-subtitle class="flex items-center justify-center"><img src="/assets/img/services/eye-recognition.png" alt="Biometric services" class="h-20"></ion-card-subtitle>
          <ion-card-title class="text-blue-600 text-center">Système biométrique</ion-card-title>
        </ion-card-header>
        <ion-card-content class="text-center">
          Contrôlez le flux d'accès à vos propriété avec ce système biométrique.
        </ion-card-content>
      </ion-card>
    </router-link>

    <router-link :to="{ name : 'Sensor' }">
      <ion-card class="mb-5 bg-white border-2 border-gray-300" bg-white>
        <ion-card-header>
          <ion-card-subtitle class="flex items-center justify-center"><img src="/assets/img/services/sensor.png" alt="Sensor services" class="h-20"></ion-card-subtitle>
          <ion-card-title class="text-blue-600 text-center">Détecteurs</ion-card-title>
        </ion-card-header>
        <ion-card-content class="text-center">
          Nous avons le plaisir de proposer à nos abonnés, un large panel de détecteurs !
        </ion-card-content>
      </ion-card>
    </router-link>

    <router-link :to="{ name : 'App' }">
      <ion-card class="bg-white border-2 border-gray-300">
        <ion-card-header>
          <ion-card-subtitle class="flex items-center justify-center"><img src="/assets/img/services/cell-phone.png" alt="Sensor services" class="h-20"></ion-card-subtitle>
          <ion-card-title class="text-blue-600 text-center">Application mobile</ion-card-title>
        </ion-card-header>
        <ion-card-content class="text-center">
          L'application mobile vous permet de manager vos modules où que vous soyez !
        </ion-card-content>
      </ion-card>
    </router-link>
  </div>
</template>

<script>
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Services',
  components: { 
    IonCard, 
    IonCardHeader, 
    IonCardContent, 
    IonCardSubtitle, 
    IonCardTitle
  },
});
</script>