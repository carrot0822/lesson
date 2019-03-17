<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
              <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" @click="handleCityClick(item.name)" v-for="item of hot" :key="item.id">
              <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" :ref="key" v-for="(item,key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
          v-for="innerItem of item"
          :key="innerItem.id" @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
      console.log(city)
    },
    ...mapMutations(['changeCity'])
  },
  mounted: function () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter: function () {
      if (this.letter) {
        //  循环输出ref获取到的是一个数组 而组件必须是dom元素 0就是了？ 这块乱乱的
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
        console.log(this.$refs[this.letter])
        console.log(element)
        console.log(typeof element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color : #cccccc
  &:after
    border-color : #cccccc
.border-bottom
&:before
  border-color : #cccccc
.list
  overflow : hidden
  position : absolute
  top : 1.80rem
  left : 0
  right : 0
  bottom : 0
  .title
    line-height : .54rem
    background : #eeeeee
    padding-left : .2rem
    color : #666666
    font-size : .26rem
  .button-list
    overflow : hidden
    padding : .1rem .6rem .1rem .1rem
    .button-wrapper
      float : left
      width : 33.3%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align : center
        border : .02rem solid #ccc;
        border-radius : .06rem
  .item-list
    .item
      line-height : .54rem
      color : #666666
      padding-left : .2rem
</style>
