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
    <!--用v-if 处理是否展示投诉处理输入框-->
    <form @submit.prevent="submit">
    <div v-if="complaint.result==null">
      <p>
        <label for="editor">投诉处理:</label>
      </p>
      <textarea id="editor" style="resize:none" rows="12" cols="100" placeholder="请输入处理结果" maxlength="500" required="required" @input = "descInput" v-model="desc" />
      <span>{{remnant}}/500</span>
      <div class="csubmit">
        <input class="btsubmit" type="submit" value="提交">
      </div>
    </div>
    </form>
  </div>
</template>
<script>
import {formatDate} from '../common/date.js'
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'replyComplaint',
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
      complaint: {},
      admin: {},
      aid: {}
    }
  },
  mounted () {
    this.admin = JSON.parse(localStorage.getItem('admin'))
  },
  methods: {
    descInput () {
      var txtVal = this.desc.length
      this.remnant = 500 - txtVal
    },
    getData () {
      // 接收到a.vue页面传递的id,都是根据id调用，因此调用相同的showComplaint方法
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
    },
    submit () {
      if (!this.desc) {
        return false
      }
      let entity = {
        'result': this.desc,
        'cid': this.complaint.id, // 传id
        'aid': this.admin.id
      }
      axios.post('api/replyComplaint', qs.stringify(entity))
        .then(function (response) {
          console.log(1)
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      this.$router.push('/dealComplaint')
    }
  }
}
</script>

<style>
  csubmit{
    bottom: 10px;
    right: 580px;
    position: absolute;
  }
  .btsubmit{
    background-color: #669900;
  }
</style>
