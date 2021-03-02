<template>
  <ul class="list">
    <li
      class="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      v-for="item in number"
      :key="item"
      @click="handleLetterClick"
    >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: 'City',
  data() {
    return {
      touchStatus: false,
      number: [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ],
      startY: 0,
      timer: null
    }
  },
  components: {},
  computed: {},
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText)
      console.log(e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        // const startY = this.$refs['A'][0].offsetTop
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 58
          const index = Math.floor((touchY - this.$refs['A'][0].offsetTop) / 17)
          if (index >= 0 && index < this.number.length) {
            this.$emit('change', this.number[index])
          }
        }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~@/assets/varibies.styl';

.list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 2.58rem;
  right: 0;
  bottom: 0;
  width: 0.8rem;
  list-style: none;
  padding: 0;

  .item {
    line-height: 1.1rem;
    color: $bgColor;
    text-align: center;
  }
}
</style>