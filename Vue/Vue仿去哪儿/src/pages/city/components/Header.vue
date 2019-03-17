<template>
  <div class="header">
    城市选择
    <router-link to='/'>
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  position : relative
  overflow : hidden
  height : .86rem
  line-height : .86rem
  text-align : center
  color : #ffffff
  background : $bgcolor
  font-size : .34rem
  .header-back
    position : absolute
    font-size : .4rem
    top : 0
    left : 0
    text-align : center
    width : .64rem
    color : #ffffff
</style>
