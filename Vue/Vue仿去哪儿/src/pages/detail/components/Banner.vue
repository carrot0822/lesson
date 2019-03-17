<template>
<div>
  <div class="banner" @click="handleClick">
    <img class="banner-img" :src="bannerImg" />
    <div class="banner-info">
      <div class="banner-title">
        {{this.sightName}}
      </div>
      <div class="banner-number">
        <span class="iconfont arrow-icon banner-icon">&#xe63b;</span>
        {{this.bannerImgs.length}}
      </div>
    </div>
  </div>
  <fade-animation>
  <common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handeClose"></common-gallary>
  </fade-animation>
</div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  components: {
    CommonGallary: CommonGallary,
    FadeAnimation: FadeAnimation
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleClick () {
      this.showGallary = true
    },
    handeClose () {
      this.showGallary = false
    }
  }

}
</script>

<style lang="stylus" scoped>
  .banner
    overflow : hidden
    height : 0
    padding-bottom : 55%
    position : relative
    .banner-img
      width : 100%
      padding-bottom : 32.5%
    .banner-info
      position : absolute
      left : 0
      right : 0
      bottom : 0
      line-height : .6rem
      display : flex
      color : #ffffff
      background-image : linear-gradient(top, rgba(0,0,0,0,),rgba(0,0,0,0.8))
      .banner-title
        flex : 1
        font-size : .32rem
        padding : 0 .2rem
      .banner-number
        height : .32rem
        line-height : .32rem
        margin-top : .14rem
        padding : 0 .4rem
        border-radius : .2rem
        background : rgba(0,0,0,.8)
        font-size : .24rem
        .banner-icon
          font-size : .24rem
</style>
