<template>
  <div class="container">
    <div class="desc">
      <h3 class="title">品质套餐</h3>
      <p class="decs">搭配齐全吃得好</p>
      <p class="pay">立即抢购&gt;</p>
      <img
        src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"
       class="photo"
      >
    </div>
    <div class="container_one">
      <h3 class="title_color">限量抢购</h3>
      <p class="decs">超值美味 9.9元起</p>
      <p class="pay"><span class="color">4194人</span>正在抢&gt;</p>
      <img
        src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"
        class="photo"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeDoodo'
}
</script>

<style lang="stylus" scoped>
  .container
    margin-bottom .8vw
    display flex
    padding-left 3.5vw
    padding-right 3.5vw
    .desc
      height 37vw
      padding 1.6vw 0 0 4vw
      z-index 0
      background linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
      position relative
      flex 1
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      margin-right 1.8vw
      .title
        font-size 1rem
        font-weight 700
        margin-bottom 1.3vw
        color #333
      .decs
        font-size .5rem
        color #777
        margin-bottom 2.4vw
      .pay
        font-size .48rem
        color #af8260
        font-weight 700
      .photo
        position absolute
        right 0
        bottom -2vw
        width 32vw
        height 22wv
    .container_one
      height: 37.333333vw;
      padding: 1.6vw 0 0 4vw;
      z-index: 0;
      position: relative;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      background: -webkit-linear-gradient(bottom,#f4f4f4 5%,#fafafa 95%);
      background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
      .title_color
        color: #e81919
        font-size 1rem
        font-weight 700
        margin-bottom 1.3vw
      .decs
        font-size .5rem
        color #777
        margin-bottom 2.4vw
      .pay
        color #333
        font-size .5rem
        font-weight 700
        .color
          color #e81919
      .photo
        position absolute
        right 0
        bottom -1.3vw
        width 31vw
        height 19vw
</style>
