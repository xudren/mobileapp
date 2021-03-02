<template>
  <div>
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="item-title">
        <span class="item-title-icon">
          <img
            class="item-title-img"
            src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20202/ea3f321aea9fbf93098a78bdddd3306f.png"
          />
        </span>
        {{item.title}}
      </div>
      <div v-if="item.children">
        <detail-list :list="item.children" class="item-children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/varibies.styl';

.item-children {
  padding: 0 1.2rem;
}

.item-title-img {
  position: relative;
  top: 0.3rem;
  display: inline-block;
  width: 1.2rem;
  max-height: 1.32rem;
  margin-right: 0.04rem;
}

.item-title {
  line-height: 2.8rem;
  font-size: 0.96rem;
  padding: 0 0.4rem;
  border-bottom: 1px solid #ccc;
}
</style>