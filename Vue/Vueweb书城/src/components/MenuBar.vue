<template>
    <div class="menu-bar">
         <transition name="slide-up">
            <div class="menu-wrapper" :class="{'hide-box-shadow':ifSettingshow}" v-show="ifTitleAndMenuShow">
                <div class="icon-wrapper">
                        <span class="iconfont icon-menu"></span>
                </div>
                <div class="icon-wrapper">
                        <span class="iconfont icon-Progressread"></span>
                </div>
                <div class="icon-wrapper">
                        <span class="iconfont icon-brightness"></span>
                </div>
                <div class="icon-wrapper">
                        <span class="iconfont icon-ziti" @click="showSetting"></span>
                </div>
            </div>
        </transition>
        <transition>
            <div class="setting-wrapper" v-show="ifSettingshow">
                <div class="setting-font-size">
                    <div :style="{fontSize:fontSizeList[0].fontSize + 'px'}" class="preview">A</div>
                    <div class="select">
                        <div class="select-wrap" v-for="(item, index) in fontSizeList" :key="index">
                            <div class="line"></div>
                            <div class="point-wrapper">
                                <div class="point" v-show="defaultFontSize === item.fontSize">
                                    <div class="small-point">
                                        
                                    </div>
                                </div>
                            </div>
                            <div class="line"></div>
                        </div>
                    </div> 
                    <div :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize +'px'}" class="preview">A</div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props:{
        ifTitleAndMenuShow:{
            type:Boolean,
            default:false
        },
        fontSizeList: Array,
        defaultFontSize:Number
    },
    data () {
        return {
            ifSettingshow: false
        }
    },
    methods:{
        showSetting() {
            this.ifSettingshow = !this.ifSettingshow
        },
        hideSetting() {
            this.ifSettingshow = false
        }
    }

}
</script>
<style lang="scss" scoped>
@import '../assets/styles/global.scss';
.menu-bar{
    .menu-wrapper{
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 101;
        display: flex;
        width: 100%;
        height: px2rem(96);
        background: white;
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,.15);
        &.hide-box-shadow{
            box-shadow: none;
        }
        .icon-wrapper{
            flex:1;
            @include center;
                .iconfont{
                font-size: px2rem(48);
            }
            .icon-Progressread{
                font-size: px2rem(22);
            }
            
        }
    }
    .setting-wrapper{
        position: absolute;
        bottom: px2rem(96);
        left: 0;
        z-index: 101;
        width: 100%;
        height: px2rem(96);
        background: white;
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0,0,0,.15);
        .setting-font-size {
            display: flex;
            height:100%;
            .preview{
                flex: 0 0 px2rem(80);
              
                @include center
            }
            .select{
                display: flex;
                flex: 1;
                .select-wrap{
                    flex: 1;
                    display: flex;
                    @include center;
                    &:first-child { /*父元素的第一个生效 那伪类有点不方便啊*/
                        .line{
                            &:first-child{
                                border-top: none;/*利用border来设置边框*/
                            }
                        }
                    }
                    &:last-child{
                        .line{
                            &:last-child{
                                border-top: none;
                            }
                        }
                    }
                    .line{
                        flex:1;
                        height:0;
                        border-top: px2rem(4) solid #ccc;
                    }
                    .point-wrapper{
                        position: relative;
                        flex: 0 0 0;
                        width: 0;
                        height: px2rem(10);
                        border-left: px2rem(4) solid #ccc;
                        .point{
                            position: absolute;
                            top: px2rem(-16);
                            left: px2rem(-20);
                            width: px2rem(40);
                            height: px2rem(40);
                            border-radius: 50%;
                            background: white;
                            border: px2rem(2) solid #ccc;
                            box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, 0.15);
                            @include center;
                            .small-point{
                                width: px2rem(10);
                                height:px2rem(10);
                                background: black;
                                border-radius: 50%;
                            }
                        }
                    }
                }
            }
            
        }
    }
    
}

</style>

