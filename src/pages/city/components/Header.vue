<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class='back'>
        <img src="../../../assets/back.png" class="go_back" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
  .header
    height 2.5rem
    line-height 2.5rem
    overflow hidden
    color #fff
    background-image linear-gradient(90deg,#0af,#0085ff)
    font-size .9rem
    text-align center
    .back
      position: absolute
      top: .6rem
      left: .3rem
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
      .go_back
        width 1.5rem
</style>
