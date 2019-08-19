<template>
  <div id="base" class="">

    <!-- Unnamed (图片) -->
    <div id="u448" class="ax_default image">
      <img id="u448_img" class="img " src="../images/应急预案库/u448.jpg"/>
      <!-- Unnamed () -->
      <div id="u449" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- Unnamed (组合) -->
    <div id="u450" class="ax_default">

      <!-- Unnamed (矩形) -->
      <div id="u451" class="ax_default box_1">
        <div id="u451_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u452" class="text" style="display: none; visibility: hidden">
          <p><span></span></p>
        </div>
      </div>
    </div>

    <!-- Unnamed (矩形) -->
    <div id="u453" class="ax_default box_1">
      <div id="u453_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u454" class="text" style="display: none; visibility: hidden">
        <p><span></span></p>
      </div>
    </div>

    <!-- 应急预案库 (矩形) -->
    <div id="u455" class="ax_default _一级标题" data-label="应急预案库">
      <div id="u455_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u456" class="text" style="visibility: visible;">
        <p><span>应急预案库</span></p>
      </div>
    </div>

    <!-- Unnamed (图片) -->
    <div id="u457" class="ax_default image" @click="Jump2">
      <img id="u457_img" class="img " src="../images/我要投诉/u63.png" @click="Jump2"/>
      <!-- Unnamed () -->
      <div id="u458" class="text" style="display: none; visibility: hidden" @click="Jump2">
        <p><span></span></p>
      </div>
    </div>



    <!-- 新增预案按钮 (矩形) -->
    <Button id="u466" class="ax_default primary_button" data-label="新增预案按钮" @click="j1()">
      <div id="u466_div" class="">新增预案</div>
    </Button>







    <!-- 预案内容 (矩形) -->
    <div id="u472" class="ax_default label" data-label="预案内容">
      <div id="u472_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u473" class="text" style="visibility: visible;">
        <p><span>预案内容</span></p>
      </div>
    </div>

    <!-- 预案人员 (矩形) -->
    <div id="u474" class="ax_default label" data-label="预案人员">
      <div id="u474_div" class=""></div>
      <!-- Unnamed () -->
      <div id="u475" class="text" style="visibility: visible;">
        <p><span>预案人员</span></p>
      </div>
    </div>

    <Table id="t1" border :columns="columns1" :data="data1" height="200">
      <template slot-scope="{ row, index }" slot="Action">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button id="b1" size="large" @click="delpeo(index)">删除</Button>
      </template>
    </Table>

    <Table id="t2" border :columns="columns2" :data="data2" height="200">
      <template slot-scope="{ row, index }" slot="type">
        <Input type="text" v-model="edittype" v-if="editIndex === index" />
        <span v-else>{{ row.type }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="title">
        <Input type="text" v-model="edittitle" v-if="editIndex === index" />
        <span v-else>{{ row.title }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="plan">
        <Input type="text" v-model="editplan" v-if="editIndex === index" />
        <span v-else>{{ row.plan }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="Action">
        <div v-if="editIndex === index">
          <Button size="large" @click="save(index)">保存</Button>
          <Button size="large" @click="editIndex = -1">取消</Button>
        </div>
        <div v-else>
          <Button size="large" @click="edit(row, index)">修改</Button>
          <Button size="large" @click="delplan(row, index)">删除</Button>
        </div>
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
          slot: 'Action'
        }
      ],
      data1: [],
      columns2: [
        {
          title: '类型',
          slot: 'type',
          width: '150'
        },
        {
          title: '标题',
          slot: 'title',
          width: '150'
        },
        {
          title: '内容',
          slot: 'plan'
        },
        {
          title: '操作',
          slot: 'Action',
          width: '90'
        }
      ],
      editIndex: -1,
      edittype: '',
      edittitle: '',
      editplan: '',
      data2: [],
      total: 1
    }
  },
  created () {
    this.$axios.get('/api/showPlans').then(res => {
        var d = res.data
        this.data1 = d
        //for(let i in res.data.length){
         //   this.data1.push(res.data[i])
     //   }
        console.log(this.data1)
      // this.$axios.get('/api/showPerson').then(res => {
      //   this.data2 = res.data
      //     for(let i in res.data.length){
      //         this.data2.push(res.data[i])
      //     }
      //
      // })
    })
  },

  methods: {
    j1 () {
      this.$router.push({
        name: 'NewPlan'
      })
    },
    Jump2 () {
      this.$router.push({
        name: 'EmergencyCenter'
      })
    },
    edit (row, index) {
      this.edittype = row.type
      this.edittitle = row.title
      this.editplan = row.plan
      this.editIndex = index
    },
    save (index) {
      this.data2[index].type = this.edittype
      this.data2[index].title = this.edittitle
      this.data2[index].plan = this.editplan
      this.editIndex = -1
    },
    delplan (index) {
      this.data2.splice(index, 1)
      this.$axios.post(this.$host + '?id=' + this.data2.id).then(res => {
        if (res.data.message === '') {
          this.$Message.info('删除成功')
        }
      })
    },
    delpeo (index) {
      this.data1.splice(index, 1)
      this.$axios.post(this.$host + '?id=' + this.data1.id).then(res => {
        if (res.data.message === '') {
          this.$Message.info('删除成功')
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
    width:1394px;
    margin-left:0;
    margin-right:0;
    text-align:left;
  }
  #base {
    position:absolute;
    z-index:0;
  }
  #u448_img {
    position:absolute;
    left:0px;
    top:0px;
    width:1440px;
    height:649px;
  }
  #u448 {
    position:absolute;
    left:-23px;
    top:72px;
    width:1440px;
    height:649px;
    opacity:0.7;
  }
  #u449 {
    position:absolute;
    left:2px;
    top:316px;
    width:1436px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u450 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u451_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1013px;
    height:582px;
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
  #u451 {
    position:absolute;
    left:167px;
    top:104px;
    width:1013px;
    height:582px;
  }
  #u452 {
    position:absolute;
    left:2px;
    top:283px;
    width:1009px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u453_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1423px;
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
  #u453 {
    position:absolute;
    left:-6px;
    top:1px;
    width:1423px;
    height:71px;
  }
  #u454 {
    position:absolute;
    left:2px;
    top:28px;
    width:1419px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u455_div {
    position:absolute;
    left:0px;
    top:0px;
    width:181px;
    height:57px;
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
  #u455 {
    position:absolute;
    left:604px;
    top:17px;
    width:181px;
    height:57px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:36px;
    color:#FFFFFF;
  }
  #u456 {
    position:absolute;
    left:0px;
    top:0px;
    width:181px;
    white-space:nowrap;
  }
  #u457_img {
    position:absolute;
    left:0px;
    top:0px;
    width:46px;
    height:35px;
  }
  #u457 {
    position:absolute;
    left:55px;
    top:17px;
    width:46px;
    height:35px;
  }
  #u458 {
    position:absolute;
    left:2px;
    top:10px;
    width:42px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u459_div {
    position:absolute;
    left:0px;
    top:0px;
    width:105px;
    height:33px;
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
    font-size:18px;
  }
  #u459 {
    position:absolute;
    left:884px;
    top:638px;
    width:105px;
    height:33px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:18px;
  }
  #u460 {
    position:absolute;
    left:2px;
    top:6px;
    width:101px;
    word-wrap:break-word;
  }
  #u461_div {
    position:absolute;
    left:0px;
    top:0px;
    width:105px;
    height:34px;
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
    font-size:18px;
  }
  #u461 {
    position:absolute;
    left:1027px;
    top:638px;
    width:105px;
    height:34px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:18px;
  }
  #u462 {
    position:absolute;
    left:2px;
    top:6px;
    width:101px;
    word-wrap:break-word;
  }
  #u463 {
    position:absolute;
    left:314px;
    top:123px;
    width:143px;
    height:32px;
  }
  #u463_input {
    position:absolute;
    left:0px;
    top:0px;
    width:143px;
    height:32px;
    background-color:#FF9933;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#FFFFFF;
  }
  #u463_input:disabled {
    color:grayText;
  }
  #u464_div {
    position:absolute;
    left:0px;
    top:0px;
    width:41px;
    height:22px;
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
    text-align:center;
  }
  #u464 {
    position:absolute;
    left:265px;
    top:128px;
    width:41px;
    height:22px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:20px;
    color:rgba(255, 102, 0, 0.858823529411765);
    text-align:center;
  }
  #u465 {
    position:absolute;
    left:0px;
    top:0px;
    width:41px;
    white-space:nowrap;
  }
  #u466_div {
    position:absolute;
    left:0px;
    top:0px;
    width:167px;
    height:32px;
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
    font-size:18px;
  }
  #u466 {
    position:absolute;
    left:966px;
    top:123px;
    width:167px;
    height:32px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:18px;
  }
  #u467 {
    position:absolute;
    left:2px;
    top:5px;
    width:163px;
    word-wrap:break-word;
  }
  #u468 {
    position:absolute;
    left:538px;
    top:123px;
    width:386px;
    height:32px;
  }
  #u468_input {
    position:absolute;
    left:0px;
    top:0px;
    width:386px;
    height:32px;
    background-color:#FF9933;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#FFFFFF;
  }
  #u468_input:disabled {
    color:grayText;
  }
  #u469_div {
    position:absolute;
    left:0px;
    top:0px;
    width:41px;
    height:22px;
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
    text-align:center;
  }
  #u469 {
    position:absolute;
    left:482px;
    top:128px;
    width:41px;
    height:22px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:20px;
    color:rgba(255, 102, 0, 0.858823529411765);
    text-align:center;
  }
  #u470 {
    position:absolute;
    left:0px;
    top:0px;
    width:41px;
    white-space:nowrap;
  }
  #u471 {
    position:absolute;
    left:238px;
    top:190px;
    width:900px;
    height:130px;
  }
  #u471_input {
    position:absolute;
    left:0px;
    top:0px;
    width:900px;
    height:180px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:28px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u472_div {
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
    color:#FF6600;
  }
  #u472 {
    position:absolute;
    left:238px;
    top:160px;
    width:81px;
    height:24px;
    font-size:20px;
    color:#FF6600;
  }
  #u473 {
    position:absolute;
    left:0px;
    top:0px;
    width:81px;
    white-space:nowrap;
  }
  #u474_div {
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
    color:#FF6600;
  }
  #u474 {
    position:absolute;
    left:238px;
    top:470px;
    width:81px;
    height:24px;
    font-size:20px;
    color:#FF6600;
  }
  #u475 {
    position:absolute;
    left:0px;
    top:-50px;
    width:81px;
    white-space:nowrap;
  }
  #u476 {
    position:absolute;
    left:238px;
    top:482px;
    width:900px;
    height:140px;
  }
  #u476_input {
    position:absolute;
    left:0px;
    top:0px;
    width:900px;
    height:140px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:13px;
    text-decoration:none;
    color:#000000;
    text-align:left;
  }
  #u477_div {
    position:absolute;
    left:0px;
    top:0px;
    width:880px;
    height:43px;
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
  #u477 {
    position:absolute;
    left:238px;
    top:482px;
    width:880px;
    height:43px;
  }
  #u478 {
    position:absolute;
    left:2px;
    top:14px;
    width:876px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u479_div {
    position:absolute;
    left:0px;
    top:0px;
    width:101px;
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
  #u479 {
    position:absolute;
    left:265px;
    top:492px;
    width:101px;
    height:24px;
    font-size:20px;
  }
  #u480 {
    position:absolute;
    left:0px;
    top:0px;
    width:101px;
    white-space:nowrap;
  }
  #u481_div {
    position:absolute;
    left:0px;
    top:0px;
    width:121px;
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
  #u481 {
    position:absolute;
    left:403px;
    top:492px;
    width:121px;
    height:24px;
    font-size:20px;
  }
  #u482 {
    position:absolute;
    left:0px;
    top:0px;
    width:121px;
    white-space:nowrap;
  }
  #u483_div {
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
  }
  #u483 {
    position:absolute;
    left:553px;
    top:492px;
    width:81px;
    height:24px;
    font-size:20px;
  }
  #u484 {
    position:absolute;
    left:0px;
    top:0px;
    width:81px;
    white-space:nowrap;
  }
  #u485_div {
    position:absolute;
    left:0px;
    top:0px;
    width:289px;
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
  #u485 {
    position:absolute;
    left:684px;
    top:492px;
    width:289px;
    height:24px;
    font-size:20px;
  }
  #u486 {
    position:absolute;
    left:0px;
    top:0px;
    width:289px;
    word-wrap:break-word;
  }
  #u487_div {
    position:absolute;
    left:0px;
    top:0px;
    width:100px;
    height:40px;
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
  }
  #u487 {
    position:absolute;
    left:991px;
    top:484px;
    width:100px;
    height:40px;
    font-size:20px;
  }
  #u488 {
    position:absolute;
    left:2px;
    top:8px;
    width:96px;
    word-wrap:break-word;
  }

  #t1 {
    left: 235px;
    top: 450px;
    width: 900px;
  }

  #t2 {
    left: 235px;
    top: 0px;
    width: 900px;
  }
</style>
