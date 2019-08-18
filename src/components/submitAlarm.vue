<template xmlns:vertical-align="http://www.w3.org/1999/xhtml" xmlns:display="http://www.w3.org/1999/xhtml"
          xmlns:margin-top="http://www.w3.org/1999/xhtml" xmlns:color="http://www.w3.org/1999/xhtml"
          xmlns:resize="http://www.w3.org/1999/xhtml" xmlns:cols="http://www.w3.org/1999/xhtml"
          xmlns:row="http://www.w3.org/1999/xhtml">
  <div>
    <d2>
      <button class="btquery"  @click="query">报案查询</button>
    </d2>
    <form @submit.prevent="submit" ref="myform" :model="form">
      <fieldset>
        <p>
          <label for="name" prop="name">姓名:</label>
          <input id="name" type="text" v-model="name" align="left" maxlength="20" required="required">
        </p>
        <p>
          <label for="gender" prop="gender">性别:</label>
          <input id="gender" type="radio" name="gender" v-model="gender" value="男" required="required">男
          <input type="radio" name="gender" v-model="gender" value="女" align="left" required="required">女
        </p>
        <p>
          <label for="phone" prop="phone">手机号:</label>
          <input id="phone" type="number" v-model="phone" align="left" length="11" required="required" oninput="if(value.length>11)value=value.slice(0,11)"/>
        </p>
        <!--<p>
          <label for="code" prop="phone">验证码:</label>
          <input id="code" type="text" name="verify" />
          <button @click="send_code" class="verify_code">发送验证码</button>
        </p>-->
        <p>
          <label for="editor" prop="desc">紧急报案事由:</label>
        </p>
        <textarea id="editor" style="resize:none" rows="12" cols="100" placeholder="请输入" maxlength="500" @input = "descInput" v-model="desc" required="required" />
        <span>{{remnant}}/500</span>
        <!--<p>
           <tinymce-editor id="editor" v-model="msg" :disabled="disabled"
                          @onClick="onClick" ref="editor" align="left"></tinymce-editor>
          <button @click="clear">清空内容</button>
           <button @click="disabled = true">禁用</button>
        </p>-->
      </fieldset>
      <d3>
        <input type="submit" class="btsubmit" value="提交"/>
      </d3>
    </form>
  </div>

</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  data () {
    return {
      remnant: 500,
      desc: '',
      name: '',
      gender: '',
      phone: ''
      /*  disabled: false */
    }
  },
  methods: {
    descInput () {
      var txtVal = this.desc.length
      this.remnant = 500 - txtVal
    },
    submit () {
      if (!this.desc) {
        return false
      }

      if (!this.name) {
        return false
      }
      var myreg = /^[1][3,4,5,7,8][0-9]{9}$/
      if (!myreg.test(this.phone)) {
        alert('请输入正确的手机号码格式')
        return false
      }
      if (!this.gender) {
        return false
      }
      let entity = {
        'content': this.desc,
        'name': this.name,
        'gender': this.gender,
        'phone': this.phone
      }
      axios.post('api/doAlarm', qs.stringify(entity))
        .then(function (response) {
          /* this.$refs['myform'].resetFields() */
          /*  this.form = {brand_right: 0} */
          console.log(1)
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      this.$router.push('/')
    },
    query () {
      this.$router.push('/queryAlarm')
    }
    /*  send_code () {
        } */
  }
}
</script>

<style>
  fieldset {
    border: none;
    border-radius: 2px;
    margin-bottom: 12px;
    overflow: hidden;
    display:flex;
    padding: 0 .625em;
  }
  d3{
    position:absolute;
    left:670px;
    margin-bottom:20px;
  }
  .btsubmit{
    background-color:#669900;
  }
  d2{
    position:absolute;
    right:300px;
    top:20px;
  }
  .btquery{
    background-color:#e74c3c;
  }
  /* label {
     cursor: pointer;
     display: inline-block;
     padding: 3px 6px;
     text-align: right;
     width: 150px;
     vertical-align: top;
   } */
</style>
