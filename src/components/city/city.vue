<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :letter="letter"></city-list>
    <city-alphabet @change="handlerLetterChange"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './header'
import CitySearch from './search'
import CityList from './list'
import CityAlphabet from './alphabet'
export default {
  name: 'City',
  data() {
    return {
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    handlerLetterChange(letter) {
      this.letter = letter
      console.log(letter, 'letter')
    }
  }
}
</script>
<style lang='stylus' scoped></style>