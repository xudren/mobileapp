<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或拼音" />
    </div>
    <div class="search-content" ref="wrapper" v-show="keyword">
      <ul class="search-ul">
        <li
          v-for="item in list"
          :key="item.name"
          @click="handleCityClick(item.name)"
          class="search-item border-bottom"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import axios from 'axios'
export default {
  name: 'CitySearch',
  data() {
    return {
      keyword: '',
      list: [],
      timer: null,
      cities: []
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        //通过循环城市的中文名和英文名，然后通过index
        this.cities.forEach((value) => {
          if (
            value.pinyin.toLowerCase().indexOf(this.keyword) > -1 ||
            value.name.indexOf(this.keyword) > -1
          ) {
            result.push(value)
          }
        })
        this.list = result
      }, 100)
    }
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  updated() {
    // const element=document.querySelector('.')

    this.scroll = new Bscroll(this.$refs.wrapper, {
      mouseWheel: true,
      click: true,
      tap: true
    })
    console.log(this.scroll, 'scroll')
  },
  methods: {
    handleCityClick(name) {
      this.list.length = 0
      this.keyword = ''
      this.$store.commit('mobileDemo/CHANGE_CITY', name)
    },
    getCityInfo() {
      axios.get('/api/cities.json').then((res) => {
        this.cities = res.data.data
      })
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>
<style lang='stylus' scoped>
@import '~@/assets/varibies.styl';

.search {
  height: 1.8rem;
  padding: 0 0.1rem;
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    height: 1.6rem;
    width: 99%;
    line-height: 1.6rem;
    text-align: center;
    border-radius: 0.25rem;
    border-color: white;
    color: #666;
    padding: 0 0.1rem;
  }
}

.search-content {
  z-index: 1;
  position: absolute;
  top: 3.58rem;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  background: #eee;

  .search-ul {
    padding-left: 0;
    margin: 0;

    .search-item {
      line-height: 1.8rem;
      padding-left: 0.6rem;
      color: #666;
      background: #fff;
      border-bottom: #eee 1px solid;
      list-style: none;
    }
  }
}
</style>