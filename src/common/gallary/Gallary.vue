<template>
  <div class="container" @click='close'>
    <div class="wrapper">
      <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item,index ) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        loop: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        paginationClickable: true,
        observeParents:true,
        observer:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true
        }
      }
    }
  },
  methods:{
    close(){
      this.$emit('handleClose')
    }
  }
}
</script>
<style lang='stylus' scoped>
.container>>>.swiper-container {
  overflow: inherit;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  background: #000;
}

.wrapper {
  background: #fff;
  width: 100%;
  height: 0;
  padding-bottom: 66%;
}

.gallary-img {
  width: 100%;
}

.swiper-pagination {
  color: #fff;
  bottom: -1rem;
}
</style>