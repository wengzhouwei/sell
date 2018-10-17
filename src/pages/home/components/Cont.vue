<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img
        :src="item.imgUrl" class="swiper_img"
        >
      </swiper-slide>
    </swiper>
    <div class="Tj">
      <span class="yi">——</span>&nbsp;&nbsp;推荐商家&nbsp;&nbsp;<span class="yi">——</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeCont',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        delay: 1000,
        autoplay: {
          disableOnInteraction: false
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang='stylus' scoped>
  .wrapper
    margin-top .5rem
    text-align center
    overflow hidden
    height auto
    width 100%
    .swiper_img
      width 93.3vw
    .Tj
      display flex
      align-items center
      justify-content center
      height 9.6vw
      font-size .9.4rem
      color: #000
      .yi
        color #666
</style>
