<template>
  <div id="base" class="">

    <!-- Unnamed (矩形) -->
    <div id="u705" class="ax_default box_1">
      <div id="u705_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u706" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (组合) -->
    <div id="u707" class="ax_default">

      <!-- Unnamed (矩形) -->
      <div id="u708" class="ax_default box_1">
        <div id="u708_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u709" class="text" style="display: none; visibility: hidden">
          <p><span></span></p>
        </div>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u710" class="ax_default label">
      <div id="u710_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u711" class="text" style="visibility: visible;">
        <p><span>预警类型：</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u712" class="ax_default label">
      <div id="u712_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u713" class="text" style="visibility: visible;">
        <p><span>预警标题：</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u714" class="ax_default label">
      <div id="u714_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u715" class="text" style="visibility: visible;">
        <p><span>发布时间：</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u716" class="ax_default label">
      <div id="u716_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u717" class="text" style="visibility: visible;">
        <p><span>预警内容：</span></p>
      </div>
    </div>

    <!-- Unnamed (文本框) -->
    <div id="u718" class="ax_default text_field">
      <input id="u718_input" type="text" value="XXXXXXXXXXXXXXXXXXXXXXXXXXXX"/>
    </div>

    <!-- Unnamed (文本框) -->
    <div id="u719" class="ax_default text_field">
      <input id="u719_input" type="text" value="XXXXXXXXXXXXXXXX"/>
    </div>

    <!-- Unnamed (文本框) -->
    <div id="u720" class="ax_default text_field">
      <input id="u720_input" type="text" value="XXXXX"/>
    </div>

    <!-- Unnamed (文本框) -->
    <div id="u721" class="ax_default text_field">
      <input id="u721_input" type="text" value="XXXXXXXXXXXXXXXX"/>
    </div>

    <!-- 返回 (图片) -->
    <div id="u722" class="ax_default image" data-label="返回" @click="j1">
      <img id="u722_img" class="img " src="../images/投诉协议/u81.png" @click="j1"/>
      <!-- Unnamed () -->
      <div id="u723" class="text" style="display: none; visibility: hidden" @click="j1">
        <p><span></span></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    j1 () {
      this.$router.push({
        name: 'WarningRecord'
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
    width:1550px;
    margin-left:0;
    margin-right:0;
    text-align:left;
  }
  #base {
    position:absolute;
    z-index:0;
  }
  #u705_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1100px;
    height:593px;
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
  #u705 {
    position:absolute;
    left:450px;
    top:167px;
    width:1100px;
    height:593px;
  }
  #u706 {
    position:absolute;
    left:2px;
    top:288px;
    width:1096px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u707 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u708_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1100px;
    height:57px;
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
  #u708 {
    position:absolute;
    left:450px;
    top:110px;
    width:1100px;
    height:57px;
  }
  #u709 {
    position:absolute;
    left:2px;
    top:20px;
    width:1096px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u710_div {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    height:19px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u710 {
    position:absolute;
    left:607px;
    top:228px;
    width:141px;
    height:19px;
    font-size:28px;
  }
  #u711 {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    white-space:nowrap;
  }
  #u712_div {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    height:19px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u712 {
    position:absolute;
    left:607px;
    top:289px;
    width:141px;
    height:19px;
    font-size:28px;
  }
  #u713 {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    white-space:nowrap;
  }
  #u714_div {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    height:19px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u714 {
    position:absolute;
    left:607px;
    top:555px;
    width:141px;
    height:19px;
    font-size:28px;
  }
  #u715 {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    white-space:nowrap;
  }
  #u716_div {
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
  #u716 {
    position:absolute;
    left:607px;
    top:341px;
    width:141px;
    height:33px;
    font-size:28px;
  }
  #u717 {
    position:absolute;
    left:0px;
    top:0px;
    width:141px;
    white-space:nowrap;
  }
  #u718 {
    position:absolute;
    left:785px;
    top:341px;
    width:572px;
    height:186px;
  }
  #u718_input {
    position:absolute;
    left:0px;
    top:0px;
    width:572px;
    height:186px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u719 {
    position:absolute;
    left:785px;
    top:289px;
    width:572px;
    height:34px;
  }
  #u719_input {
    position:absolute;
    left:0px;
    top:0px;
    width:572px;
    height:34px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u720 {
    position:absolute;
    left:785px;
    top:225px;
    width:572px;
    height:34px;
  }
  #u720_input {
    position:absolute;
    left:0px;
    top:0px;
    width:572px;
    height:34px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u721 {
    position:absolute;
    left:782px;
    top:552px;
    width:572px;
    height:34px;
  }
  #u721_input {
    position:absolute;
    left:0px;
    top:0px;
    width:572px;
    height:34px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u722_img {
    position:absolute;
    left:0px;
    top:0px;
    width:35px;
    height:35px;
  }
  #u722 {
    position:absolute;
    left:1489px;
    top:121px;
    width:35px;
    height:35px;
  }
  #u723 {
    position:absolute;
    left:2px;
    top:10px;
    width:31px;
    visibility:hidden;
    word-wrap:break-word;
  }


</style>
