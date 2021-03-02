<template>
  <div class='createModal'>234

  <button @click='showDestroy'>销毁实例</button>
  </div>
</template>
<script>
export default {
  name:'Modal',
  methods: {
    showDestroy(){
      console.log(this,'this')
      this.$el.parentNode.removeChild(this.$el)
    }
  },
}
</script>
<style lang="stylus" scoped>

</style>