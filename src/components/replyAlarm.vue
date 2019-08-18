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
    <!--用v-if 处理是否展示投诉处理输入框-->
    <form @submit.prevent="submit">
      <div v-if="alarm.result==null">
        <p>
          <label for="editor">报案处理:</label>
        </p>
        <textarea id="editor" style="resize:none" rows="12" cols="100" placeholder="请输入处理结果" maxlength="500" required="required" @input = "descInput" v-model="desc" />
        <span>{{remnant}}/500</span>
        <d3>
          <input class="btsubmit" type="submit" value="提交">
        </d3>
      </div>
    </form>
  </div>
</template>
<script>
import {formatDate} from '../common/date.js'
import axios from 'axios'
import qs from 'qs'
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
  descInput () {
    var txtVal = this.desc.length
    this.remnant = 500 - txtVal
  },
  created () {
    this.getData()
  },
  data () {
    return {
      cid: '',
      remnant: 500,
      desc: '',
      alarm: {}
    }
  },
  mounted () {
    this.admin = this.$route.query.admin
  },
  methods: {
    descInput () {
      var txtVal = this.desc.length
      this.remnant = 500 - txtVal
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
    submit () {
      if (!this.desc) {
        return false
      }
      let entity = {
        'result': this.desc,
        'cid': this.alarm.id, // 传id
        'aid': this.admin.id
      }
      axios.post('api/replyAlarm', qs.stringify(entity))
        .then(function (response) {
          console.log(1)
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      this.$router.push('/dealAlarm')
    }
  }
}
</script>

<style>
  d3{
    bottom: 10px;
    right: 580px;
    position: absolute;
  }
  .btsubmit{
    background-color: #669900;
  }
</style>
