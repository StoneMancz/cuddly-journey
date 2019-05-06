<template>
  <div class="login">
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>

<script>
import { constants } from 'crypto'
export default {
  data() {
    return {
      model: {
        username: '',
        password: ''
      },
      schema: {
        fields: [
          {
            type: 'input',
            modelKey: 'username',
            label: '用户名',
            props: {
              placeholder: '输入用户名'
            },
            rules: {
              required: true,
              type: 'string',
              max: 10,
              min: 2
            },
            trigger: 'blur',
            messages: {
              required: '用户名不能为空',
              min: '用户名不能少于3个字符',
              max: '用户名不能超过15个字符'
            }
          },
          {
            type: 'input',
            modelKey: 'password',
            label: '密码',
            value: '',
            props: {
              type: 'password',
              placeholder: '输入登录密码',
              eye: {
                open: false
              }
            },
            rules: {
              required: true
            }
          },
          {
            type: 'submit',
            label: '登录'
          }
        ]
      }
    }
  },
  methods: {
    async submitHandler(e) {
      e.preventDefault()
      const result = await this.$http.get('/api/login', { params: this.model })
      console.log(result)
      if (result.code == 1) {
        //登录成功跳转到首页
        this.$router.push({
          path: '/botnav/index'
        })
        //设置路由守卫
        this.$store.commit('setToken', result.token)
        window.localStorage.setItem('token', result.token)
      } else if (result.code == 0) {
        alert('用户名或密码错误请重新输入')
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
#logo {
  width: 100%;
  height: 5%;
}
</style>

