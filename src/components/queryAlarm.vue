<template xmlns:c="http://java.sun.com/jsp/jstl/core">
  <div>
    <p>
      <label for="iphone">手机号:</label>
      <input id="iphone" type="number" v-model="phone" align="left" required="required" oninput="if(value.length>11)value=value.slice(0,11)"/>
      <!--  <label for="icode">     验证码:</label>
        <input id="icode" type="text" v-model="code">
        <button @click="send_code" class="verify_code">发送验证码</button>-->
    </p>
    <d2>
      <button class="btquery" @click="query">报案查询</button>
    </d2>
    <!--跳转到指定页面根据这个图片的id-->
    <ul class="comul" v-for="item in alarmList" :key="item">
      <div class="alarmItem">
        <p>报案流水号:{{item.number}}</p>
        <p>姓名:{{item.name}}   </p>      <div class="time">报案时间:{{item.createTime | formatDate}}</div>
        <p>状态:{{item.result | isNull}} </p>    <div class="show"><router-link :to="'/showAlarm/' + item.id">查看详情</router-link></div>
      </div>
    </ul>
    <div class="nullShow">
      <div v-if="phone != null">
        <div v-if="alarmList.length==0">
          该手机号未提交报案
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {formatDate} from '../common/date.js'

export default {
  filters: {
    formatDate (time) {
      var date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    },
    isNull (result) {
      return result == null ? '未处理' : '已处理'
    }
  },
  data () {
    return {
      alarmList: []
    }
  },
  methods: {
    query () {
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!myreg.test(this.phone)) {
        alert('请输入正确的手机号码格式')
        return false
      }
      axios.get('api/queryAlarm', {
        params: {
          phone: this.phone
        }
        // 箭头函数
      }).then((response) => {
        this.alarmList = response.data
        // 正确的赋值操作 push 真正赋值实现视图更新
        for (let i in response.data.length) {
          this.alarmList.push(response.data[i])
        }
        // Vue.set(this.complaintList, response.data)
        // alert(this.complaintList[0].name)
        console.log(1)
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
    }
    /* send_code () {
     } */
  }
}
</script>

<style>
  d2{
    position: absolute;
    left:300px;
    top:15px;
    height:50px;
  }
  .btquery{
    background-color:#1c6ca1;
  }
  alarmItem{
    float: left;
    width:1000px;
    margin-top:20px;
    margin-left:20px;
    margin-right:800px;
    left:50px;
  }
  time{
    margin-left:50px;
  }
  show{
    margin-left:300px;
  }
  nullShow{
    top: 100px;
    position: absolute
  }
</style>
