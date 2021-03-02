<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <svg class="icon header-abs-back">
        <use xlink:href="#iconfanhui" />
      </svg>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link tag="div" to="/">
        <svg class="icon header-fixed-back">
          <use xlink:href="#iconfanhui" />
        </svg>
      </router-link>景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop
      // console.log(top,'top')
      if (top > 40) {
        let opacity = top / 140
        // console.log(opacity, 'opacity')
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
      // console.log(document.documentElement.scrollTop)
    }
  },
  components: {},
  activated() {
    console.log('activated')
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated(){
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/varibies.styl';

.header-abs {
  position: absolute;
  left: 0.6rem;
  top: 0.6rem;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  text-align: center;
  line-height: 1.9rem;
  background: rgba(0, 0, 0, 0.8);

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
    width: 14px;
    height: 14px;
  }
}

.header-fixed {
  z-index:2
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: $bgColor;
  line-height: 1.6rem;
  height: 1.6rem;
  color: #fff;
  text-align: center;
  font-size: 0.9rem;

  .header-fixed-back {
    width: 21px;
    height: 21px;
    float: left;
  }
}
</style>