<template>
  <div>
    <cube-scroll class="leftpanels">
      <ul>
        <li @click="selectList(index)" v-for="(list,index) in lists" :key="index" :class="list.active?'active':''">{{list.label}}</li>
      </ul>
    </cube-scroll>
    <cube-scroll class="rightpanels">
      <img src="//img13.360buyimg.com/mcoss/jfs/t1/20167/38/5982/51492/5c46af5dE7736fc55/b27a8ed4e61b2291.png" id="ad">
      <ul>
        <li v-for="(item,index1) in items" :key="index1">
          <img :src="item.image">
          <p class="cubeic-add" @click="tocart($event,item)">{{item.label}}</p>
        </li>
      </ul>
    </cube-scroll>
    <div class="ball-wrap">
      <transition @before-enter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
        <div class="ball" v-if="ball.show">
          <div class="inner">
            <i class="cubeic-add"></i>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: '',
      items: '',
      ball: {
        show: false,
        el: ''
      }
    }
  },
  methods: {
    async selectList(index) {
      const classifi_rollinglist = await this.$http.get('/api/classifiRollinglist', {
        params: { id: index }
      })
      this.items = classifi_rollinglist.lists_json
      //获取category的内容
      var tag_data = await this.$http.get('/api/classificationData')
      tag_data = tag_data.lists
      tag_data.forEach((item, ind) => {
        if (ind == index) {
          item.active = true
        } else {
          item.active = false
        }
      })
      console.log(tag_data)
      this.lists = tag_data
    },
    tocart(e, tag) {
      //调用vuex中的方法
      this.$store.commit('tocart', tag)
      //让我们小球显示出来
      this.ball.show = true
      //获取点击元素
      this.ball.el = e.target
    },
    beforeEnter(el) {
      //让小球移动到点击的位置
      //获取点击位置
      const dom = this.ball.el
      console.log(dom)
      const rect = dom.getBoundingClientRect() //获取点击的dom的位置
      console.log(rect)
      const x = rect.left - window.innerWidth * 0.7
      const y = -(window.innerHeight - rect.top)
      console.log(x, y)
      el.style.display = 'block'
      el.style.transform = `translate3d(0,${y}px,0)`
      const inner = el.querySelector('.inner')
      inner.style.transform = `translate3d(${x}px,0,0)`
    },
    enter(el, done) {
      //触发重绘
      document.body.offsetHeight
      //小球移动回到原点，就是购物车的位置
      el.style.transform = `translate3d(0,0,0)`
      const inner = el.querySelector('.inner')
      inner.style.transform = `translate3d(0,0,0)`
      //过渡完成后执行的事件
      el.addEventListener('transitionend', done)
    },
    afterEnter(el) {
      //结束隐藏小球
      this.ball.show = false
      el.style.display = 'none'
    }
  },
  async created() {
    const tag_data = await this.$http.get('/api/classificationData')
    const classifi_rollinglist = await this.$http.get('/api/classifiRollinglist', {
      params: { id: 0 }
    })
    this.lists = tag_data.lists
    this.items = classifi_rollinglist.lists_json
  },
  mounted() {
    //设置滚动盒子的高度
    const leftpanels = document.querySelector('.leftpanels')
    const rightpanels = document.querySelector('.rightpanels')
    const bodyheight = document.documentElement.clientHeight
    leftpanels.style.height = bodyheight - 57 + 'px'
    rightpanels.style.height = bodyheight - 57 + 'px'
  }
}
</script>
<style lang="stylus" scoped>
.leftpanels {
  position: fixed;
  left: 0;
  z-index: -1;
  border: 1px;
  width: 30%;
  overflow: auto;
  background-color: #F8F8F8;

  ul li {
    line-height: 50px;
    font-size: 16px;
    background: #f8f8f8;
  }

  .active {
    color: red;
    background: rgba(255, 255, 255, 1);
  }
}

.ball-wrap {
  .ball {
    position: fixed;
    left: 70%;
    bottom: 10px;
    z-index: 1003;
    color: red;
    transition: all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41);

    .inner {
      width: 16px;
      height: 16px;
      transition: all 1s linear;
    }
  }
}

.rightpanels {
  position: fixed;
  right: 0;
  width: 70%;
  height: 100%;

  #ad {
    width: 100%;
    height: auto;
  }

  ul li {
    float: left;
    margin-left: 10px;

    img {
      width: 70px;
      height: 70px;
    }

    p {
      font-size: 14px;
    }
  }
}
</style>

