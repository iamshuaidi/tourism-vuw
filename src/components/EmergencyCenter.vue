<template>
  <div id="base" class="">

    <!-- Unnamed (图片) -->
    <div id="u442" class="ax_default image">
      <img id="u442_img" class="img " src="../images/应急事件处置中心/u442.png"/>
      <!-- Unnamed () -->
      <div id="u443" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u444" class="ax_default box_1">
      <div id="u444_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u445" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 应急事件处置中心 (矩形) -->
    <div id="u446" class="ax_default _一级标题" data-label="应急事件处置中心">
      <div id="u446_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u447" class="text" style="visibility: visible;">
        <p><span>应急事件处置中心</span></p>
      </div>
    </div>

    <!-- 返回 (图片) -->
    <div id="u448" class="ax_default image" data-label="返回" @click="j2">
      <img id="u448_img" class="img " src="../images/我要投诉/u63.png" @click="j2"/>
      <!-- Unnamed () -->
      <div id="u449" class="text" style="display: none; visibility: hidden" @click="j2">
        <p><span></span></p>
      </div>
    </div>

    <!-- 白底框 (矩形) -->
    <div id="u450" class="ax_default box_1" data-label="白底框">
      <div id="u450_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u451" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 应急预案库 (矩形) -->
    <div id="u452" class="ax_default label" data-label="应急预案库">
      <div id="u452_div" class="" ></div>
      <!-- Unnamed () -->
      <div id="u453" class="text" style="visibility: visible;">
        <p><span>应急预案库</span></p>
      </div>
    </div>

    <!-- 报案处理 (矩形) -->
    <div id="u454" class="ax_default label" data-label="报案处理">
      <div id="u454_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u455" class="text" style="visibility: visible;">
        <p><span>报案处理</span></p>
      </div>
    </div>

    <!-- 应急预案库图 (图片) -->
    <div id="u456" class="ax_default image" data-label="应急预案库图" @click="j1">
      <img id="u456_img" class="img " src="../images/应急事件处置中心/应急预案库图_u456.png"/>
      <!-- Unnamed () -->
      <div id="u457" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 报案处理图 (图片) -->
    <div id="u458" class="ax_default image" data-label="报案处理图">
      <img id="u458_img" class="img " src="../images/应急事件处置中心/报案处理图_u458.png"/>
      <!-- Unnamed () -->
      <div id="u459" class="text" style="display: none; visibility: hidden">
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
        name: 'EmergencyBank'
      })
    },
    j2 () {
      this.$router.push({
        name: 'WebmasterCentral'
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
  #u442_img {
    position:absolute;
    left:0px;
    top:0px;
    width:1440px;
    height:635px;
  }
  #u442 {
    position:absolute;
    left:0px;
    top:85px;
    width:1440px;
    height:635px;
    opacity:0.7;
  }
  #u443 {
    position:absolute;
    left:2px;
    top:310px;
    width:1436px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u444_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1440px;
    height:85px;
    background:inherit;
    background-color:rgba(255, 102, 0, 0.858823529411765);
    box-sizing:border-box;
    border-width:1px;
    border-style:solid;
    border-color:rgba(121, 121, 121, 1);
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  #u444 {
    position:absolute;
    left:0px;
    top:0px;
    width:1440px;
    height:85px;
  }
  #u445 {
    position:absolute;
    left:2px;
    top:34px;
    width:1436px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u446_div {
    position:absolute;
    left:0px;
    top:0px;
    width:289px;
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
  #u446 {
    position:absolute;
    left:533px;
    top:10px;
    width:289px;
    height:55px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:36px;
    color:#FFFFFF;
  }
  #u447 {
    position:absolute;
    left:0px;
    top:0px;
    width:289px;
    white-space:nowrap;
  }
  #u448_img {
    position:absolute;
    left:0px;
    top:0px;
    width:46px;
    height:37px;
  }
  #u448 {
    position:absolute;
    left:43px;
    top:17px;
    width:46px;
    height:37px;
  }
  #u449 {
    position:absolute;
    left:2px;
    top:10px;
    width:42px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u450_div {
    position:absolute;
    left:0px;
    top:0px;
    width:582px;
    height:292px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0.627450980392157);
    box-sizing:border-box;
    border-width:1px;
    border-style:solid;
    border-color:rgba(121, 121, 121, 1);
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:20px;
  }
  #u450 {
    position:absolute;
    left:371px;
    top:251px;
    width:582px;
    height:292px;
    font-size:20px;
  }
  #u451 {
    position:absolute;
    left:2px;
    top:138px;
    width:578px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u452_div {
    position:absolute;
    left:0px;
    top:0px;
    width:101px;
    height:17px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-family:'Arial Black', 'Arial Normal', 'Arial';
    font-weight:900;
    font-style:normal;
    font-size:20px;
    color:rgba(255, 102, 0, 0.858823529411765);
  }
  #u452 {
    position:absolute;
    left:450px;
    top:427px;
    width:101px;
    height:17px;
    font-family:'Arial Black', 'Arial Normal', 'Arial';
    font-weight:900;
    font-style:normal;
    font-size:20px;
    color:rgba(255, 102, 0, 0.858823529411765);
  }
  #u453 {
    position:absolute;
    left:0px;
    top:0px;
    width:101px;
    white-space:nowrap;
  }
  #u454_div {
    position:absolute;
    left:0px;
    top:0px;
    width:81px;
    height:20px;
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
    font-size:20px;
    color:rgba(255, 102, 0, 0.858823529411765);
  }
  #u454 {
    position:absolute;
    left:782px;
    top:427px;
    width:81px;
    height:20px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:20px;
    color:rgba(255, 102, 0, 0.858823529411765);
  }
  #u455 {
    position:absolute;
    left:0px;
    top:0px;
    width:81px;
    white-space:nowrap;
  }
  #u456_img {
    position:absolute;
    left:0px;
    top:0px;
    width:91px;
    height:83px;
  }
  #u456 {
    position:absolute;
    left:455px;
    top:325px;
    width:91px;
    height:83px;
  }
  #u457 {
    position:absolute;
    left:2px;
    top:34px;
    width:87px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u458_img {
    position:absolute;
    left:0px;
    top:0px;
    width:91px;
    height:83px;
  }
  #u458 {
    position:absolute;
    left:773px;
    top:325px;
    width:91px;
    height:83px;
  }
  #u459 {
    position:absolute;
    left:2px;
    top:34px;
    width:87px;
    visibility:hidden;
    word-wrap:break-word;
  }


</style>
