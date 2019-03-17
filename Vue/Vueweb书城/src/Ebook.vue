<template>
    <div class="ebook">
       <title-bar :ifTitleAndMenuShow="ifTitleAndMenuShow"></title-bar>
        <div class="read-wrapper">
            <div id="read">

            </div>
            <div class="mask">
                <div class="left" @click="prevPage"></div>
                <div class="center" @click="toggleTitleAndMenu"></div>
                <div class="right" @click="nextPage"></div>
            </div>
        </div>
       <menu-bar　:defaultFontSize='defaultFontSize' :fontSizeList='fontSizeList' :ifTitleAndMenuShow="ifTitleAndMenuShow" ref="menuBar"></menu-bar>
    </div>
</template>

<script>
import TitleBar from './components/TitleBar'
import MenuBar from './components/MenuBar'
import Epub from 'epubjs'
const DOWLOAD_URL = '/static/2018_Book_AgileProcessesInSoftwareEngine.epub'

export default {
    components: {
        TitleBar,
        MenuBar
    },
    data() {
        return{
            ifTitleAndMenuShow: false,
            fontSizeList: [
                { fontSize: 12},
                { fontSize: 14},
                { fontSize: 16},
                { fontSize: 18},
                { fontSize: 20},
                { fontSize: 22},
                { fontSize: 24}
            ],
            defaultFontSize:16
        }
    },
    methods: {
        toggleTitleAndMenu() {
            this.ifTitleAndMenuShow = !this.ifTitleAndMenuShow
            
            if(!this.ifTitleAndMenuShow){
                this.$refs.menuBar.hideSetting()// 调dom节点对象 控制数据
                
            }
        },
        prevPage() {
            // Rendition.prev
            if (this.rendition) {
                this.rendition.prev()
            }
        },
        nextPage() {
            if (this.rendition) {
                this.rendition.next()
            }
        },
        showEpun() {
            // 生成book
            this.book = new Epub(DOWLOAD_URL)
            console.log(this.book)
            // 生成rendition，通过book.renderTo
            this.rendition = this.book.renderTo('read',{
                width: window.innerWidth,
                height: window.innerHeight
            }) 
            this.rendition.display ()
        }
    },
    mounted () {
        this.showEpun ()
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/styles/global';
.ebook{
    position: relative;
    
    .read-wrapper {
        .mask {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 100;
            display: flex;
            width: 100%;
            height: 100%;
            .left{
                flex: 0 0 px2rem(100);
                
            }
            .center {
                flex: 1;
                
            }
            .right {
                flex: 0 0 px2rem(100);
                
            }
        }
    }
    
}
</style>
