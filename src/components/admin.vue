<template>
<div>
  <div class="header-title">
    <span><router-link to="/"><button style="font-size: 30px">返回首页</button></router-link></span>
    <div class="header-title-text">管理员个人中心</div>
  </div>

  <div>
    <h1>欢迎 ~ 管理员:{{admin.name}}</h1>
    <d2>
      <p><button class="btComplaint" @click="complaint">投诉处理中心</button></p>
      <p><button class="btAlarm" @click="alarm">紧急报案中心</button></p>
      <p><button class="btScenery" @click="scenery">票务中心</button></p>
    </d2>
  </div>
</div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      admin: {}
    }
  },
  mounted () {
    this.admin = this.$route.query.admin
  },
  methods: {
    complaint () {
      this.$router.push({path: '/dealComplaint', query: {admin: this.admin}})
    },
    alarm () {
      this.$router.push({path: '/dealAlarm', query: {admin: this.admin}})
    },
    scenery () {
      this.$router.push({path: '/sceneryCenter', query: {admin: this.admin}})
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

  d2{
    top: 70px;
    right: 100px;
    position: absolute;
    margin-top: 30px;
  }
  .btComplaint{
    background-color: #d6e9c6;
  }
  .btAlarm{
    background-color: #d6e9c6;
  }
  .btScenery{
    background-color: #d6e9c6;
  }

</style>
