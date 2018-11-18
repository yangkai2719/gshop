<template>
  <footer class="footer">
    <span class="guide_item on" :class="{on:$route.path==='/msite'}" @click="goto('/msite')"><span><i
      class="iconfont icon-waimai"></i></span>
      <span class="itemText">外卖</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/search'}" @click="goto('/search')"><span><i
      class="iconfont icon-search"></i></span>
      <span class="itemText">搜索</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/order'}" @click="goto('/order')"><span><i
      class="iconfont icon-dingdan"></i></span>
      <span class="itemText">订单</span>
    </span>
    <span class="guide_item" :class="{on:$route.path==='/profile'}" @click="goto('/profile')"><span><i
      class="iconfont icon-geren"></i></span>
      <span class="itemText">我的</span>
    </span>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto(path){
        this.$router.replace(path)
      }


    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer
    top-border-1px(#ddd)
    position fixed
    bottom 0
    left 0
    width 100%
    height 50px
    display flex
    .footerItem
      flex 1
      display flex
      justify-content center
      flex-direction column
      align-items center
      .iconfont
        font-size 22px
      .itemText
        font-size 13px
        margin 3px 0
      &.active
        color $maincolor


</style>

