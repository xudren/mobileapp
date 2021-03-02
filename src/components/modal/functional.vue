<template>
  <div>
    <v-functional :params="params" :components='components'></v-functional>
  </div>
</template>
<script>
import VFunctional from './vFunctional';
export default {
  components:{
    VFunctional
  },
  props:{
    props:null,
    components:null
  }
}
</script>