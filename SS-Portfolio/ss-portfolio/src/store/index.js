// import { createStore } from 'vuex'
// import axios from 'axios'


// export default createStore({
//   state: {
//     about:[]
//   },
//   getters: {
//   },
//   mutations: {
//     setAbout(state,data){
//       state.about= data
//     },
//     setResume(state,data){
//       state.resume= data
//     },
//     setProjects(state,data){
//       state.projects= data
//     }
//   },

//   actions: {
//     fetchDataAbout(context){
//       axios.get( " http://localhost:3000/about")
//       .then((a)=>{
//        console.log(a.data[0]);
//        context.commit("setAbout", a.data[0] )
//       }),
//   }
//     fetchDataAbout(context){
//       axios.get( " http://localhost:3000/about")
//       .then((a)=>{
//        console.log(a.data[0]);
//        context.commit("setAbout", a.data[0] )
//       }),
//   }
//     fetchDataAbout(context){
//       axios.get( " http://localhost:3000/about")
//       .then((a)=>{
//        console.log(a.data[0]);
//        context.commit("setAbout", a.data[0] )
//       }),
//   }
// },
//   modules: {
//   }
// })
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    about: [],
    resume: [],
    projects: []
  },
  getters: {
  
  },
  mutations: {
    setAbout(state, data) {
      state.about = data
    },
    setResume(state, data) {
      state.resume = data
    },
    setProjects(state, data) {
      state.projects = data
    }
  },
  actions: {
    fetchDataAbout(context) {
      axios.get("http://localhost:3000/about")
        .then((a) => {
          console.log(a.data[0]);
          context.commit("setAbout", a.data[0])
        })
        .catch((error) => {
          console.error(error);
        });
    },
    // If you need to fetch resume and projects, you should create separate actions for them
    // For example:
    // fetchDataResume(context) {
    //   // Your axios call for resume
    // },
    // fetchDataProjects(context) {
    //   // Your axios call for projects
    // }
  },
  modules: {
    // Your modules here
  }
})
