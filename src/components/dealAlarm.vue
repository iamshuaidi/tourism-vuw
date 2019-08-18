<template xmlns:c="http://java.sun.com/jsp/jstl/core">
  <div>
    <div>
      <input type="date" style="font-size: 20px" v-model="start">
      <span class="span">    至</span>
      <input type="date" style="font-size: 20px" v-model="end">
    </div>
    <d2>
      <button class="btquery" @click="query">查询</button>
    </d2>
    <!--跳转到指定页面根据这个图片的id-->
    <ul class="comul" v-for="item in alarmList">
      <d3>
        <p>紧急报案流水号:{{item.number}}</p>
        <p>姓名:{{item.name}}         <d4>报案时间:{{item.createTime | formatDate}}</d4></p>
        <p>状态:{{item.result | isNull}}     <d5><router-link :to="'/replyAlarm/' + item.id">处理报案</router-link></d5></p>
      </d3>
    </ul>
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
      axios.get('api/dealAlarm', {
        params: {
          start: this.start.toString(),
          end: this.end.toString()
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
  }
}
</script>

<style>
  d2{
    position: absolute;
    left:500px;
    top:10px;
    height:20px;
  }
  .btquery{
    background-color:#1c6ca1;
  }
  d3{
    float: left;
    width:1000px;
    margin-top:20px;
    margin-left:20px;
    margin-right:800px;
  }
  d4{
    margin-left:50px;
  }
  d5{
    margin-left:300px;
  }
</style>
