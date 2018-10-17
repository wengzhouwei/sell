<template>
  <div class="color">
    <div class="map">
      <router-link to="/city">
      <img src="../../../assets/GPS.png" class="img">
      <span class="desc">{{this.$store.state.city}}</span>
      <img src="../../../assets/bottom.png" class="bottom">
      </router-link>
    </div>
    <div class="input">
      <a class="content">
        <img src="../../../assets/ss.png" class="img_s">
        <span>搜索饿了么商家、商品名称</span>
      </a>
    </div>
  </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
  .color
    background-image linear-gradient(90deg,#0af,#0085ff)
    padding 20px 16px 7px 16px
    overflow hidden
    .map
      font-family 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif
      align-items center
      display flex
      .img
        width 1rem
        height 1rem
        margin-right .3rem
      .desc
        color #fff
        font-weight 700
        font-size 1.1rem
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        max-width 80%
      .bottom
        width 2rem
        height 2rem
        margin-left -.3rem
        margin-bottom -.5rem
    .input
      margin-top .45rem
      .img_s
        width 1.2rem
        height 1.2rem
        margin-left .5rem
      .content
        border-radius 2px
        background #fff
        height 9vw
        display flex
        color #ccc
        font-size .85rem
        align-items center
        justify-content center
        -webkit-box-align center
        -webkit-box-packy center
</style>
