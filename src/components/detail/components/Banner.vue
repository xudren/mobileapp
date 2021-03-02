<template>
  <div>
    <div class="banner" @click='handleBannerClick'>
      <img
        class="banner-img"
        src="//img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_600x330_2106404f.jpg"
      />
      <div class="banner-info">
        <div class="banner-title">八达岭长城(AAAAA景区)</div>
        <div class="banner-number">
          <svg class="icon" style="width:14px;height:14px">
            <use xlink:href="#icontianchongxing-" />
          </svg>
          57
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="imgs" v-show='showGallary'
      @handleClose='handleGallaryClose'>
      </common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  data() {
    return {
      showGallary:false,
      imgs: [
        '//imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_r_800x800_79fd65f1.jpg',
        '//imgs.qunarzz.com/sight/p0/1908/56/56487a16caa23f7ca3.img.jpg_r_800x800_039bc592.jpg',
        '//imgs.qunarzz.com/sight/p0/1908/82/825fac72a5934c2ca3.img.jpg_r_800x800_8ac9f17b.jpg'
      ]
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods:{
    handleBannerClick(){
      this.showGallary=true
    },
    handleGallaryClose(){
      this.showGallary=false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 1rem;
    color: #fff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  }

  .banner-title {
    flex: 1;
    font-size: 0.8rem;
    padding: 0 0.6rem;
  }

  .banner-number {
    padding: 0 0.4rem;
    height: 0.9rem;
    line-height: 0.9rem;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.8);
  }
}
</style>