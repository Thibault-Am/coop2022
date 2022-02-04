import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/creation-compte',
    name: 'CreationCompte',
    component: () => import ('../views/CreationCompte.vue')
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import ('../views/Connexion.vue')
  },
  {
    path: '/',
    name: 'Conversations',
    component: () => import ('../views/Conversations.vue')
  },
  {
    path: '/creer-conversation',
    name: 'CreerConversation',
    component: () => import ('../views/CreerConversation.vue')
  },
  {
    path: '/conversation/:idConversation',
    name: 'Conversation',
    component: () => import ('../views/Conversation.vue')
  },
  {
    path: '/deconnexion',
    name: 'Deconnexion',
    component: () => import ('../views/Deconnexion.vue')
  },
  {
    path: '/membres',
    name: 'Membres',
    component: () => import ('../views/Membres.vue')
  },
  {
    path: '/membre/:membre',
    name: 'Membre',
    component: () => import ('../views/Membre.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

