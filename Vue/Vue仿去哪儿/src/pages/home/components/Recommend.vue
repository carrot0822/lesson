<template>
  <div>
    <div class="recommend-title">
      热销推荐
    </div>
    <ul>
      <router-link class="item border-bottom"
       v-for="item of  list" :key="item.id"
       tag="li" :to="'/detail/' + item.id"
       >
          <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data: function () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://img01.sogoucdn.com/v2/thumb/resize/w/120/h/90/zi/on/iw/90.0/ih/67.5?t=2&url=https%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F16331%2F20180125122306-1574958973_png_1024_1024_358781.jpg%2F300&appid=200524&referer=http://baike.sogou.com/v166838059.htm?fromTitle=Cytus2',
        title: 'Cytus2',
        desc: '指尖下落所创作的奇迹'
      }, {
        id: '0002',
        imgUrl: 'https://img01.sogoucdn.com/v2/thumb/resize/w/120/h/90/zi/on/iw/90.0/ih/67.5?t=2&url=https%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F16331%2F20180125122306-1574958973_png_1024_1024_358781.jpg%2F300&appid=200524&referer=http://baike.sogou.com/v166838059.htm?fromTitle=Cytus2',
        title: 'Cytus2',
        desc: '指尖下落所创作的奇迹'
      }, {
        id: '0003',
        imgUrl: 'https://img01.sogoucdn.com/v2/thumb/resize/w/120/h/90/zi/on/iw/90.0/ih/67.5?t=2&url=https%3A%2F%2Fpic.baike.soso.com%2Fugc%2Fbaikepic2%2F16331%2F20180125122306-1574958973_png_1024_1024_358781.jpg%2F300&appid=200524&referer=http://baike.sogou.com/v166838059.htm?fromTitle=Cytus2',
        title: 'Cytus2',
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
  .item
    display : flex
    overflow : hidden
    height : 1.9rem
    .item-img
      width : 1.7rem
      height : 1.7rem
      padding : .1rem
    .item-info
      flex : 1
      padding : .1rem
      min-width : 0 /*这一步是？ */
      .item-title
        line-height : .54rem
        font-size : .32rem
        ellipsis()
      .item-desc
        line-height : .4rem
        color : #cccccc
        ellipsis()
      .item-button
        line-height : .44rem
        margin-top : .16rem
        background : #ff9300
        padding : 0 .2rem
        border-radius : .06rem
        color : #ffffff
</style>
