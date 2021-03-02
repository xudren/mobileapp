<template>
  <div class="icons">
    <swiper class="swiper" ref="mySwiper">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" />
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "0001",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/hotel.png",
          desc: "酒店",
        },
        {
          id: "0002",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/flight.png",
          desc: "机票",
        },
        {
          id: "0003",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/train.png",
          desc: "火车票",
        },
        {
          id: "0004",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/package.png",
          desc: "度假",
        },
        {
          id: "0005",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
          desc: "景点门票",
        },
        {
          id: "0006",
          imgUrl:
            "https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png",
          desc: "海外酒店",
        },
        {
          id: "0007",
          imgUrl:
            "https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png",
          desc: "低价机票",
        },
        {
          id: "0008",
          imgUrl:
            "https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png",
          desc: "汽车票船票",
        },
        {
          id: "0009",
          imgUrl:
            "https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png",
          desc: "自由行",
        },
      ],
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        console.log(page,'page')
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
        console.log(pages,'pages')
      return pages;
    },
  },
};
</script>
<style scoped lang='stylus'>
@import '~@/assets/varibies.styl';
@import '~@/assets/mixins.styl';

.icons >>>.swiper-container {
  height: 0;
  padding-bottom: 40%;
}

.icon {
  width: 100%;
}

.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  padding-bottom: 20%;

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;

    .icon-img-content {
      height: 70%;
      margin: 0 auto;
      display: block;
    }
  }

  .icon-desc {
    position: absolute;
    line-height: 1.44rem;
    height: 1.44rem;
    left: 0;
    right: 0;
    bottom: -1rem;
    color: $darkTextColor;
    text-align: center;
    ellipsis();
  }
}
</style>