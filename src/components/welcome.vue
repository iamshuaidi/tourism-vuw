<template xmlns:width="http://www.w3.org/1999/xhtml">
  <div class="middle" :style="backgroundDiv">
    <h1>
      旅游管理服务平台
    </h1>
    <div class="cbutton">
      <p><button class="btComplaint" @click="complaint">我要投诉</button></p>
      <p><button class="btAlarm" @click="alarm">紧急报案</button></p>
      <p><button class="btLogin" @click="login">管理员登录</button></p>
    </div>
    <d3>
    <img src="../assets/hotellogo.png" height="100" width="120">
      <button class="btHotel" @click="hotel">酒店空房查询</button>
    </d3>
    <d4>
      <img src="../assets/parklogo.png" height="90" width="90">
      <button class="btPark" @click="park">停车场空车位查询</button>
    </d4>
    <d5>
      <p>
        <label class="lbWarn" for="warning">预警信息</label>
      </p>
      <textarea id="warning" style="resize:none" rows="12" cols="50" maxlength="20000" placeholder="" v-model="desc" />
    </d5>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/background.png') + ')'
      }
    }
  },
  methods: {
    complaint () {
      this.$router.push('/submitComplaint')
    },
    alarm () {
      this.$router.push('/submitAlarm')
    },
    login () {
      this.$router.push('/login')
    },
    hotel () {
      this.$router.push('/queryHotel')
    },
    park () {
      this.$router.push('/queryPark')
    },
    getData () {
      // 接收到a.vue页面传递的id,都是根据id调用，因此调用相同的showAlarm方法
      let id = this.$route.params.id
      axios.get('api/showAlarm', {
        params: {
          id
        }
      }).then((response) => {
        this.alarm = response.data
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    },
  }
}
</script>

<style scoped>
  .middle {
    height: 100%;
    width: 100%;
    position: fixed;
    background: no-repeat;
    background-size: cover;
  }
  h1{
    top:150px;
    left: 500px;
    width: 300px;
    color: #990055;
    position: absolute;
  }
  cbutton{
    top: 20px;
    right: 100px;
    position: absolute;
    margin-top: 30px;
  }
  .btComplaint{
    top: 0px;
    right: 100px;
    position: absolute;
    margin-top: 30px;
    background-color: #d6e9c6;
  }
  .btAlarm{
    top: 40px;
    right: 100px;
    position: absolute;
    margin-top: 30px;
    background-color: #d6e9c6;
  }
  .btLogin{
    top: 80px;
    right: 100px;
    position: absolute;
    margin-top: 30px;
    background-color: #d6e9c6;
  }
  d3{
    bottom: 250px;
    left: 400px;
    width: 30px;
    height: 30px;
    position: absolute;
  }
  .btHotel{
    margin-top:5px;
    background-color: #f2dede;
    width: 100px;
  }
  d4{
    bottom: 250px;
    left: 600px;
    width: 30px;
    height: 30px;
    position: absolute;
  }
  .btPark{
    margin-top: 15px;
    margin-left: 0px;
    background-color: #f2dede;
    width: 130px;
  }
  d5{
    bottom: 150px;
    width: 100px;
    height: 200px;
    position: absolute;
    right: 350px;
  }
  .lbWarn{
    color: #cc0000;
  }
</style>
