<template>
  <div>
    <div class="header-title">
      <span><router-link to="/"><button style="font-size: 30px">返回首页</button></router-link></span>
      <div class="header-title-text">票务查询</div>
    </div>

    <div class="header-time bottom-border container-fluid" style="font-size: 60px">
        <div >
          <input type="date" style="font-size: 40px" v-model="time.start">
          <span class="span">至</span>
        </div>
        <div class="col-lg-5">
          <input type="date" style="font-size: 40px" v-model="time.end">
        </div>
        <div class="col-lg-2">
          <button type="button" class="button" v-on:click="queryTicket">确认</button>
        </div>
    </div>

    <div class="content bottom-border clear-float" v-for="item in responseResult">
      <div class="middle-content">
        <p class="p">编号：{{item.id}}  |  购买者手机号码：{{item.phone}} |  购买时间：{{item.time | formatDate}}</p>
      </div>
    </div>
  </div>
</template>


<script>
  import qs from 'qs'
  import {formatDate} from '@/common/date'

  export default {
    name: 'queryTicket',
    data(){
      return{
        responseResult: [],
        time:{
          start:'',
          end:''
        },
    test:'22'
      }
    },
    methods: {

      queryTicket () {
        this.test = new Date(this.time.start)
        this.$axios.get('/api/queryticket', {params: {
            start:this.time.start.toString(),
            end:this.time.end.toString()
          }
        }).then(response => {
          this.responseResult = response.data
          for (let i in response.data.length) {
            this.responseResult.push(response.data[i])
          }
        }).catch(fail => {
          this.responseResult = '请求失败'
        })
      }
    },
    filters: {
      formatDate(time){
        let date = new Date(time)
        return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>

  .button{
    margin-left: 20px;
    font-size: 40px;
    color: blue;
  }

  .span{
    font-size: 30px;
    margin-left: 20px;
    margin-right: 30px
  }

  .p{
    font-size: 40px;
    top: 20px;
    bottom: 20px;
  }


  *{
    margin: 0;
    padding: 0;
  }

  /* 公共样式 */
  .bottom-border{
    border:1px solid #000;
  }

  /* 清理浮动 */
  .clear-float::after{
    content: "";
    display:block;
    clear: both;
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

  .header-time{
    display: flex;
    justify-content: center;
    padding-top:15px;
    background: #eee;
  }

  .form-group-text > span{
    font-size: 20px;
    display: block;
    margin-left: 20px;
  }
</style>
