<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            @click="handleCityClick(item.name)"
            v-for="item in hotCity"
            :key="item.id"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="item in citylist" :ref="item.title" :key="item.title">
        <div class="title border-topbottom">{{item.title}}</div>
        <div
          class="item-list"
          v-for="itemchild in item.lists"
          @click="handleCityClick(itemchild)"
          :key="itemchild"
        >
          <div class="item border-bottom">{{itemchild}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'CityList',
  props: {
    letter: String
  },
  data() {
    return {
      citylist: [],
      hotCity: [
        {
          id: 0,
          name: '北京'
        },
        {
          id: 1,
          name: '上海'
        },
        {
          id: 2,
          name: '广州'
        },
        {
          id: 3,
          name: '深圳'
        },
        {
          id: 4,
          name: '杭州'
        },
        {
          id: 5,
          name: '大连'
        }
      ],
      lastCity: ''
    }
  },
  watch: {
    letter() {
      if (this.letter) {
        console.log(this.letter, 'this.letter')
        const element = this.$refs[this.letter][0]
        console.log(element, 'element')
        // console.log(this.scroll)
        this.scroll.scrollToElement(element)
      }
    }
  },
  computed: {
    ...mapGetters('mobileDemo', ['city'])
  },
  methods: {
    handleCityClick(name) {
      this.$store.commit('mobileDemo/CHANGE_CITY', name)
      this.$router.push({ path: '/' })
    },
    //     handleCityclick(name) {
    //   this.$store.commit('mobileDemo/CHANGE_CITY', name)
    //   this.$router.push({ path: '/' })
    // },
    getCityInfo() {
      axios.get('/api/citylist.json?city=' + this.city).then((res) => {
        console.log(res, 'res')
        this.citylist = res.data.city
      })
    }
  },
  mounted() {
    this.getCityInfo()
    this.lastCity = this.city
  },
  updated() {
    console.log('updated')
    this.scroll = new Bscroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      tap: true
    })
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity === this.city
      this.getCityInfo()
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~@/assets/varibies.styl';

.border-topbottom {
  border: 1px solid #ccc;
  margin: -1px 0 -1px;
}

.list {
  position: absolute;
  top: 3.8rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .title {
    line-height: 1.4rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.9rem;
  }

  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
      width: 33.33%;
      float: left;

      .button {
        text-align: center;
        margin: 0.1rem;
        border: 0.02rem solid #ccc;
      }
    }
  }

  .item-list {
    .item {
      line-height: 2.54rem;
      padding-left: 0.3rem;
    }
  }

  .border-bottom {
    border: 1px solid #ccc;
    margin: -1px 0 -1px;
  }
}
</style>