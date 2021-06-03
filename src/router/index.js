import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue'
import Service from '../views/Service.vue'
import Paiement from '../views/Paiement.vue'
import Paiee from '../views/Paiee.vue'
import Actualites from '../views/Actualites.vue'
import Actualite from '../views/Actualite.vue'
import Contact from '../views/Contact.vue'
import Connexion from '../views/Connexion.vue'
import Inscription from '../views/Inscription.vue'
import Profile from '../views/Profile.vue'
import Abonnement from '../views/Abonnement.vue'
import Facturations from '../views/Facturations.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/service',
    name: 'Service',
    component: Service,
    props : true
  },
  {
    path: '/subscribe',
    name: 'Paiement',
    component: Paiement,
    props : true
  },
  {
    path: '/subscribed',
    name: 'Paiee',
    component: Paiee,
  },
  {
    path: '/news',
    name: 'Actualites',
    component: Actualites
  },
  {
    path: '/news/:id',
    name: 'Actualite',
    component: Actualite,
    props: true
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: Inscription
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/profile/subscriptions',
    name: 'Abonnement',
    component: Abonnement
  },
  {
    path: '/profile/billing',
    name: 'Facturations',
    component: Facturations
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
