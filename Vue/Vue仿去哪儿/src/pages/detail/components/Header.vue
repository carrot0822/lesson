<template>
<div>
  <router-link tag="div" to="/" v-show="showAbs" class="header-abs">
    <span class="iconfont header-abs-back">&#xe624;</span>
  </router-link>
  <div class="header-fixed" :style="opacityStyle" v-show="!showAbs">
    城市选择
    <router-link to='/'>
      <div class="iconfont header-fixed-back">&#xe624;</div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity: opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }, // 当页面重新渲染的时候绑定全局事件 注意要影响其他组件
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  } // 使用keep-alive组件后新增的第二个钩子函数 当页面被隐藏起来的时候触发

}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .header-abs
    position : absolute
    left : .2rem
    top : .2rem
    width : .8rem
    height : .8rem
    line-height : .8rem
    border-radius : .4rem
    text-align : center
    background : rgba(0,0,0,.8)
    .header-abs-back
      color : #ffffff
      font-size : .4rem
.header-fixed
  z-index : 2
  position : fixed
  top : 0
  left : 0
  right : 0
  height : .86rem
  line-height : .86rem
  text-align : center
  color : #ffffff
  background : $bgcolor
  font-size : .34rem
  .header-fixed-back
    position : absolute
    font-size : .4rem
    top : 0
    left : 0
    text-align : center
    width : .64rem
    color : #ffffff
</style>
