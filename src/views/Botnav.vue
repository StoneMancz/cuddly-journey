<template>
  <div>
    <transition name="slide-fade">
      <router-view class="Router" />
    </transition>
    <cube-tab-bar v-model="selectedLabelDefault" :data="tabs" @click="clickHandler" @change="changeHandler" class="batBar">
    </cube-tab-bar>
    <span class="countsum">{{countsum}}</span>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      selectedLabelDefault: '首页',
      tabs: [
        {
          label: '首页',
          icon: 'cubeic-home'
        },
        {
          label: '分类页',
          icon: 'cubeic-tag'
        },
        {
          label: '购物车',
          icon: 'cubeic-mall'
        },
        {
          label: '我的',
          icon: 'cubeic-person'
        }
      ]
    }
  },
  methods: {
    clickHandler(label) {
      switch (label) {
        case '首页':
          this.$router.push({
            path: '/botnav/index'
          })
          break
        case '分类页':
          this.$router.push({
            path: '/botnav/tag'
          })
          break
        case '购物车':
          this.$router.push({
            path: '/botnav/mall'
          })
          break
        case '我的':
          this.$router.push({
            path: '/botnav/person'
          })
          break
        default:
          break
      }
    },
    changeHandler(label) {
      // if you clicked different tab, this methods can be emitted
    },
    created() {
      //this.$router.push({ path: '/botnav/index' })
    }
  },
  computed: {
    ...mapGetters({
      countsum: 'countsum'
    })
  }
}
</script>
<style lang="stylus" scoped>
.batBar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 31;
  font-size: 18px;
  -webkit-box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
  background-color: rgb(255, 255, 255);
}

.slide-fade-enter-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-fade-leave-active {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}

.Router {
  position: absolute;
  width: 100%;
  transition: all 0.4s ease;
}

.countsum {
  position: fixed;
  bottom: 33px;
  right: 23%;
  z-index: 1001;
  width: 18px;
  height: 18px;
  line-height: 18px;
  border-radius: 50%;
  font-size: 14px;
  background: red;
  color: #fff;
}
</style>
