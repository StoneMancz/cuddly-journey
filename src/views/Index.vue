<template>
  <div class="index">
    <cube-slide ref="slide" :data="items" @change="changePage">
      <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
        <a :href="item.url">
          <img :src="item.image" class="images">
        </a>
      </cube-slide-item>
    </cube-slide>

    <cube-slide ref="slidelists" :auto-play="true" :data="lists">
      <cube-slide-item v-for="(list, index) in lists" :key="index">
        <ul class="listul">
          <li class="listli" v-for="(item,index1) in lists" :key="index1">
            <a :href="item.url">
              <img :src="item.image" alt="" class="listImage">
              <p class="title">{{item.label}}</p>
            </a>
          </li>
        </ul>
      </cube-slide-item>
    </cube-slide>
  </div>
</template>
<script>
import { create } from 'domain'
export default {
  data() {
    return {
      items: [],
      lists: []
    }
  },
  methods: {
    changePage(current) {},
    clickHandler(item, index) {}
  },
  async created() {
    const item = await this.$http.get('/api/top_commodity')
    const lists = await this.$http.get('/api/rollinglist')
    this.items = item.items
    this.lists = lists.lists
  }
}
</script>
<style lang="stylus" scoped>
.images {
  width: 100%;
  height: 20%;
}

.listImage {
  margin-top: 0.5rem;
  width: 1.5rem;
}

.listli {
  float: left;
}

.listli a {
  text-align: center;
  margin-left: 0.4rem;
}

.title {
  font-size: 0.4rem;
}
</style>