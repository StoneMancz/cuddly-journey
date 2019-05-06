<template>
  <div>
    <div v-for="(item,index) in cartarry" :key="index" class="goodsleft">
      <label>{{item.title}}</label>
      <div class="goodsright">
        <i class="cubeic-remove" @click="remove_cart(index)"></i> {{item.cartCount}}<i class="cubeic-add" @click="tocart(item)"></i>
      </div>
    </div>
    <br>
    <cube-button>下单</cube-button>
    <cube-button @click="clearcart">清空购物车</cube-button>
  </div>
</template>
<script>
//拿到vuex里的数据
import { mapState } from 'vuex'
export default {
  data() {
    return {
      //cartarry: []
    }
  },
  computed: {
    ...mapState({
      cartarry: state => state.cartarry
    })
  },
  methods: {
    clearcart() {
      //清空商品
      this.$store.commit('clearcart')
    },
    //增加商品
    tocart(item) {
      this.$store.commit('tocart', { label: item.title, cartCount: item.cartCount })
    },
    //减少商品
    remove_cart(index) {
      this.$store.commit('remove_cart', index)
    }
  }
}
</script>
<style lang="stylus" scoped>
.cube-btn {
  margin-top: 10px;
}

.goodsleft {
  text-align: left;
  padding: 10px;

  .goodsright {
    float: right;
  }
}

ul li {
  label {
    font-size: 18px;
    float: left;
    margin-left: 2%;
    margin-top: 2%;
  }
}
</style>

