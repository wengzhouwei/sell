<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang='stylus' scoped>
  .search
    height 2.5rem
    padding 0 .1rem
    background-image linear-gradient(90deg,#0af,#0085ff)
    text-align center
    .search-input
      box-sizing border-box
      width 95%
      height 2.2rem
      padding 0 .1rem
      line-height 2.2rem
      text-align center
      border-radius .2rem
      color #666
      border none
</style>
