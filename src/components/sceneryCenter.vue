<template xmlns:width="http://www.w3.org/1999/xhtml">
  <div class="middle" :style="backgroundDiv">
    <h1 class="h1">
      旅游管理服务平台
    </h1>
    <d4>
      <img src="../assets/hotellogo.png" height="200px" width="240px">
      <router-link to="/queryTicket"><button class="btTicket">景区票务查询</button></router-link>
    </d4>
  </div>
</template>

<script>
  export default {
    name: 'sceneryCenter',
    data () {
      return {
        backgroundDiv: {
          backgroundImage: 'url(' + require('../assets/background.png') + ')'
        }
      }
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
  .h1{
    top:150px;
    align: center;
    color: #990055;
    font-size: 100px;
  }
  d2{
    top: 20px;
    right: 100px;
    position: absolute;
    margin-top: 30px;
  }
  d3{
    bottom: 250px;
    left: 400px;
    width: 30px;
    height: 30px;
    position: absolute;
  }
  d4{
    bottom: 60%;
    left:45%;
    width: 30px;
    height: 30px;
    position: absolute;
  }
  .btTicket{
    margin-top: 15px;
    margin-left: 0px;
    font-size: 30px;
    width:200px;
    background-color: #f2dede;
  }
  d5{
    bottom: 150px;
    width: 100px;
    height: 200px;
    position: absolute;
    right: 350px;
  }
</style>
