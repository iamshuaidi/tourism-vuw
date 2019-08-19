<template>
  <div id="base" class="">

    <!-- Unnamed (矩形) -->
    <div id="u489" class="ax_default box_1">
      <div id="u489_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u490" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (组合) -->
    <div id="u491" class="ax_default">

      <!-- Unnamed (矩形) -->
      <div id="u492" class="ax_default box_1">
        <div id="u492_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u493" class="text" style="display: none; visibility: hidden">
          <p><span></span></p>
        </div>
      </div>
    </div>

    <!-- 类型 (矩形) -->
    <div id="u494" class="ax_default label" data-label="类型">
      <div id="u494_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u495" class="text" style="visibility: visible;">
        <p><span>类型：</span></p>
      </div>
    </div>

    <!-- 标题 (矩形) -->
    <div id="u496" class="ax_default label" data-label="标题">
      <div id="u496_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u497" class="text" style="visibility: visible;">
        <p><span>标题：</span></p>
      </div>
    </div>

    <!-- 内容 (矩形) -->
    <div id="u498" class="ax_default label" data-label="内容">
      <div id="u498_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u499" class="text" style="visibility: visible;">
        <p><span>内容：</span></p>
      </div>
    </div>

    <!-- 标题框 (文本框) -->
    <div id="u500" class="ax_default text_field" data-label="标题框">
      <input id="u500_input" type="text" value=""/>
    </div>

    <!-- 类型框 (文本框) -->
    <div id="u501" class="ax_default text_field" data-label="类型框">
      <input id="u501_input" type="text" value=""/>
    </div>

    <!-- 新增紧急预案 (矩形) -->
    <div id="u502" class="ax_default label" data-label="新增紧急预案">
      <div id="u502_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u503" class="text" style="visibility: visible;">
        <p><span>新增紧急预案</span></p>
      </div>
    </div>

    <!-- Unnamed (多行文本框) -->
    <div id="u504" class="ax_default text_area">
      <textarea id="u504_input"></textarea>
    </div>

    <Button id="u508" class="ax_default label" data-label="添加应急人员" @click="Jump4" >
      <div id="u508_div" class="" @click="Jump1" >添加</div>
    </Button>

      <!-- 关闭 (矩形) -->
      <Button id="u513" class="ax_default label" data-label="关闭" @click="Jump2">
        <div id="u513_div" class="" >关闭</div>
      </Button>

    <!-- 保存 (矩形) -->
    <Button id="baocun" class="ax_default label" data-label="保存" @click="Jump3">
      <div id="baocun_div" class="" >保存</div>
    </Button>

    <Table id="t1" border :columns="columns1" :data="data2">
      <template slot-scope="{ row, index }" slot="Action">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button id="b1" size="large" @click="list(index)">删除</Button>
      </template>
    </Table>

    <!--人员下拉框-->
    <Select id="s1"  v-model="model1">
      <Option v-for="item in peopleList" :value="item.id" :key="item.id">{{ item.name }}</Option>
    </Select>
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
      data1: [],
      data2: [],
      data3: [],
      peo: [],
      model1: '',
      peopleList: []
    }
  },
  created () {
      this.$axios.get('/showPerson').then(res => {
          this.peopleList = res.data.data.list
      })
      console.log(res)
  },

  methods: {
    Jump2 () {
      this.$router.push({
        name: 'EmergencyBank'
      })
    },
    Jump3 () {
      var value1 = document.getElementById('u494_div').value
      var value2 = document.getElementById('u496_div').value
      var value3 = document.getElementById('u498_div').value
      this.$axios.post('/api/addPlan', {
        type: value1,
        title: value2,
        plan: value3
      }).then(res => {
        console.log(res)
        if (res.data.message === '') {
          for (var i in this.peo) {
            this.$axios.post('/api/assignPlan', {
              time: this.peo[i].time,
              per_id: this.peo[i].per_id,
              plan_id: res.data.plan_id
            }).then(res => {
              this.$router.push({
                name: 'EmergencyBank'
              })
            })
          }
        }
      })
    },
    Jump4 () {
      if (this.model1 === '') {
        this.$Message.error('请选择要添加的人')
      } else {
        var t = new Date()
        var p
        p.time = t
        p.per_id = this.model1
        p.plan_id = ''
        this.peo.push(p)
      }
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
  #u489_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1439px;
    height:666px;
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
  #u489 {
    position:absolute;
    left:1px;
    top:54px;
    width:1439px;
    height:666px;
  }
  #u490 {
    position:absolute;
    left:2px;
    top:325px;
    width:1435px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u491 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u492_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1439px;
    height:54px;
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
  #u492 {
    position:absolute;
    left:0px;
    top:0px;
    width:1439px;
    height:54px;
  }
  #u493 {
    position:absolute;
    left:2px;
    top:19px;
    width:1435px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u494_div {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    height:32px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u494 {
    position:absolute;
    left:168px;
    top:68px;
    width:85px;
    height:32px;
    font-size:28px;
  }
  #u495 {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    white-space:nowrap;
  }
  #u496_div {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    height:31px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u496 {
    position:absolute;
    left:168px;
    top:126px;
    width:85px;
    height:31px;
    font-size:28px;
  }
  #u497 {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    white-space:nowrap;
  }
  #u498_div {
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
  #u498 {
    position:absolute;
    left:168px;
    top:189px;
    width:85px;
    height:33px;
    font-size:28px;
  }
  #u499 {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    white-space:nowrap;
  }
  #u500 {
    position:absolute;
    left:287px;
    top:126px;
    width:976px;
    height:32px;
  }
  #u500_input {
    position:absolute;
    left:0px;
    top:0px;
    width:976px;
    height:32px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u501 {
    position:absolute;
    left:287px;
    top:73px;
    width:976px;
    height:32px;
  }
  #u501_input {
    position:absolute;
    left:0px;
    top:0px;
    width:976px;
    height:32px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u502_div {
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
    color:#FFFFFF;
  }
  #u502 {
    position:absolute;
    left:615px;
    top:11px;
    width:169px;
    height:33px;
    font-size:28px;
    color:#FFFFFF;
  }
  #u503 {
    position:absolute;
    left:0px;
    top:0px;
    width:169px;
    white-space:nowrap;
  }
  #u504 {
    position:absolute;
    left:287px;
    top:188px;
    width:976px;
    height:165px;
  }
  #u504_input {
    position:absolute;
    left:0px;
    top:0px;
    width:976px;
    height:165px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u505 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u506_div {
    position:absolute;
    left:0px;
    top:0px;
    width:170px;
    height:43px;
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
    font-size:20px;
    color:#FF6600;
  }
  #u506 {
    position:absolute;
    left:1017px;
    top:663px;
    width:170px;
    height:43px;
    font-size:20px;
    color:#FF6600;
  }
  #u507 {
    position:absolute;
    left:2px;
    top:14px;
    width:166px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u508_div {
    position:absolute;
    left:-10px;
    top:3px;
    width:150px;
    height:30px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:18px;
  }
  #u508 {
    position:absolute;
    left:280px;
    top:365px;
    width:130px;
    height:30px;
    font-size:20px;
  }
  #u509 {
    position:absolute;
    left:0px;
    top:0px;
    width:121px;
    white-space:nowrap;
  }
  #u510 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u511_div {
    position:absolute;
    left:0px;
    top:0px;
    width:170px;
    height:43px;
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
    font-size:20px;
    color:#FF6600;
  }
  #u511 {
    position:absolute;
    left:1207px;
    top:663px;
    width:170px;
    height:43px;
    font-size:20px;
    color:#FF6600;
  }
  #u512 {
    position:absolute;
    left:2px;
    top:14px;
    width:166px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u513_div {
    position:absolute;
    left:-8px;
    top:5px;
    width:118px;
    height:24px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:20px;
    text-align:center;
  }
  #u513 {
    position:absolute;
    left:1232px;
    top:660px;
    width:130px;
    height:38px;
    font-size:20px;
    text-align:center;
  }
  #u514 {
    position:absolute;
    left:0px;
    top:0px;
    width:118px;
    word-wrap:break-word;
  }
  #t1 {
    left: 280px;
    top: 410px;
    width: 1000px;
  }
  #s1 {
    position:absolute;
    left: 420px;
    top: 365px;
    width: 200px;
  }

  #baocun {
    position:absolute;
    left:1075px;
    top:660px;
    width:130px;
    height:38px;
    font-size:20px;
    text-align:center;
  }
  #baocun_div {
    position:absolute;
    left:-8px;
    top:5px;
    width:118px;
    height:24px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:20px;
    text-align:center;
  }

</style>
