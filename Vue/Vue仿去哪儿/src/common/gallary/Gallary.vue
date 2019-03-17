<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide  v-for="(item,index) in imgs" :key="index">
            <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!--
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
        -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction', //  把下面的小圆点生成方式进行改变 但为什么感觉卡卡的
        observeParents: true, //  只要swiper组件检测到DOM元素改变则会自动再加载
        observe: true,
        loop: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow : inherit
  .container
    display : flex
    flex-direction : column
    justify-content : center
    z-index : 99
    position : fixed
    left : 0
    right : 0
    top : 0
    bottom : 0
    background : #000000
    .wrapper
      height : 0
      width : 100%
      padding-bottom : 100%
      .gallary-img
        width : 100%
      .swiper-pagination
        color : #ffffff
        bottom : -1rem
</style>
