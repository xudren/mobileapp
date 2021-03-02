import Vue from 'vue'
// import Modal from '@/common/common/modal'
 import Functional from '../components/modal/functional.vue'

import vFunctional from '../components/modal/vFunctional'


// function RegisterComponent(el,text){
//   const requireComponent=Vue.extend(Modal)
//   const parentel=document.getElementById(el)
//   const elementComponent= new requireComponent({
//     // el:document.createElement('div'),
//     attrs:{
//       id:'extra'
//     },
//     data(){
//       return {
//         text:text
//       }
//     }
//   })
//   parentel.appendChild(elementComponent.$el)
//   console.log(new Vue(),'vueueueu')
//   console.log(elementComponent,'elementComponent')
//   return elementComponent
// }

// function RegisterComponent(el,{ components,params}){
//   const ModalConstructor=Vue.extend(Functional)

//   const parentEl=document.getElementById(el)

//   const instance=new ModalConstructor({
//     el:document.createElement('div')
//   })

//   parentEl.appendChild(instance.$el)

//   instance.components=components

//   instance.params=params

//   return instance
// }

function RegisterComponent(el,{ components,params}){
  const Wrapper = Vue.component('wrapper', {
    name: 'Wrapper',
    render(h) {
      return h(vFunctional, {
        props: {
          comp: components
        }
      })
    }
  })

  const parentEl=document.getElementById(el)

  let MyComponent = Vue.extend(Wrapper)
  let instance = new MyComponent({
    el:document.createElement('div')
  })
  // .$mount(document.createElement('div'))
  console.log(instance.$el,'$elelelel')
  parentEl.appendChild(instance.$el)

  // instance.components=components

  // instance.params=params||{}
  return instance
}
export default {
  install(Vue){
    Vue.prototype.$createModal=RegisterComponent
  }
}