<template>
  <div>
    <div class="icons">
      <swiper>
        <swiper-slide :options="swiperOption" v-for="(page, index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img :src="item.imgUrl" alt="" class="icon-content-img">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data: function () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [{
        id: '001',
        imgUrl: 'http://thyrsi.com/t6/369/1536763307x-1566663863.png',
        desc: 'AE'
      }, {
        id: '002',
        imgUrl: 'http://thyrsi.com/t6/369/1536761684x-1566663106.jpg',
        desc: 'AE'
      }, {
        id: '003',
        imgUrl: 'http://thyrsi.com/t6/369/1536763307x-1566663863.png',
        desc: 'AE'
      }, {
        id: '004',
        imgUrl: 'http://thyrsi.com/t6/369/1536761684x-1566663106.jpg',
        desc: 'AE'
      }, {
        id: '005',
        imgUrl: 'http://thyrsi.com/t6/369/1536763307x-1566663863.png',
        desc: 'AE'
      }, {
        id: '006',
        imgUrl: 'http://thyrsi.com/t6/369/1536761684x-1566663106.jpg',
        desc: 'AE'
      }, {
        id: '007',
        imgUrl: 'http://thyrsi.com/t6/369/1536763307x-1566663863.png',
        desc: 'AE'
      }, {
        id: '008',
        imgUrl: 'http://thyrsi.com/t6/369/1536763307x-1566663863.png',
        desc: 'AE'
      }, {
        id: '009',
        imgUrl: 'http://thyrsi.com/t6/369/1536763307x-1566663863.png',
        desc: 'AE'
      }]
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.list.forEach(function (item, index) {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
 @import '~styles/mixins.styl'
 /*用swiper作为父层来撑开内容或者说来固定高宽 这个组件自带overflowhidden */
  .icons >>> .swiper-container
    height : 0
    padding-bottom : 50%
.icons
  margin-top : .1rem
  .icon
      position : relative
      float : left
      height : 0
      width : 25%
      padding-bottom : 25%
      .icon-img
          position : absolute
          top : 0
          left : 0
          right : 0
          bottom : 0.44rem
          box-sizing : border-box
          padding : .1rem
          .icon-content-img
              display : block
              margin : 0 auto
              height : 100%
      .icon-desc
              position : absolute
              left : 0
              right : 0
              bottom : 0
              height : .44rem
              line-height : .44rem
              text-align : center
              color : $darkTextColor
              ellipsis()
</style>
