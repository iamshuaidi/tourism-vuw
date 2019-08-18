<template>
<div>
  <div class="header-title">
    <span><router-link to="/"><button style="font-size: 30px">返回首页</button></router-link></span>
    <div class="header-title-text">管理员个人中心</div>
  </div>

  <div>
    <h1>欢迎 ~ 管理员:{{admin.name}}</h1>
  </div>
</div>
</template>

<script>
  export default {
    name: 'home',
    data(){
      return{
        admin:''
      }
    },
    mounted () {
        this.admin = this.$route.query.admin
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


</style>
