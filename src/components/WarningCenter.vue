<template>
  <div id="base" class="">

    <!-- Unnamed (图片) -->
    <div id="u597" class="ax_default image">
      <img id="u597_img" class="img " src="../images/应急预警中心/u597.jpg"/>
      <!-- Unnamed () -->
      <div id="u598" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u599" class="ax_default box_1">
      <div id="u599_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u600" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u601" class="ax_default _一级标题">
      <div id="u601_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u602" class="text" style="visibility: visible;">
        <p><span>应急预警中心</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u603" class="ax_default box_1">
      <div id="u603_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u604" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (组合) -->
    <div id="u605" class="ax_default">

      <!-- Unnamed (矩形) -->
      <div id="u606" class="ax_default box_1">
        <div id="u606_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u607" class="text" style="display: none; visibility: hidden">
          <p><span></span></p>
        </div>
      </div>
    </div>

    <!-- 预警类型 (矩形) -->
    <div id="u608" class="ax_default label" data-label="预警类型">
      <div id="u608_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u609" class="text" style="visibility: visible;">
        <p><span>预警类型：</span></p>
      </div>
    </div>

    <!-- 预警标题 (矩形) -->
    <div id="u610" class="ax_default label" data-label="预警标题">
      <div id="u610_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u611" class="text" style="visibility: visible;">
        <p><span>预警标题：</span></p>
      </div>
    </div>

    <!-- 发布时间 (矩形) -->
    <div id="u612" class="ax_default label" data-label="发布时间">
      <div id="u612_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u613" class="text" style="visibility: visible;">
        <p><span>发布时间：</span></p>
      </div>
    </div>

    <!-- 预警内容 (矩形) -->
    <div id="u614" class="ax_default label" data-label="预警内容">
      <div id="u614_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u615" class="text" style="visibility: visible;">
        <p><span>预警内容：</span></p>
      </div>
    </div>

    <!-- 预警内容框 (文本框) -->
    <div id="u616" class="ax_default text_field" data-label="预警内容框">
      <input id="u616_input" type="text" value=""/>
    </div>

    <!-- 预警标题框 (文本框) -->
    <div id="u617" class="ax_default text_field" data-label="预警标题框">
      <input id="u617_input" type="text" value=""/>
    </div>

    <!-- 发布预警按钮 (矩形) -->
    <Button id="u618" class="ax_default primary_button" data-label="发布预警按钮" @click="Jump3">
      发布预警
    </Button>

    <!-- 返回 (图片) -->
    <div id="u620" class="ax_default image" data-label="返回" @click="Jump2">
      <img id="u620_img" class="img " src="../images/我要投诉/u63.png" @click="Jump2"/>
      <!-- Unnamed () -->
      <div id="u621" class="text" style="display: none; visibility: hidden" @click="Jump2">
        <p><span></span></p>
      </div>
    </div>

    <!-- 预警记录按钮 (矩形) -->
    <Button id="u622" class="ax_default primary_button" data-label="预警记录按钮" @click="Jump1">
      预警记录
    </Button>

    <!-- 预警类型下拉框 (下拉列表框) -->
    <div id="u624" class="ax_default droplist" data-label="预警类型下拉框">
      <select id="u624_input">
        <option value="极端天气">极端天气</option>
        <option selected value="景区火灾">景区火灾</option>
      </select>
    </div>
    <!--日期选择-->
    <div id="time1">
    <DatePicker type="date" placeholder="Select date" v-model="value4"></DatePicker>
    </div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      value4: ''
    }
  },
  methods: {
    Jump1 () {
      this.$router.push({
        name: 'WarningRecord'
      })
    },
    Jump2 () {
      this.$router.push({
        name: 'WebmasterCentral'
      })
    },
    Jump3 () {
      var value1 = document.getElementById('u624_input').value
      var value2 = document.getElementById('u617_input').value
      var value3 = document.getElementById('u616_input').value
      this.$axios.post(this.$host + '', {
        type: value1,
        title: value2,
        plan: value3,
        time: this.value4
      }).then(res => {
        console.log(res)
        if (res.data.message === '') {
          this.$router.push({
            name: '111111'
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
    width:1440px;
    margin-left:0;
    margin-right:0;
    text-align:left;
  }
  #base {
    position:absolute;
    z-index:0;
  }
  #u597_img {
    position:absolute;
    left:0px;
    top:0px;
    width:1440px;
    height:649px;
  }
  #u597 {
    position:absolute;
    left:0px;
    top:71px;
    width:1440px;
    height:649px;
    opacity:0.7;
  }
  #u598 {
    position:absolute;
    left:2px;
    top:316px;
    width:1436px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u599_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1439px;
    height:71px;
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
  #u599 {
    position:absolute;
    left:1px;
    top:0px;
    width:1439px;
    height:71px;
  }
  #u600 {
    position:absolute;
    left:2px;
    top:28px;
    width:1435px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u601_div {
    position:absolute;
    left:0px;
    top:0px;
    width:217px;
    height:55px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:36px;
    color:#FFFFFF;
  }
  #u601 {
    position:absolute;
    left:618px;
    top:16px;
    width:217px;
    height:55px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:36px;
    color:#FFFFFF;
  }
  #u602 {
    position:absolute;
    left:0px;
    top:0px;
    width:217px;
    white-space:nowrap;
  }
  #u603_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1061px;
    height:435px;
    background:inherit;
    background-color:rgba(255, 255, 255, 1);
    box-sizing:border-box;
    border-width:1px;
    border-style:solid;
    border-color:rgba(121, 121, 121, 1);
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  #u603 {
    position:absolute;
    left:192px;
    top:161px;
    width:1061px;
    height:435px;
  }
  #u604 {
    position:absolute;
    left:2px;
    top:210px;
    width:1057px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u605 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u606_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1061px;
    height:42px;
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
  #u606 {
    position:absolute;
    left:190px;
    top:119px;
    width:1061px;
    height:42px;
  }
  #u607 {
    position:absolute;
    left:2px;
    top:13px;
    width:1057px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u608_div {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    height:34px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u608 {
    position:absolute;
    left:341px;
    top:196px;
    width:141px;
    height:34px;
    font-size:28px;
  }
  #u609 {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    white-space:nowrap;
  }
  #u610_div {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    height:38px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u610 {
    position:absolute;
    left:341px;
    top:240px;
    width:141px;
    height:38px;
    font-size:28px;
  }
  #u611 {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    white-space:nowrap;
  }
  #u612_div {
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
  #u612 {
    position:absolute;
    left:341px;
    top:446px;
    width:141px;
    height:33px;
    font-size:28px;
  }
  #u613 {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    white-space:nowrap;
  }
  #u614_div {
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
  #u614 {
    position:absolute;
    left:341px;
    top:288px;
    width:141px;
    height:33px;
    font-size:28px;
  }
  #u615 {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    white-space:nowrap;
  }
  #u616 {
    position:absolute;
    left:513px;
    top:288px;
    width:552px;
    height:137px;
  }
  #u616_input {
    position:absolute;
    left:0px;
    top:0px;
    width:552px;
    height:137px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u617 {
    position:absolute;
    left:513px;
    top:241px;
    width:552px;
    height:34px;
  }
  #u617_input {
    position:absolute;
    left:0px;
    top:0px;
    width:552px;
    height:34px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u618_div {
    position:absolute;
    left:0px;
    top:0px;
    width:120px;
    height:40px;
    background:inherit;
    background-color:rgba(255, 153, 51, 1);
    border:none;
    border-radius:5px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  #u618 {
    position:absolute;
    left:671px;
    top:499px;
    width:120px;
    height:40px;
    background-color:rgba(255, 153, 51, 1);
  }
  #u619 {
    position:absolute;
    left:2px;
    top:3px;
    width:96px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u620_img {
    position:absolute;
    left:0px;
    top:0px;
    width:46px;
    height:35px;
  }
  #u620 {
    position:absolute;
    left:62px;
    top:16px;
    width:46px;
    height:35px;
  }
  #u621 {
    position:absolute;
    left:2px;
    top:10px;
    width:42px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u622_div {
    position:absolute;
    left:-10px;
    top:0px;
    width:120px;
    height:40px;
    background:inherit;
    background-color:rgba(255, 153, 51, 1);
    border:none;
    border-radius:5px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  #u622 {
    position:absolute;
    left:1134px;
    top:199px;
    width:100px;
    height:40px;
    background-color:rgba(255, 153, 51, 1);
  }
  #u623 {
    position:absolute;
    left:2px;
    top:3px;
    width:96px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u624 {
    position:absolute;
    left:513px;
    top:196px;
    width:552px;
    height:35px;
  }
  #u624_input {
    position:absolute;
    left:0px;
    top:0px;
    width:552px;
    height:35px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:28px;
    text-decoration:none;
    color:#000000;
  }
  #u624_input:disabled {
    color:grayText;
  }
  #u625 {
    position:absolute;
    left:840px;
    top:439px;
    width:100px;
    height:40px;
  }
  #u625_input {
    position:absolute;
    left:0px;
    top:0px;
    width:100px;
    height:40px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:28px;
    text-decoration:none;
    color:#000000;
  }
  #u625_input:disabled {
    color:grayText;
  }
  #u626 {
    position:absolute;
    left:950px;
    top:439px;
    width:100px;
    height:40px;
  }
  #u626_input {
    position:absolute;
    left:0px;
    top:0px;
    width:100px;
    height:40px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:28px;
    text-decoration:none;
    color:#000000;
  }
  #u626_input:disabled {
    color:grayText;
  }
  #u627 {
    position:absolute;
    left:846px;
    top:439px;
    width:100px;
    height:40px;
  }
  #u627_input {
    position:absolute;
    left:0px;
    top:0px;
    width:100px;
    height:40px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:28px;
    text-decoration:none;
    color:#000000;
  }
  #u627_input:disabled {
    color:grayText;
  }
  #u628 {
    position:absolute;
    left:966px;
    top:439px;
    width:100px;
    height:40px;
  }
  #u628_input {
    position:absolute;
    left:0px;
    top:0px;
    width:100px;
    height:40px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:28px;
    text-decoration:none;
    color:#000000;
  }
  #u628_input:disabled {
    color:grayText;
  }
  #u629_div {
    position:absolute;
    left:0px;
    top:10px;
    width:57px;
    height:16px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  #u629 {
    position:absolute;
    left:1159px;
    top:210px;
    width:57px;
    height:18px;
  }
  #u630 {
    position:absolute;
    left:0px;
    top:0px;
    width:57px;
    white-space:nowrap;
  }
  #u631_div {
    position:absolute;
    left:0px;
    top:0px;
    width:57px;
    height:16px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    color:#FFFFFF;
  }
  #u631 {
    position:absolute;
    left:693px;
    top:502px;
    width:57px;
    height:16px;
    color:#FFFFFF;
  }
  #u632 {
    position:absolute;
    left:10px;
    top:10px;
    width:60px;
    white-space:nowrap;
  }
  #time1 {
    position:absolute;
    width:250px;
    top: 450px;
    left: 510px;
  }


</style>
