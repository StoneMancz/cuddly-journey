<template>
  <div>
    <img src="../assets/昡熠（PNG）.png" id="logo">
    <ul>
      <li v-for="(item,index) in list" :key="index" @click="item_click(item)">
        {{item.label}}
        <span class="cubeic-arrow"></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ''
    }
  },
  async created() {
    const return_data = await this.$http.get('/api/mineList')
    this.list = return_data.lists
  },
  methods: {
    item_click(item) {
      if (item.type) {
        this.$router.push({
          path: '/'
        })
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
#logo {
  width: 100%;
  height: 120px;
}

ul {
  padding-top: 5%;

  li {
    font-size: 18px;
    text-align: left;
    padding-left: 5%;
    border-bottom: 0.026667rem solid #eee;
    height: 1.333333rem;
    line-height: 1.333333rem;
  }
}

.cubeic-arrow {
  float: right;
}
</style>

