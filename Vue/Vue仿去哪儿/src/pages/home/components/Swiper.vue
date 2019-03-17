<!-- The ref attr used to find the swiper instance -->
<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
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
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: '/static/2_b.jpg'
      }, {
        id: '002',
        imgUrl: '/static/3_b.jpg'
      }]
    }
  },
  computed: {
    showSwiper: function () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .pagination-bullet-active
      background : #ffffff
    .wrapper
        overflow : hidden
        width : 100%
        height : 0
        background : #ccc
        padding-bottom : 31.25%
        .swiper-img
            width : 100%
</style>
