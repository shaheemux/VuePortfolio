import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
 state: {
   resume: [],
   projects: [],
   testimonials: [],
 },
 getters: {
    },
 mutations: {
   setResume(state, data) {
     state.resume = data
   },
   setProjects(state, data) {
     state.projects = data
   }
 },
 actions: {
   fetchDataResume(context) {
     axios.get("http://localhost:3000/resume")
       .then((a) => {
         console.log(a.data[0]);
         context.commit("setResume", a.data[0])
       })
       .catch((error) => {
         console.error(error);
       });
   },

   fetchDataProjects(context) {
    axios.get("http://localhost:3000/projects")
      .then((response) => {
        console.log(response.data);
        context.commit("setProjects", response.data)
      })
      .catch((error) => {
        console.error(error);
      });
   }
   
 },
 modules: {
   
 }
})
