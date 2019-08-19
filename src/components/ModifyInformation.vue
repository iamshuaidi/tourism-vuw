<template>
  <div id="base" class="">

    <!-- Unnamed (矩形) -->
    <div id="u842" class="ax_default _文本段落">
      <div id="u842_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u843" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 确认修改按钮 (矩形) -->
    <Button id="u844" class="ax_default primary_button" data-label="确认修改按钮" @click='Jump3'>     确认修改
    </Button>

    <!-- Unnamed (矩形) -->
    <div id="u846" class="ax_default box_1">
      <div id="u846_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u847" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 修改信息 (矩形) -->
    <div id="u848" class="ax_default label" data-label="修改信息">
      <div id="u848_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u849" class="text" style="visibility: visible;">
        <p><span>修改信息</span></p>
      </div>
    </div>

    <!-- 关闭 (图片) -->
    <div id="u850" class="ax_default image" data-label="关闭" @click="Jump1()">
      <img id="u850_img" class="img " src="../images/投诉协议/u81.png" @click="Jump1()"/>
      <!-- Unnamed () -->
      <div id="u851" class="text" style="display: none; visibility: hidden" @click="Jump1()">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (水平线) -->
    <div id="u852" class="ax_default line">
      <img id="u852_img" class="img " src="../images/修改信息/u852.png"/>
      <!-- Unnamed () -->
      <div id="u853" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 职业 (矩形) -->
    <div id="u854" class="ax_default label" data-label="职业">
      <div id="u854_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u855" class="text" style="visibility: visible;">
        <p><span>职业：</span></p>
      </div>
    </div>

    <!-- 姓名 (矩形) -->
    <div id="u856" class="ax_default label" data-label="姓名">
      <div id="u856_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u857" class="text" style="visibility: visible;">
        <p><span>姓名：</span></p>
      </div>
    </div>

    <!-- 性别 (矩形) -->
    <div id="u858" class="ax_default label" data-label="性别">
      <div id="u858_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u859" class="text" style="visibility: visible;">
        <p><span>性别：</span></p>
      </div>
    </div>

    <!-- 联系电话 (矩形) -->
    <div id="u860" class="ax_default label" data-label="联系电话">
      <div id="u860_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u861" class="text" style="visibility: visible;">
        <p><span>联系电话：</span></p>
      </div>
    </div>

    <!-- 职业下拉框 (下拉列表框) -->
    <div id="u862" class="ax_default droplist" data-label="职业下拉框">
      <select id="u862_input">
        <option value="警察">警察</option>
        <option value="消防员">消防员</option>
        <option selected value="景区人员">景区人员</option>
      </select>
    </div>

    <!-- 性别下拉框 (下拉列表框) -->
    <div id="u863" class="ax_default droplist" data-label="性别下拉框">
      <select id="u863_input">
        <option selected value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>

    <!-- 姓名框 (文本框) -->
    <div id="u864" class="ax_default text_field" data-label="姓名框">
      <input id="u864_input" type="text" v-model="this.data1.name"></input>
    </div>

    <!-- 联系电话框 (文本框) -->
    <div id="u865" class="ax_default text_field" data-label="联系电话框">
      <input id="u865_input" type="text" value="" v-model="this.data1.phone"/>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
export default {
  data () {
    return {
      data1: []
    }
  },
  created () {
    this.getParams()
    /*
    document.getElementById('u862_input').innerHTML = " " + this.data1.job
    document.getElementById('u864_input').innerHTML = " " + this.data1.name
    document.getElementById('u863_input').innerHTML = " " + this.data1.gender
    document.getElementById('u865_input').innerHTML = " " + this.data1.phone
    */
  },
  watch: {
    '$route': 'getParams'
  },
  methods: {
    getParams () {
      this.data1 = this.$route.query.data1
      for(let i in this.$route.query.data1.length){
          this.data1.push(this.$route.query.data1[i])
      }
    },

    Jump1 () {
      this.$router.push({
        name: 'PersonnelManagement'
      })
    },
    Jump2 () {
      this.$router.push({
        name: 'PersonnelManagement'
      })
    },
    Jump3 () {
      var value1 = document.getElementById('u862_input').value
      var value2 = document.getElementById('u864_input').value
      var value3 = document.getElementById('u863_input').value
      var value4 = document.getElementById('u865_input').value
      console.log(value1)
      let entity = {
        'job' : value1,
        'name' : value2,
        'gender' : value3,
        'phone': value4
      }
      console.log(entity)
      this.$axios.post('/api/editPerson', qs.stringify(entity)).then(res => {
      }).then(res => {
        if (res.data.message === '') {
          this.$Message.success('修改成功!')
          this.$router.push({
            name: 'PersonnelManagement'
          })
        }
      })
    }
}
}
</script>
<style scoped>
  body {
    margin:0px;
    background-image:none;
    position:static;
    left:auto;
    width:950px;
    margin-left:0;
    margin-right:0;
    text-align:left;
  }
  #base {
    position:absolute;
    z-index:0;
  }
  #u842_div {
    position:absolute;
    left:0px;
    top:0px;
    width:500px;
    height:554px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    box-sizing:border-box;
    border-width:2px;
    border-style:solid;
    border-color:rgba(0, 0, 0, 1);
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  #u842 {
    position:absolute;
    left:450px;
    top:190px;
    width:500px;
    height:554px;
  }
  #u843 {
    position:absolute;
    left:0px;
    top:0px;
    width:500px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u844_div {
    position:absolute;
    left:0px;
    top:0px;
    width:196px;
    height:48px;
    background:inherit;
    background-color:rgba(255, 153, 51, 1);
    border:none;
    border-radius:5px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  #u844 {
    position:absolute;
    left:603px;
    top:667px;
    width:196px;
    height:48px;
  }
  #u845 {
    position:absolute;
    left:2px;
    top:16px;
    width:192px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u846_div {
    position:absolute;
    left:0px;
    top:0px;
    width:500px;
    height:64px;
    background:inherit;
    background-color:rgba(255, 153, 51, 1);
    box-sizing:border-box;
    border-width:1px;
    border-style:solid;
    border-color:rgba(121, 121, 121, 1);
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  #u846 {
    position:absolute;
    left:450px;
    top:126px;
    width:500px;
    height:64px;
  }
  #u847 {
    position:absolute;
    left:2px;
    top:24px;
    width:496px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u848_div {
    position:absolute;
    left:0px;
    top:0px;
    width:145px;
    height:42px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:36px;
    color:#F2F2F2;
  }
  #u848 {
    position:absolute;
    left:612px;
    top:141px;
    width:145px;
    height:42px;
    font-size:36px;
    color:#F2F2F2;
  }
  #u849 {
    position:absolute;
    left:0px;
    top:0px;
    width:145px;
    white-space:nowrap;
  }
  #u850_img {
    position:absolute;
    left:0px;
    top:0px;
    width:24px;
    height:24px;
  }
  #u850 {
    position:absolute;
    left:883px;
    top:147px;
    width:24px;
    height:24px;
  }
  #u851 {
    position:absolute;
    left:2px;
    top:4px;
    width:20px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u852_img {
    position:absolute;
    left:-1px;
    top:-1px;
    width:493px;
    height:5px;
  }
  #u852 {
    position:absolute;
    left:460px;
    top:639px;
    width:490px;
    height:2px;
  }
  #u853 {
    position:absolute;
    left:2px;
    top:-7px;
    width:486px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u854_div {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    height:33px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u854 {
    position:absolute;
    left:513px;
    top:254px;
    width:85px;
    height:33px;
    font-size:28px;
  }
  #u855 {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    white-space:nowrap;
  }
  #u856_div {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    height:33px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u856 {
    position:absolute;
    left:511px;
    top:329px;
    width:85px;
    height:33px;
    font-size:28px;
  }
  #u857 {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    white-space:nowrap;
  }
  #u858_div {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    height:33px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u858 {
    position:absolute;
    left:510px;
    top:392px;
    width:85px;
    height:33px;
    font-size:28px;
  }
  #u859 {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    white-space:nowrap;
  }
  #u860_div {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    height:33px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u860 {
    position:absolute;
    left:455px;
    top:454px;
    width:141px;
    height:33px;
    font-size:28px;
  }
  #u861 {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    white-space:nowrap;
  }
  #u862 {
    position:absolute;
    left:591px;
    top:256px;
    width:291px;
    height:29px;
  }
  #u862_input {
    position:absolute;
    left:0px;
    top:0px;
    width:291px;
    height:29px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#000000;
  }
  #u862_input:disabled {
    color:grayText;
  }
  #u863 {
    position:absolute;
    left:591px;
    top:396px;
    width:291px;
    height:29px;
  }
  #u863_input {
    position:absolute;
    left:0px;
    top:0px;
    width:291px;
    height:29px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#000000;
  }
  #u863_input:disabled {
    color:grayText;
  }
  #u864 {
    position:absolute;
    left:591px;
    top:331px;
    width:291px;
    height:29px;
  }
  #u864_input {
    position:absolute;
    left:0px;
    top:0px;
    width:291px;
    height:29px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u865 {
    position:absolute;
    left:591px;
    top:456px;
    width:291px;
    height:29px;
  }
  #u865_input {
    position:absolute;
    left:0px;
    top:0px;
    width:291px;
    height:29px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u866_div {
    position:absolute;
    left:0px;
    top:0px;
    width:113px;
    height:33px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u866 {
    position:absolute;
    left:647px;
    top:676px;
    width:113px;
    height:33px;
    font-size:28px;
  }
  #u867 {
    position:absolute;
    left:0px;
    top:0px;
    width:113px;
    white-space:nowrap;
  }

</style>
