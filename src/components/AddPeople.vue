<template>
  <div id="base" class="">

    <!-- Unnamed (矩形) -->
    <div id="u868" class="ax_default _文本段落">
      <div id="u868_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u869" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 确认添加按钮 (矩形) -->
    <Button id="u870" class="ax_default primary_button" data-label="确认添加按钮" @click="Jump2">
      确认添加
    </Button>

    <!-- Unnamed (矩形) -->
    <div id="u872" class="ax_default box_1">
      <div id="u872_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u873" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 添加应急人员 (矩形) -->
    <div id="u874" class="ax_default label" data-label="添加应急人员">
      <div id="u874_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u875" class="text" style="visibility: visible;">
        <p><span>添加应急人员</span></p>
      </div>
    </div>

    <!-- 关闭 (图片) -->
    <div id="u876" class="ax_default image" data-label="关闭" @click="Jump1">
      <img id="u876_img" class="img " src="../images/投诉协议/u81.png" @click="Jump1"/>
      <!-- Unnamed () -->
      <div id="u877" class="text" style="display: none; visibility: hidden" @click="Jump1">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (水平线) -->
    <div id="u878" class="ax_default line">
      <img id="u878_img" class="img " src="../images/添加人员/u878.png"/>
      <!-- Unnamed () -->
      <div id="u879" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 职业 (矩形) -->
    <div id="u880" class="ax_default label" data-label="职业">
      <div id="u880_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u881" class="text" style="visibility: visible;">
        <p><span>职业：</span></p>
      </div>
    </div>

    <!-- 姓名 (矩形) -->
    <div id="u882" class="ax_default label" data-label="姓名">
      <div id="u882_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u883" class="text" style="visibility: visible;">
        <p><span>姓名：</span></p>
      </div>
    </div>

    <!-- 性别 (矩形) -->
    <div id="u884" class="ax_default label" data-label="性别">
      <div id="u884_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u885" class="text" style="visibility: visible;">
        <p><span>性别：</span></p>
      </div>
    </div>

    <!-- 联系电话 (矩形) -->
    <div id="u886" class="ax_default label" data-label="联系电话">
      <div id="u886_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u887" class="text" style="visibility: visible;">
        <p><span>联系电话：</span></p>
      </div>
    </div>

    <!-- 职业下拉框 (下拉列表框) -->
    <div id="u888" class="ax_default droplist" data-label="职业下拉框">
      <select id="u888_input">
        <option value="警察">警察</option>
        <option value="消防员">消防员</option>
        <option selected value="景区人员">景区人员</option>
      </select>
    </div>
<!--    <div id="u888" class="ax_default text_field" data-label="职业下拉框">-->
<!--      <input id="u888_input" type="text" value=""/>-->
<!--    </div>-->
    <!-- 性别下拉框 (下拉列表框) -->
    <div id="u889" class="ax_default droplist" data-label="性别下拉框">
      <select id="u889_input">
        <option selected value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>

    <!-- 姓名框 (文本框) -->
    <div id="u890" class="ax_default text_field" data-label="姓名框">
      <input id="u890_input" type="text" value=""/>
    </div>

    <!-- 联系电话框 (文本框) -->
    <div id="u891" class="ax_default text_field" data-label="联系电话框">
      <input id="u891_input" type="text" value=""/>
    </div>

  </div>
</template>
<script>
import qs from 'qs'
export default {
  methods: {
    Jump1 () {
      this.$router.push({
        name: 'PersonnelManagement'
      })
    },
    Jump2 () {
      var value1 = document.getElementById('u888_input').value
      var value2 = document.getElementById('u890_input').value
      var value3 = document.getElementById('u889_input').value
      var value4 = document.getElementById('u891_input').value
      let entity = {
        'job' : value1,
        'name' : value2,
        'gender' : value3,
        'phone': value4
      }
      this.$axios.post('/api/addPerson', qs.stringify(entity)).then(res => {
        console.log(res)
        if (res.data.message === '更新考试日期成功') {
          this.$Message.success('添加成功!')
          this.$router.push({
            name: 'PersonnelManagement'
          })
        }
      }).catch(res => {
        this.$Message.error('添加失败')
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
  #u868_div {
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
  #u868 {
    position:absolute;
    left:450px;
    top:157px;
    width:500px;
    height:554px;
  }
  #u869 {
    position:absolute;
    left:0px;
    top:0px;
    width:500px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u870_div {
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
  #u870 {
    position:absolute;
    left:603px;
    top:634px;
    width:196px;
    height:48px;
    background-color:rgba(255, 153, 51, 1);
  }
  #u871 {
    position:absolute;
    left:2px;
    top:16px;
    width:192px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u872_div {
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
  #u872 {
    position:absolute;
    left:450px;
    top:93px;
    width:500px;
    height:64px;
  }
  #u873 {
    position:absolute;
    left:2px;
    top:24px;
    width:496px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u874_div {
    position:absolute;
    left:0px;
    top:0px;
    width:169px;
    height:33px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
    color:#F2F2F2;
  }
  #u874 {
    position:absolute;
    left:608px;
    top:111px;
    width:169px;
    height:33px;
    font-size:28px;
    color:#F2F2F2;
  }
  #u875 {
    position:absolute;
    left:0px;
    top:0px;
    width:169px;
    white-space:nowrap;
  }
  #u876_img {
    position:absolute;
    left:0px;
    top:0px;
    width:24px;
    height:24px;
  }
  #u876 {
    position:absolute;
    left:883px;
    top:114px;
    width:24px;
    height:24px;
  }
  #u877 {
    position:absolute;
    left:2px;
    top:4px;
    width:20px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u878_img {
    position:absolute;
    left:-1px;
    top:-1px;
    width:503px;
    height:5px;
  }
  #u878 {
    position:absolute;
    left:450px;
    top:606px;
    width:500px;
    height:2px;
  }
  #u879 {
    position:absolute;
    left:2px;
    top:-7px;
    width:496px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u880_div {
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
  #u880 {
    position:absolute;
    left:507px;
    top:223px;
    width:85px;
    height:33px;
    font-size:28px;
  }
  #u881 {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    white-space:nowrap;
  }
  #u882_div {
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
  #u882 {
    position:absolute;
    left:509px;
    top:296px;
    width:85px;
    height:33px;
    font-size:28px;
  }
  #u883 {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    white-space:nowrap;
  }
  #u884_div {
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
  #u884 {
    position:absolute;
    left:511px;
    top:359px;
    width:85px;
    height:33px;
    font-size:28px;
  }
  #u885 {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    white-space:nowrap;
  }
  #u886_div {
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
  #u886 {
    position:absolute;
    left:457px;
    top:421px;
    width:141px;
    height:33px;
    font-size:28px;
  }
  #u887 {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    white-space:nowrap;
  }
  #u888 {
    position:absolute;
    left:589px;
    top:220px;
    width:296px;
    height:29px;
  }
  #u888_input {
    position:absolute;
    left:0px;
    top:0px;
    width:296px;
    height:29px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#000000;
  }
  #u888_input:disabled {
    color:grayText;
  }
  #u889 {
    position:absolute;
    left:594px;
    top:359px;
    width:294px;
    height:29px;
  }
  #u889_input {
    position:absolute;
    left:0px;
    top:0px;
    width:294px;
    height:29px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#000000;
  }
  #u889_input:disabled {
    color:grayText;
  }
  #u890 {
    position:absolute;
    left:593px;
    top:296px;
    width:295px;
    height:29px;
  }
  #u890_input {
    position:absolute;
    left:0px;
    top:0px;
    width:295px;
    height:29px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u891 {
    position:absolute;
    left:597px;
    top:421px;
    width:291px;
    height:29px;
  }
  #u891_input {
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
  #u892_div {
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
  #u892 {
    position:absolute;
    left:647px;
    top:644px;
    width:113px;
    height:33px;
    font-size:28px;
  }
  #u893 {
    position:absolute;
    left:0px;
    top:0px;
    width:113px;
    white-space:nowrap;
  }



</style>
