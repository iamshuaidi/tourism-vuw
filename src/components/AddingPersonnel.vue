<template>
  <div id="base" class="">

    <!-- Unnamed (矩形) -->
    <div id="u519" class="ax_default box_1">
      <div id="u519_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u520" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 所有下拉框 (下拉列表框) -->
    <div id="u521" class="ax_default droplist" data-label="所有下拉框">
      <select id="u521_input">
        <option selected value="所有">所有</option>
        <option value="景区工作人员">景区工作人员</option>
        <option value="警察">警察</option>
        <option value="消防员">消防员</option>
      </select>
    </div>

    <!-- 类型 (矩形) -->
    <div id="u522" class="ax_default label" data-label="类型">
      <div id="u522_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u523" class="text" style="visibility: visible;">
        <p><span>类型</span></p>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u524" class="ax_default box_1">
      <div id="u524_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u525" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 添加应急人员到预案 (矩形) -->
    <div id="u526" class="ax_default _一级标题" data-label="添加应急人员到预案">
      <div id="u526_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u527" class="text" style="visibility: visible;">
        <p><span>添加应急人员到预案</span></p>
      </div>
    </div>

    <!-- 保存框 (矩形) -->
    <Button id="u528" class="ax_default button" data-label="保存框" @click="Jump1">
      保存
    </Button>

    <Table id="t1" border :columns="columns1" :data="data1">
      <template slot-scope="{ row, index }" slot="Action">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button id="b1" size="large" @click="list(index)">添加</Button>
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
          key: 'number'
        },
        {
          title: '性别',
          key: 'people'
        },
        {
          title: '姓名',
          key: 'time'
        },
        {
          title: '联系电话',
          key: 'state'
        },
        {
          title: '操作',
          slot: 'Action'
        }
      ],
      data1: [
        {
          number: 'John Brown',
          people: 18,
          time: 'New York No. 1 Lake Park',
          state: '2016-10-03'
        },
        {
          number: 'John Brown',
          people: 18,
          time: 'New York No. 1 Lake Park',
          state: '2016-10-03'
        },
        {
          number: 'John Brown',
          people: 18,
          time: 'New York No. 1 Lake Park',
          state: '2016-10-03'
        },
        {
          number: 'John Brown',
          people: 18,
          time: 'New York No. 1 Lake Park',
          state: '2016-10-03'
        }
      ],
      total: 1
    }
  },
  methods: {
    Jump1 () {
      this.$router.push({
        name: 'EmergencyBank'
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
    width:1438px;
    margin-left:0;
    margin-right:0;
    text-align:left;
  }
  #base {
    position:absolute;
    z-index:0;
  }
  #u519_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1440px;
    height:720px;
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
  #u519 {
    position:absolute;
    left:-1px;
    top:0px;
    width:1440px;
    height:720px;
  }
  #u520 {
    position:absolute;
    left:2px;
    top:352px;
    width:1436px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u521 {
    position:absolute;
    left:297px;
    top:123px;
    width:1019px;
    height:58px;
  }
  #u521_input {
    position:absolute;
    left:0px;
    top:0px;
    width:1019px;
    height:58px;
    background-color:#FF9933;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:36px;
    text-decoration:none;
    color:#FFFFFF;
  }
  #u521_input:disabled {
    color:grayText;
  }
  #u522_div {
    position:absolute;
    left:0px;
    top:0px;
    width:73px;
    height:40px;
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
    color:rgba(255, 102, 0, 0.858823529411765);
    text-align:center;
  }
  #u522 {
    position:absolute;
    left:181px;
    top:133px;
    width:73px;
    height:40px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:36px;
    color:rgba(255, 102, 0, 0.858823529411765);
    text-align:center;
  }
  #u523 {
    position:absolute;
    left:0px;
    top:0px;
    width:73px;
    white-space:nowrap;
  }
  #u524_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1440px;
    height:88px;
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
  #u524 {
    position:absolute;
    left:-1px;
    top:0px;
    width:1440px;
    height:88px;
  }
  #u525 {
    position:absolute;
    left:2px;
    top:36px;
    width:1436px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u526_div {
    position:absolute;
    left:0px;
    top:0px;
    width:289px;
    height:37px;
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
    color:#FFFFFF;
  }
  #u526 {
    position:absolute;
    left:592px;
    top:26px;
    width:289px;
    height:37px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    color:#FFFFFF;
    font-size:36px;
  }
  #u527 {
    position:absolute;
    left:0px;
    top:0px;
    width:289px;
    white-space:nowrap;
  }
  #u528_div {
    position:absolute;
    left:-20px;
    top:5px;
    width:110px;
    height:35px;
    background:inherit;
    background-color:rgba(255, 255, 255, 1);
    box-sizing:border-box;
    border-width:1px;
    border-style:solid;
    border-color:rgba(121, 121, 121, 1);
    border-radius:5px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:18px;
  }
  #u528 {
    position:absolute;
    left:1175px;
    top:654px;
    width:100px;
    height:40px;
    font-size:20px;
  }
  #u529 {
    position:absolute;
    left:2px;
    top:4px;
    width:136px;
    word-wrap:break-word;
  }
  #t1 {
    left: 300px;
    top: 200px;
    width: 1000px;
  }

</style>
