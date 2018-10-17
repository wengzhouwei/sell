<template>
  <div>
    <home-header></home-header>
    <home-icons :list="iconList"></home-icons>
    <home-doodo></home-doodo>
    <home-cont :list="swipeList"></home-cont>
    <home-house :list="recommendList" :fist="weekendList"></home-house>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeIcons from './components/Icons'
import HomeDoodo from './components/Doodo'
import HomeCont from './components/Cont'
import HomeHouse from './components/House'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeIcons,
    HomeDoodo,
    HomeCont,
    HomeHouse
  },
  data () {
    return {
      iconList: [],
      recommendList: [],
      weekendList: [],
      swipeList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('../../../static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
        this.swipeList = data.swipeList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
