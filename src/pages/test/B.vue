<template>
  <div>
    <h2>BBBB组件---必须登录</h2>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/b/b1">b111</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/b/b2">b222</router-link>
      </div>
    </div>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script>
  export default {
    date(){
      return{}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tab
    height 40px
    line-height 40px
    background #fff
    bottom-border-1px(rgba(7,17,27,0.1))
    .tab-item
      float left
      width:50%
      text-align center
      font-size 14px
      color rgb(77,85,93)
      a
        display block
        position relative
        &.router-link-active
          color #02a774
          &::after
            content ''
            position absolute
            left 50%
            bottom 1px
            width 35px
            height 2px
            transform translateX(-50%)
            background #02a774
</style>



