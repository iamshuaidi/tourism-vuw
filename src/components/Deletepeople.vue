<template>
  <div id="base" class="">

    <!-- Unnamed (矩形) -->
    <div id="u894" class="ax_default _文本段落">
      <div id="u894_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u895" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u898" class="ax_default box_1">
      <div id="u898_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u899" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u900" class="ax_default label">
      <div id="u900_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u901" class="text" style="visibility: visible;">
        <p><span>删除应急人员</span></p>
      </div>
    </div>

    <!-- Unnamed 关闭(图片) -->
    <div id="u902" class="ax_default image" @click="Jump1">
      <img id="u902_img" class="img " src="../images/投诉协议/u81.png" @click="Jump1"/>
      <!-- Unnamed () -->
      <div id="u903" class="text" style="display: none; visibility: hidden" @click="Jump1">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (水平线) -->
    <div id="u904" class="ax_default line">
      <img id="u904_img" class="img " src="../images/修改信息/u852.png"/>
      <!-- Unnamed () -->
      <div id="u905" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u906" class="ax_default label">
      <div id="u906_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u907" class="text" style="visibility: visible;">
        <p><span>职业：</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u908" class="ax_default label">
      <div id="u908_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u909" class="text" style="visibility: visible;">
        <p><span>姓名：</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u910" class="ax_default label">
      <div id="u910_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u911" class="text" style="visibility: visible;">
        <p><span>性别：</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u912" class="ax_default label">
      <div id="u912_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u913" class="text" style="visibility: visible;">
        <p><span>联系电话：</span></p>
      </div>
    </div>

    <!-- Unnamed (文本框)姓名 -->
    <div id="u914" class="ax_default text_field">
      <b id="u914_input" type="text">{{data1.name}}</b>
    </div>

    <!-- Unnamed (文本框) 电话-->
    <div id="u915" class="ax_default text_field">
      <b id="u915_input" type="text" value="">{{data1.phone}}</b>
    </div>

    <!-- Unnamed (文本框) 职业-->
    <div id="u916" class="ax_default text_field">
      <b id="u916_input" type="text" value="">{{data1.job}}</b>
    </div>

    <!-- Unnamed (文本框)性别 -->
    <div id="u917" class="ax_default text_field">
      <b id="u917_input" type="text" value="">{{data1.gender}}</b>
    </div>

    <!-- Unnamed (矩形) -->
    <Button id="u918" class="ax_default label" @click="Jump2">
      确认删除
    </Button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data1: []
    }
  },
  created () {
    this.getParams()
      console.log(this.data1)
    // document.getElementById('u914_input').innerHTML = " " + this.data1.job
    // document.getElementById('u915_input').innerHTML = " " + this.data1.name
    // document.getElementById('u916_input').innerHTML = " " + this.data1.gender
    // document.getElementById('u917_input').innerHTML = " " + this.data1.phone
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
      this.$axios.get('/api/deletePerson', { params: {
        id: this.data1.id
      }
      }).then(res => {
        console.log(res)
        if (res.data.message === '') {
          this.$Message.success('删除成功!')
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
  #u894_div {
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
  #u894 {
    position:absolute;
    left:450px;
    top:211px;
    width:500px;
    height:554px;
  }
  #u895 {
    position:absolute;
    left:0px;
    top:0px;
    width:500px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u896_div {
    position:absolute;
    left:0px;
    top:0px;
    width:196px;
    height:48px;
    background:inherit;

    border:none;
    border-radius:5px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  #u896 {
    position:absolute;
    left:603px;
    top:688px;
    width:196px;
    height:48px;
  }
  #u897 {
    position:absolute;
    left:2px;
    top:16px;
    width:192px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u898_div {
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
  #u898 {
    position:absolute;
    left:450px;
    top:147px;
    width:500px;
    height:64px;
  }
  #u899 {
    position:absolute;
    left:2px;
    top:24px;
    width:496px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u900_div {
    position:absolute;
    left:0px;
    top:0px;
    width:217px;
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
  #u900 {
    position:absolute;
    left:591px;
    top:162px;
    width:217px;
    height:42px;
    font-size:36px;
    color:#F2F2F2;
  }
  #u901 {
    position:absolute;
    left:0px;
    top:0px;
    width:217px;
    white-space:nowrap;
  }
  #u902_img {
    position:absolute;
    left:0px;
    top:0px;
    width:25px;
    height:25px;
  }
  #u902 {
    position:absolute;
    left:883px;
    top:168px;
    width:25px;
    height:25px;
  }
  #u903 {
    position:absolute;
    left:2px;
    top:4px;
    width:21px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u904_img {
    position:absolute;
    left:-1px;
    top:-1px;
    width:493px;
    height:5px;
  }
  #u904 {
    position:absolute;
    left:460px;
    top:660px;
    width:490px;
    height:2px;
  }
  #u905 {
    position:absolute;
    left:2px;
    top:-7px;
    width:486px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u906_div {
    position:absolute;
    left:0px;
    top:0px;
    width:65px;
    height:24px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:20px;
  }
  #u906 {
    position:absolute;
    left:495px;
    top:274px;
    width:65px;
    height:24px;
    font-size:20px;
  }
  #u907 {
    position:absolute;
    left:0px;
    top:0px;
    width:65px;
    word-wrap:break-word;
  }
  #u908_div {
    position:absolute;
    left:0px;
    top:0px;
    width:69px;
    height:24px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:20px;
  }
  #u908 {
    position:absolute;
    left:494px;
    top:349px;
    width:69px;
    height:24px;
    font-size:20px;
  }
  #u909 {
    position:absolute;
    left:0px;
    top:0px;
    width:69px;
    word-wrap:break-word;
  }
  #u910_div {
    position:absolute;
    left:0px;
    top:0px;
    width:69px;
    height:24px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:20px;
  }
  #u910 {
    position:absolute;
    left:497px;
    top:413px;
    width:69px;
    height:24px;
    font-size:20px;
  }
  #u911 {
    position:absolute;
    left:0px;
    top:0px;
    width:69px;
    word-wrap:break-word;
  }
  #u912_div {
    position:absolute;
    left:0px;
    top:0px;
    width:110px;
    height:24px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:20px;
  }
  #u912 {
    position:absolute;
    left:460px;
    top:474px;
    width:110px;
    height:24px;
    font-size:20px;
  }
  #u913 {
    position:absolute;
    left:0px;
    top:0px;
    width:110px;
    word-wrap:break-word;
  }
  #u914 {
    position:absolute;
    left:566px;
    top:349px;
    width:332px;
    height:30px;
  }
  #u914_input {
    position:absolute;
    left:0px;
    top:0px;
    width:332px;
    height:30px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u915 {
    position:absolute;
    left:567px;
    top:474px;
    width:332px;
    height:30px;
  }
  #u915_input {
    position:absolute;
    left:0px;
    top:0px;
    width:332px;
    height:30px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u916 {
    position:absolute;
    left:567px;
    top:274px;
    width:332px;
    height:30px;
  }
  #u916_input {
    position:absolute;
    left:0px;
    top:0px;
    width:332px;
    height:30px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u917 {
    position:absolute;
    left:567px;
    top:413px;
    width:332px;
    height:30px;
  }
  #u917_input {
    position:absolute;
    left:0px;
    top:0px;
    width:332px;
    height:30px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u918_div {
    position:absolute;
    left:0px;
    top:0px;
    width:81px;
    height:24px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:20px;
    color:#FFFFFF;
  }
  #u918 {
    position:absolute;
    left:670px;
    top:701px;
    width:100px;
    height:40px;
    font-size:20px;
    color:#FFFFFF;
    background-color:rgba(255, 153, 51, 1);
  }
  #u919 {
    position:absolute;
    left:0px;
    top:0px;
    width:81px;
    white-space:nowrap;
  }

</style>
