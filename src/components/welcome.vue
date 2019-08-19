<template xmlns:width="http://www.w3.org/1999/xhtml">
  <div class="middle" :style="backgroundDiv">
    <div id="timu" style="font-size: 48px">
      <b>旅游管理服务平台</b>
    </div>
    <div class="cbutton">
      <p><button class="btComplaint" @click="complaint" style="font-size:36px">我要投诉</button></p>
      <p><button class="btAlarm" @click="alarm" style="font-size:36px" >紧急报案</button></p>
      <p><button class="btLogin" @click="login" style="font-size:36px">管理员登录</button></p>
    </div>

    <div id="jiudian">
    <d3>
    <img src="../assets/hotellogo.png" height="150" width="200">
      <button class="btHotel" @click="hotel" style="font-size:28px">酒店空房查询</button>
    </d3>
  </div>
    <div id="chewei">
    <d4>
      <img src="../assets/parklogo.png" height="140" width="180">
      <button class="btPark" @click="park" style="font-size:28px">停车场空车位查询</button>
    </d4>
    </div>
   <!-- <d5>
      <p>
        <label class="lbWarn" for="warning">预警信息</label>
      </p>
      <textarea id="warning" style="resize:none" rows="12" cols="50" maxlength="20000" placeholder="" v-model="desc" />
    </d5>-->
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
    top: 100px;
    right: 100px;
    position: absolute;
    margin-top: 30px;
    background-color: #d6e9c6;
  }
  .btLogin{
    top: 200px;
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
    width: 200px;
  }
  d4{
    bottom: 250px;
    left: 600px;
    width: 200px;
    height: 30px;
    position: absolute;
  }
  .btPark{
    margin-top: 15px;
    margin-left: 0px;
    background-color: #f2dede;
    width: 250px;
  }
  d5{
    bottom: 150px;
    width: 200px;
    height: 200px;
    position: absolute;
    right: 350px;
  }
  .lbWarn{
    color: #cc0000;
  }
  #timu {
    position: absolute;
    left: 600px;
    top: 100px;
  }
  #jiudian {
    position: absolute;
    left: 200px;
    top: 500px;
  }

  #chewei {
    position: absolute;
    left: 300px;
    top: 500px;
  }
</style>
