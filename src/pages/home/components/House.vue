<template>
  <el-tabs v-model="activeNames" @tab-click="handleClick" tab-position="center">
    <el-tab-pane label="综合排序" name="first">
      <div class="index" v-for="item of list" :key="item.id">
        <div class="index_shopInfo">
          <img
              :src="item.imgUrl"
              alt="和味小厨">
        </div>
        <div class="index_active">
          <h3 class="index_title">{{item.title}}</h3>
          <img :src="item.biuUrl">
          <span class="desc">5</span>
          <span class="desc">{{item.desc}}</span>
          <span class="blue">蜂鸟专送</span>
          <div class="price">
            <span>{{item.qi}}</span>&nbsp;&nbsp;&nbsp;|
            <span class="qi">{{item.money}}</span>
            <span class="miti">{{item.map}}</span>
            <span class="miti_o">{{item.date}}</span>
          </div>
          <div class="map">
            <span class="cai">江浙菜</span>
            <span class="cai_i">品质联盟</span>
          </div>
          <div class="discount">
            <span class="new">首</span>
            <span class="money">{{item.reduce}}</span>
            <span class="des">{{item.count}}</span>
          </div>
          <div class="Discount">
            <span class="reduce">减</span>
            <span class="Fsubtraction">{{item.re}}</span>
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="距离最近" name="second">
      <div class="index" v-for="item of fist" :key="item.id">
        <div class="index_shopInfo">
          <img
            :src="item.imgUrl"
          >
        </div>
        <div class="index_active">
          <h3 class="index_title">{{item.title}}</h3>
          <img :src="item.biuUrl">
          <span class="desc">5</span>
          <span class="desc">{{item.desc}}</span>
          <span class="blue">蜂鸟专送</span>
          <div class="price">
            <span>{{item.qi}}</span>&nbsp;&nbsp;&nbsp;|
            <span class="qi">{{item.money}}</span>
            <span class="miti">{{item.map}}</span>
            <span class="miti_o">{{item.date}}</span>
          </div>
          <div class="map">
            <span class="cai">江浙菜</span>
            <span class="cai_i">品质联盟</span>
          </div>
          <div class="discount">
            <span class="new">首</span>
            <span class="money">{{item.reduce}}</span>
            <span class="des">{{item.count}}</span>
          </div>
          <div class="Discount">
            <span class="reduce">减</span>
            <span class="Fsubtraction">{{item.re}}</span>
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="品质联盟" name="third"></el-tab-pane>
    <el-tab-pane label="筛选" name="fourth"></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'HomeHouse',
  props: {
    list: Array,
    fist: Array
  },
  data () {
    return {
      activeNames: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
    }
  }
}
</script>

<style lang="stylus" scoped>
  .index
    margin-top 4vw
    overflow hidden
    position: relative;
    border-bottom .014rem solid #eee
    border-bottom .14vw solid #eee
    background-color #fff
    color #666
    list-style none
    font-size .29rem
    line-height normal
    display flex
    .index_shopInfo
      display flex
      justify-content flex-start
      align-items stretch
      padding 0 2.666667vw
      img
        height 4.5rem
    .index_active
      width 71%
      .index_title
        margin 0 0 1.8vw 0
        font-size 15px
        font-weight 900
        color #333333
      .desc
        font-size .1rem
      .blue
        display inline-block
        float right
        font-size .23rem
        color #fff
        background-image linear-gradient(45deg,#0085ff,#0af);
      .price
        margin-top 1.5vw
        overflow hidden
        .qi
          margin-left .6rem
        .miti_o
          float right
        .miti
          margin-left .5rem
          float right
      .map
        margin-left .9vw
        margin-top 2.5vw
        font-size .2rem
        .cai
          background-image linear-gradient(45deg,#fff,#ccc)
          border 0.1rem solid #ccc
        .cai_i
          margin-left 8px
          background-image linear-gradient(45deg,#fff,#ccc)
          border 0.1rem solid #ccc
      .discount
        margin-top 2.3vw
        position relative
        width 70vw
        .new
          position absolute
          left 0
          top 0
          z-index 0
          background-color rgb(112, 188, 70)
          color #fff
          font-size 1.5rem
          display flex
          align-items center
          justify-content center
          border-radius 1.6vw
          transform scale(.5)
          transform-origin 0 0
        .money
          color #666
          margin-left 5vw
        .des
          float right
          color #999
      .Discount
        margin-top 2.3vw
        margin-bottom 4vw
        position relative
        width 70vw
        .reduce
          position absolute
          left 0
          top 0
          z-index 0
          background-color rgb(240, 115, 115)
          color #fff
          font-size 1.5rem
          display flex
          align-items center
          justify-content center
          border-radius 1.06vw
          transform scale(.5)
          transform-origin 0 0
        .Fsubtraction
          color #666
          margin-left 5vw
</style>
