<template>
  <div >
    <Homeheader></Homeheader>
    <Homeswiper></Homeswiper>
    <home-icons></home-icons>
    <recommend-icons></recommend-icons>
  </div>
</template>


<script>
import Homeheader from './header.vue'
import Homeswiper from './Swiper.vue'
import HomeIcons from './Icons.vue'
import RecommendIcons from './Recommend.vue'
export default {
  name: "HelloWorld",
  components:{Homeheader,Homeswiper,HomeIcons,RecommendIcons},
  data() {
    return {
    };
  },
  mounted(){
    this.getData()
    },
  methods: {
    getData(){
      console.log(this.$route.path,'route')
      
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
 