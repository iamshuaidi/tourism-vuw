<template>

  <div>
    <div class="header-title">
      <span><router-link to="/"><button style="font-size: 30px">返回首页</button></router-link></span>
      <div class="header-title-text">管理员登录</div>
    </div>
    <div>
      <hr/>
      <div>
        <p style="font-size: 20px;color: deepskyblue;">{{message}}</p>
        <p class="input">手机号码：<input class="input" type="text" v-model="loginInfo.phone" placeholder="请输入用户名" /></p>
        <p class="input">登录密码：<input class="input" type="password" v-model="loginInfo.password" placeholder="请输入密码" /></p>
        <button style="font-size: 40px;margin-left: 7%" v-on:click="login">登录</button>
      </div>
      <hr/>
    </div>
    <div>

    </div>
  </div>

</template>

<script>
import qs from 'qs'

export default {
  name: 'login',
  data () {
    return {
      responseResult: [],
      loginInfo: {
        phone: '',
        password: ''
      },
      message: '',
      date: '',
      admin: [],
      name: ''
    }
  },

  methods: {
    login () {
      let entity = {
        phone: this.loginInfo.phone,
        password: this.loginInfo.password
      }

      this.$axios.post('/api/login', qs.stringify(entity)).then(response => {
        this.responseResult = response.data
        this.message = response.data.message
        if (this.message === 'OK') {
          for (let i in response.data.length) {
            this.responseResult.push(response.data[i])
          }
          /* this.$router.push({ path: '/admin', query: {admin: this.responseResult.admin} }) */
          // this.$router.push({name:'/home',params:{admin:response.data}})
          this.$router.push('/admin')
          localStorage.setItem('admin', JSON.stringify(this.responseResult.admin))
        }
      }).catch(failed => {
        this.responseResult = '请求失败'
      })
    }
  }

}
</script>

<style scoped>
  <!--  -->
  *{
    margin: 0;
    padding: 0;
  }

  .header-title{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    font-size: 40px;
    color: #fff;
    background: rgb(226, 123, 82);
    text-align: right;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .header-title span{
    padding-left: 20px;
  }

  .header-title-text{
    padding-right: 40px;
  }

  .header-sort ul li{
    float: left;
    width: 15%;
    font-size: 30px;
    list-style-type: none;
    padding: 20px;
  }

  .middle-content > p,.right-content > p{
    margin-top: 10px;
  }

  .input{
    font-size: 40px;
  }

</style>
