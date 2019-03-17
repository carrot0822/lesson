<template>
  <div class="header">
    <div class="header-left">
        <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/旅游/各种了
    </div>
    <router-link to='/city'>
        <div class="header-right">
            {{this.city}}
            <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
/*设置一个链 对其他的CSS文件不起影响  2倍尺寸？100/2*/
   @import '~styles/varibles.styl'
    .header
        display : flex /*flex布局 好像有点东西啊 */
        line-height : .86rem
        background : $bgcolor
        color : #ffffff
        .header-left
            width : .64rem
            float : left
            .back-icon
               text-align : center
               font-size :  .4rem
        .header-input
            flex : 1 /*自动撑开 */
            line-height :.64rem
            height : .64rem
            margin-top : .12rem
            margin-left : .2rem
            background : #ffffff
            border-radius : .1rem
            color : #ccc
        .header-right
            min-width : 1.04rem
            padding : 0 .1rem
            float : right
            text-align : center
            color : #ffffff
            .arrow-icon
                margin-left : -0.04rem
                font-size : .24rem
</style>
