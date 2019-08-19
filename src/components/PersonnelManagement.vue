<template>
  <div id="base" class="">

    <!-- Unnamed (图片) -->
    <div id="u825" class="ax_default image">
      <img id="u825_img" class="img " src="../images/应急预案库/u448.jpg"/>
      <!-- Unnamed () -->
      <div id="u826" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u827" class="ax_default box_1">
      <div id="u827_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u828" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u829" class="ax_default box_1">
      <div id="u829_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u830" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 应急人员管理 (矩形) -->
    <div id="u831" class="ax_default _一级标题" data-label="应急人员管理">
      <div id="u831_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u832" class="text" style="visibility: visible;">
        <p><span>应急人员管理</span></p>
      </div>
    </div>

    <!-- 返回 (图片) -->
    <div id="u833" class="ax_default image" data-label="返回" @click="Jump4()">
      <img id="u833_img" class="img " src="../images/我要投诉/u63.png" @click="Jump4()"/>
      <!-- Unnamed () -->
      <div id="u834" class="text" style="display: none; visibility: hidden" @click="Jump4()">
        <p><span></span></p>
      </div>
    </div>

    <!-- 类型下拉框 (下拉列表框) -->
    <div id="u835" class="ax_default droplist" data-label="类型下拉框">
      <select id="u835_input">
        <option selected value="所有">所有</option>
        <option value="景区工作人员">景区工作人员</option>
        <option value="警察">警察</option>
        <option value="消防员">消防员</option>
      </select>
    </div>

    <!-- 类型 (矩形) -->
    <div id="u836" class="ax_default label" data-label="类型">
      <div id="u836_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u837" class="text" style="visibility: visible;">
        <p><span>类型</span></p>
      </div>
    </div>

    <!-- 添加人员按钮 (矩形) -->
    <Button id="u838" class="ax_default primary_button" data-label="添加人员按钮" @click="Jump1">
      添加人员
    </Button>



    <Table id="t1" height="250" border :columns="columns1" :data="data1">
      <template slot-scope="{ row, index }" slot="Action">
        <Button id="b1" size="large" @click="Jump2(index)">修改信息</Button>&nbsp;&nbsp;&nbsp;
        <Button id="b2" size="large" @click="Jump3(index)">删除</Button>
      </template>
    </Table>
  </div>
</template>
<script>

export default {
  data () {
    return {
      columns1: [
        {
          title: '职业',
          key: 'job'
        },
        {
          title: '性别',
          key: 'gender'
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '联系电话',
          key: 'phone'
        },
        {
          title: '操作',
          slot: 'Action',
          width: '200px'
        }
      ],
      data1: [],
      total: 1
    }
  },
  created () {
    this.$axios.get('/api/showPerson').then(res => {
      console.log(res)
      this.data1 = res.data
        for(let i in this.res.data.length){
            this.data1.push(res.data[i])
        }
    })
  },
  methods: {
    Jump1() {
      this.$router.push({
        name: 'AddPeople'
      })
    },
    Jump2(index) {
      this.$router.push({
        name: 'ModifyInformation',
          query : {
            data1: this.data1[index]
          }
      })
    },
    Jump3 (index) {
      this.$router.push({
        name: 'Deletepeople',
        query: {
          data1: this.data1[index]
        }
      })
    },
    Jump4 () {
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
  #u825_img {
    position:absolute;
    left:0px;
    top:0px;
    width:1439px;
    height:649px;
  }
  #u825 {
    position:absolute;
    left:1px;
    top:63px;
    width:1500px;
    height:649px;
    opacity:0.7;
  }
  #u826 {
    position:absolute;
    left:2px;
    top:316px;
    width:1435px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u827_div {
    position:absolute;
    left:0px;
    top:0px;
    width:998px;
    height:407px;
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
  #u827 {
    position:absolute;
    left:212px;
    top:189px;
    width:998px;
    height:407px;
  }
  #u828 {
    position:absolute;
    left:2px;
    top:196px;
    width:994px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u829_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1438px;
    height:71px;
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
  #u829 {
    position:absolute;
    left:0px;
    top:-8px;
    width:1438px;
    height:71px;
  }
  #u830 {
    position:absolute;
    left:2px;
    top:28px;
    width:1434px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u831_div {
    position:absolute;
    left:0px;
    top:0px;
    width:217px;
    height:50px;
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
  #u831 {
    position:absolute;
    left:635px;
    top:13px;
    width:217px;
    height:50px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:36px;
    color:#FFFFFF;
  }
  #u832 {
    position:absolute;
    left:0px;
    top:0px;
    width:217px;
    white-space:nowrap;
  }
  #u833_img {
    position:absolute;
    left:0px;
    top:0px;
    width:46px;
    height:35px;
  }
  #u833 {
    position:absolute;
    left:80px;
    top:13px;
    width:46px;
    height:35px;
  }
  #u834 {
    position:absolute;
    left:2px;
    top:10px;
    width:42px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u835 {
    position:absolute;
    left:454px;
    top:235px;
    width:421px;
    height:41px;
  }
  #u835_input {
    position:absolute;
    left:0px;
    top:0px;
    width:421px;
    height:41px;
    background-color:#FF9933;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:28px;
    text-decoration:none;
    color:#FFFFFF;
  }
  #u835_input:disabled {
    color:grayText;
  }
  #u836_div {
    position:absolute;
    left:0px;
    top:0px;
    width:57px;
    height:35px;
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
    font-size:28px;
    color:rgba(255, 102, 0, 0.858823529411765);
    text-align:center;
  }
  #u836 {
    position:absolute;
    left:369px;
    top:241px;
    width:57px;
    height:35px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:28px;
    color:rgba(255, 102, 0, 0.858823529411765);
    text-align:center;
  }
  #u837 {
    position:absolute;
    left:0px;
    top:0px;
    width:57px;
    white-space:nowrap;
  }
  #u838_div {
    position:absolute;
    left:0px;
    top:5px;
    width:193px;
    height:48px;
    background:inherit;
    background-color:rgba(255, 0, 0, 1);
    border:none;
    border-radius:5px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:20px;
  }
  #u838 {
    position:absolute;
    left:939px;
    top:235px;
    width:193px;
    height:48px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:20px;
  }
  #u839 {
    position:absolute;
    left:2px;
    top:16px;
    width:189px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u840_div {
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
    color:#FFFFFF;
  }
  #u840 {
    position:absolute;
    left:983px;
    top:243px;
    width:113px;
    height:33px;
    font-size:28px;
    color:#FFFFFF;
  }
  #u841 {
    position:absolute;
    left:0px;
    top:0px;
    width:113px;
    white-space:nowrap;
  }
  #t1{
    position:absolute;
    left:350px;
    top:300px;
    width:750px;
    height:250px;
  }

</style>
