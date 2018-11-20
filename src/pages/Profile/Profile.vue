<template>
  <section class="profile">
    <TopHeader title="个人中心"/>
    <section class="profile-number" @click="$router.push(user._id ? '/userinfo':'/login')">
      <a href="javascript:" class="profile-link">
        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="user-info">
          <p class="user-info-top" v-if="!user.phone">
            {{user.name ? user.name : '登录/注册'}}
          </p>
          <p v-if="!user.name">
            <span class="user-icon">
            <i class="iconfont icon-shouji icon-mobile"></i>
          </span>
            <span class="icon-mobile-number">
              {{user.phone ? user.phone : '暂无绑定手机号'}}
            </span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-jiantou1"></i>
          </span>
      </a>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>







    </TopHeader>
  </section>


</template>

<script>
  import {mapState} from 'vuex'
  import {MessageBox} from 'mint-ui'
  export default {
    computed:{
      ...mapState(['user'])
    },
    methods:{
      logout(){
        MessageBox.confirm('去定退出登录吗?')
          .then(
            action=>{
              this.$store.dispatch('logout')
            },
            action=>{console.log('点击了取消')}
          )
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"








</style>



