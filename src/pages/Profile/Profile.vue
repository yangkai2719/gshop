<template>
  <section class="profile">
    <TopHeader>
      <section class="profile-number" @click="$router.push('/login')">
        <a href="javascript:" class="profile-link">

        <div class="profile_image">
          <i class="iconfont icon-person"></i>
        </div>
          <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p><span class="user-icon">
            <i class="iconfont_icon-shouji_icon-mobile"></i>
          </span>
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
          </div>
          <span class="arrow"><i class="iconfont icon-jiantou1"></i>
          </span>
        </a>
      </section>
    </TopHeader>
  </section>


</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>



