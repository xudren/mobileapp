<template>
  <div id='recommend'>
    <div class="title">热销推荐</div>
    <ul style="padding:0px;margin:5px">
      <router-link
        tag="li"
        class="item"
        v-for="item in recommendList"
        :key="item.id"
        :to="/detail/+item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
    
    <button @click="createModal">动态添加modal</button>
  </div>
</template>

<script>
const content=()=>import('../components/modal/content.vue')

export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_110x110_f04a71fe.jpg',
          title: '八达岭长城',
          desc: '北京'
        },
        {
          id: '0002',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_110x110_4a18787d.jpg',
          title: '天坛公园',
          desc: '北京'
        },
        {
          id: '0003',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_110x110_23e82f50.jpg',
          title: '颐和园',
          desc: '北京'
        },
        {
          id: '0004',
          imgUrl:
            'https://imgs.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_110x110_d957be56.jpg',
          title: '恭王府',
          desc: '北京'
        }
      ]
    }
  },
  methods:{
    createModal(){
      this.$createModal('header',{render:h=>h(content)})
    }
  }
}
</script>
<style lang="stylus" scoped>
.title {
  line-height: 1.8rem;
  background: #eee;
  text-indent: 0.2rem;
  margin-top: 0.2rem;
}

.item {
  display: flex;
  height: 5.1rem;
  overflow: hidden;
}

.item-title {
  margin: 0.2rem;
}

.item-desc {
  margin: 0.2rem;
}

.item-button {
  margin: 0.2rem;
  color: #fff;
  background: #ff9300;
  border-radius: 0.06rem;
  border-color: unset;
}

.item-info {
  width: 100%;
  padding: 0rem 1rem;
}

.item-img {
  width: 80px;
}
</style>