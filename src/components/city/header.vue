<template>
  <div class="header">
    <div class="header-left back-icon">
      <svg class="icon" style="width:12px;height:12px" @click="back">
        <use xlink:href="#iconfanhui" />
      </svg>
    </div>城市选择
  </div>
</template>
<script>
export default {
  name: 'City',
  components: {},
  methods: {
    back() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~@/assets/varibies.styl';

.header {
  overflow: hidden;
  background: $bgColor;
  line-height: 1.86rem;
  height: 1.86rem;
  color: #fff;
  text-align: center;
  font-size: 0.9rem;
}

.header-left {
  width: 1.64rem;
  float: left;
}
</style>