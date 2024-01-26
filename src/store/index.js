import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
 state: {
   testimonials:[]
 },
 getters: {
    },
 mutations: {
   SET_TESTIMONIALS(state, testimonials) {
      state.testimonials = testimonials;
    }
 },
 actions: {
      async fetchTestimonials({ commit }) {
        const response = await fetch('http://localhost:3000/testimonials');
        const testimonials = await response.json();
        commit('SET_TESTIMONIALS', testimonials);
      }  
   
 },
 modules: {
   
 }
})
