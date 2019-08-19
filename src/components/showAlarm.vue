<template>
  <div>
    <p>报案流水号:{{alarm.number}}</p>
    <p>姓名:{{alarm.name}}</p>
    <p>手机号:{{alarm.phone}}</p>
    <p>性别:{{alarm.gender}}</p>
    <p>紧急报案内容:{{alarm.content}}</p>
    <p>报案时间:{{alarm.createTime | formatDate}}</p>
    <p>报案结果:{{alarm.result | isNull}}</p>
    <p>处理时间:{{alarm.dealTime | deal}}</p>
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
      alarm: {}
    }
  },
  methods: {
    getData () {
      // 接收到a.vue页面传递的id
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
    }
  }
}
</script>
