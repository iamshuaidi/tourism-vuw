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
    <ul class="comul" v-for="item in complaintList" :key="item">
      <div class="complaintItem">
        <p>投诉流水号:{{item.number}}</p>
        <p>姓名:{{item.name}}  </p>       <div class="time">投诉时间:{{item.createTime | formatDate}}</div>
        <p>状态:{{item.result | isNull}}  </p>  <div class="deal"><router-link :to="'/replyComplaint/' + item.id">处理投诉</router-link></div>
      </div>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import {formatDate} from '../common/date.js'

export default {
  name: 'dealComplaint',
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
      complaintList: [],
      admin: {}
    }
  },
  mounted () {
    this.admin = JSON.parse(localStorage.getItem('admin'))
  },
  methods: {
    query () {
      axios.get('api/dealComplaint', {
        params: {
          start: this.start.toString(),
          end: this.end.toString()
        }
        // 箭头函数
      }).then((response) => {
        this.complaintList = response.data
        // 正确的赋值操作 push 真正赋值实现视图更新
        for (let i in response.data.length) {
          this.complaintList.push(response.data[i])
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
  complaintItem{
    float: left;
    width:1000px;
    margin-top:20px;
    margin-left:20px;
    margin-right:800px;
  }
  time{
    margin-left:50px;
  }
  deal{
    margin-left:300px;
  }
</style>
