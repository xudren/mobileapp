<template>
  <div class="header" id='header'>
    <!-- <mt-button @click="handleButtonClick">Click Me</mt-button>
    <mt-popup v-model="popupVisible" popup-transition="popup-fade" position="top">更新成功</mt-popup>-->
    <div class="header-left back-icon" @click='modal'>
      <svg class="icon" style="width:12px;height:12px">
        <use xlink:href="#iconfanhui" />
      </svg>
      头像
    </div>
    <div class="header-input">
      <span>
        <svg class="icon" style="width:12px;height:12px">
          <use xlink:href="#iconsousuo" />
        </svg>
        输入城市/经典/游玩主题
      </span>
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <svg class="icon" style="width:12px;height:12px">
          <use xlink:href="#iconjiantou" />
        </svg>
      </div>
    </router-link>
    <slot></slot>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import modal from '../common/common/modal'
export default {
  name: 'Header',
  data() {
    return {
      popupVisible: false
    }
  },
  computed: {
    ...mapGetters('mobileDemo', ['city'])
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    getTableData() {
      console.log(this.$store, '$store')
    },
    handleButtonClick() {
      this.popupVisible = true
    },
    modal(){
      // this.$createModal('recommend','111')
      console.log(modal,'modal')
      this.$createModal('recommend',{components:modal})
      // this.$router.push({
      //   name:'personal'
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
@import '~@/assets/varibies.styl';

.header {
  display: flex;
  background: $bgColor;
  line-height: 1.86rem;
  color: #fff;

  .header-left {
    width: 3.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 1.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 1.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    background: #fff;
    padding-left: 0.2rem;
    border-radius: 0.3rem;
    color: #ccc;
  }

  .header-right {
    min-width: 4.24rem;
    padding: 0.1rem;
    float: right;
    text-align: center;
    color: #fff;
  }
}
</style>
