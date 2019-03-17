<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities"
               :hot="hotCities"
               :letter="letter"
    ></city-list>
    <city-alphbet :cities="cities" @change="handleLetterChange"></city-alphbet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import cityList from './components/List'
import CityAlphbet from './components/Alphbet'
export default {
  name: 'City',
  components: {
    CityHeader: CityHeader,
    CitySearch: CitySearch,
    cityList: cityList,
    CityAlphbet: CityAlphbet
  },
  data: function () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo: function () {
      axios.get('/api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc: function (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
      console.log(res)
    },
    handleLetterChange: function (letter) {
      this.letter = letter
    }
  },
  mounted: function () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
