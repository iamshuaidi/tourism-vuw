<template>
  <div>
    <p>投诉流水号:{{complaint.number}}</p>
    <p>姓名:{{complaint.name}}</p>
    <p>手机号:{{complaint.phone}}</p>
    <p>性别:{{complaint.gender}}</p>
    <p>投诉内容:{{complaint.content}}</p>
    <p>投诉时间:{{complaint.createTime | formatDate}}</p>
    <p>投诉结果:{{complaint.result | isNull}}</p>
    <p>处理时间:{{complaint.dealTime | deal}}</p>
  </div>
</template>
<script>
import {formatDate} from '../common/date.js'
import axios from 'axios'
export default {
  filters: {
    formatDate (time) {
      var date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    },
    isNull (result) {
      return result == null ? '未处理' : result
    },
    deal (dealTime) {
      return dealTime == null ? '暂无' : formatDate(new Date(dealTime), 'yyyy-MM-dd hh:mm:ss')
    }
  },
  created () {
    this.getData()
  },
  data () {
    return {
      complaint: {}
    }
  },
  methods: {
    getData () {
      // 接收到a.vue页面传递的id
      let id = this.$route.params.id
      axios.get('api/showComplaint', {
        params: {
          id
        }
      }).then((response) => {
        this.complaint = response.data
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
