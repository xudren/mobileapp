<template>
  <div class="wrapper">
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.imgUrl">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperList: [
        {
          id: '0001',
          imgUrl:
            '//imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg'
        },
        {
          id: '0002',
          imgUrl:
            '//imgs.qunarzz.com/vc/e3/a1/71/f498dfd3bed948d623c9093252.jpg_92.jpg'
        },
        {
          id: '0003',
          imgUrl:
            '//imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg'
        }
      ],
      swiperOptions: {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          hideOnClick: true
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.$refs.mySwiper)
    // this.swiper.slideTo(1, 1000, false);
  },
  methods: {
    // prev(){
    //   this.swiper.slidePrev()
    // },
    //     next(){
    //   this.swiper.slideNext()
    // }
  }
}
</script>
<style lang="stylus" scoped>
.wrapper>>>.swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 31.25%;
  background: #eee;
}

.swiper-img {
  width: 100%;
}
</style>