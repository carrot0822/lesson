<template>
  <div>
    <div class="recommend-title">
      周末打啥音游
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of  list" :key="item.id">
        <div class="item-img-warpper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data: function () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://game.gtimg.cn/images/c2/web201801/pc/slider2.jpg',
        title: 'Xenon',
        desc: '指尖下落所创作的奇迹'
      }, {
        id: '0002',
        imgUrl: 'http://game.gtimg.cn/images/c2/web201801/pc/slider3.jpg',
        title: 'RoBo_Head',
        desc: '指尖下落所创作的奇迹'
      }, {
        id: '0003',
        imgUrl: 'http://game.gtimg.cn/images/c2/web201801/pc/slider1.jpg',
        title: 'ConneR',
        desc: '指尖下落所创作的奇迹'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    margin-top : .2rem
    line-height : .8rem
    background : #eeeeee
    text-indent : .2rem
  .item-img-warpper
    overflow : hidden
    height : 0
    padding-bottom : 39.7%
  .item-img
    width : 100%
  .item-info
    padding : .1rem
    .item-title
      line-height : .54rem
      font-size : .32rem
      ellipsis()
    .item-desc
      line-height : .4rem
      color : #cccccc
      ellipsis()
</style>
