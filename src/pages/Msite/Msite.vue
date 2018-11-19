<template>
  <section class="msite">
    <!-- Swiper -->
    <TopHeader :title="address.name">
    <span class="header_search" slot="left">
      <i class="iconfont icon-sousuo"></i>

    </span>
    </TopHeader>
    <nav class="msite_nav">
    <div class="swiper-container" v-if="categorys.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
          <a href="javascript:" class="link_to_food" v-for="(category,index) in category" :key="index">
            <div class="food_container">
              <img src="'https://fuss10.elemecdn.com'+category.image_url">
            </div>
            <span>{{category.title}}</span>
          </a>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/1.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/2.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/3.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/4.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/5.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/6.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/7.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/8.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
        </div>
        <ul class="swiper-slide">
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/1.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/2.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/3.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/4.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/5.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/6.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/7.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
          <li class="slideItem">
            <a href="javascript:;">
              <img src="./images/nav/8.jpg" alt="">
              <span class="itemtext">甜品饮品</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="star_rating">
      <ul class="starList">
        <li class="starItem on"></li>
        <li class="starItem on"></li>
        <li class="starItem on"></li>
        <li class="starItem on"></li>
        <li class="starItem off"></li>
        <span class="rating">1.6</span>
        <span class="order">月售1000单</span>
      </ul>
    </div>
  </section></template>

<script>
  import {mapState} from 'vuex'
  import ShopList from '../../components/ShopList/ShopList.vue'
  export default {
    mouted(){
      this.$store.dispatch('getFood')
    }



  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"

.msite
  width 100%
  .msite_nav



















</style>



