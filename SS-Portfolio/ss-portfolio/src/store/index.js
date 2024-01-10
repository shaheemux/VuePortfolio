import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    about:[]
  },
  getters: {
  },
  mutations: {
    setAbout(state,data){
      state.about= data
    }
  },
  actions: {
    fetchDataAbout(context){
      axios.get( " http://localhost:3000/about")
      .then((a)=>{
       console.log(a.data[0]);
       context.commit("setAbout", a.data[0] )
      })
  }},
  modules: {
  }
})
