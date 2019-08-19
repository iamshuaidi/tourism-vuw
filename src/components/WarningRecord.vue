<template>
  <div>
    <div id="base" class="">

      <!-- Unnamed (矩形) -->
      <div id="u608" class="ax_default box_1">
        <div id="u608_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u609" class="text" style="display: none; visibility: hidden">
          <p><span></span></p>
        </div>
      </div>

      <!-- 预警记录 (矩形) -->
      <div id="u610" class="ax_default _一级标题" data-label="预警记录">
        <div id="u610_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u611" class="text" style="visibility: visible;">
          <p><span>预警记录</span></p>
        </div>
      </div>

      <!-- 返回 (图片) -->
      <div id="u612" class="ax_default image" data-label="返回" @click="Jump2">
        <img id="u612_img" class="img " src="../images/我要投诉/u63.png" @click="Jump2"/>
        <!-- Unnamed () -->
        <div id="u613" class="text" style="display: none; visibility: hidden" @click="Jump2">
          <p><span></span></p>
        </div>
      </div>

      <!-- Unnamed (组合) -->
      <div id="u614" class="ax_default">

        <!-- Unnamed (矩形) -->
        <div id="u615" class="ax_default box_1">
          <div id="u615_div" class=""></div>
          <!-- Unnamed () -->
          <div id="u616" class="text" style="display: none; visibility: hidden">
            <p><span></span></p>
          </div>
        </div>
      </div>

      <!-- Unnamed (矩形) -->
      <div id="u617" class="ax_default box_1">
        <div id="u617_div" class=""></div>
        <!-- Unnamed () -->
        <div id="u618" class="text" style="display: none; visibility: hidden">
          <p><span></span></p>
        </div>
      </div>

      <Table id="t1"  border :columns="columns1" :data="data1" height="550">
        <template slot-scope="{ row, index }" slot="Action">
          <Button id="b1" size="large" @click="Jump1()">查看详情</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button id="b2" size="large" @click="Jump3(index)">停止预警</Button>
        </template>
      </Table>


    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: '标题',
          key: 'title',
          width: 250
        },
        {
          title: '类型',
          key: 'type',
          width: 250
        },
        {
          title: '时间',
          key: 'time',
          width: 350
        },
        {
          title: '状态',
          key: 'state',
          width: 250
        },
        {
          title: '操作',
          slot: 'Action',
          width: 300
        }
      ],
      data1: [],
      id: ''
    }
  },
  created () {
    this.$axios.get('/api/sendWarning').then(res => {
      console.log(res)
      this.data1 = res.data
      for (let i in res.data.length){
        this.data1.push(res.data[i])
      }
    })
  },
  methods: {
    Jump1 () {
      this.$router.push({
        name: 'WarningWindow'
      })
    },
    Jump2 () {
      this.$router.push({
        name: 'WarningCenter'
      })
    },
    Jump3 (index) {
      this.$axios.get('/api/stopWarning', { params: {
        id: this.data1[index].id
      }
      }).then(res => {
        alert(id)
        this.$router.push({
          name: 'WarningRecord'
        })
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
    width:1408px;
    margin-left:0;
    margin-right:0;
    text-align:left;
  }
  #base {
    position:absolute;
    z-index:0;
  }
  #u608_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1429px;
    height:75px;
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
  #u608 {
    position:absolute;
    left:-5px;
    top:12px;
    width:1429px;
    height:75px;
  }
  #u609 {
    position:absolute;
    left:2px;
    top:30px;
    width:1425px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u610_div {
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
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:36px;
    color:#FFFFFF;
    text-align:center;
  }
  #u610 {
    position:absolute;
    left:597px;
    top:26px;
    width:145px;
    height:42px;
    font-family:'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight:700;
    font-style:normal;
    font-size:36px;
    color:#FFFFFF;
    text-align:center;
  }
  #u611 {
    position:absolute;
    left:0px;
    top:0px;
    width:145px;
    white-space:nowrap;
  }
  #u612_img {
    position:absolute;
    left:0px;
    top:0px;
    width:45px;
    height:45px;
  }
  #u612 {
    position:absolute;
    left:37px;
    top:26px;
    width:45px;
    height:45px;
  }
  #u613 {
    position:absolute;
    left:2px;
    top:14px;
    width:41px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u614 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u615_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1429px;
    height:646px;
    background:inherit;
    background-color:rgba(242, 242, 242, 1);
    box-sizing:border-box;
    border-width:1px;
    border-style:solid;
    border-color:rgba(121, 121, 121, 1);
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  #u615 {
    position:absolute;
    left:-5px;
    top:86px;
    width:1429px;
    height:646px;
  }
  #u616 {
    position:absolute;
    left:2px;
    top:315px;
    width:1425px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u617_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1429px;
    height:82px;
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
  #u617 {
    position:absolute;
    left:-5px;
    top:86px;
    width:1429px;
    height:82px;
  }
  #u618 {
    position:absolute;
    left:2px;
    top:33px;
    width:1425px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u619 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u620_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1429px;
    height:82px;
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
  #u620 {
    position:absolute;
    left:-5px;
    top:493px;
    width:1429px;
    height:82px;
  }
  #u621 {
    position:absolute;
    left:2px;
    top:33px;
    width:1425px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u622_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1429px;
    height:82px;
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
  #u622 {
    position:absolute;
    left:-5px;
    top:574px;
    width:1429px;
    height:82px;
  }
  #u623 {
    position:absolute;
    left:2px;
    top:33px;
    width:1425px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u624 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u625_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1440px;
    height:82px;
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
  #u625 {
    position:absolute;
    left:-16px;
    top:248px;
    width:1440px;
    height:82px;
  }
  #u626 {
    position:absolute;
    left:2px;
    top:33px;
    width:1436px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u627 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u628_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1440px;
    height:82px;
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
  #u628 {
    position:absolute;
    left:-16px;
    top:167px;
    width:1440px;
    height:82px;
  }
  #u629 {
    position:absolute;
    left:2px;
    top:33px;
    width:1436px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u630 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u631_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1440px;
    height:82px;
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
  #u631 {
    position:absolute;
    left:-16px;
    top:329px;
    width:1440px;
    height:82px;
  }
  #u632 {
    position:absolute;
    left:2px;
    top:33px;
    width:1436px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u633 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u634_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1429px;
    height:82px;
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
  #u634 {
    position:absolute;
    left:-5px;
    top:411px;
    width:1429px;
    height:82px;
  }
  #u635 {
    position:absolute;
    left:2px;
    top:33px;
    width:1425px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u636_img {
    position:absolute;
    left:0px;
    top:0px;
    width:34px;
    height:34px;
  }
  #u636 {
    position:absolute;
    left:557px;
    top:672px;
    width:34px;
    height:34px;
  }
  #u637 {
    position:absolute;
    left:2px;
    top:9px;
    width:30px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u638_img {
    position:absolute;
    left:0px;
    top:0px;
    width:34px;
    height:34px;
  }
  #u638 {
    position:absolute;
    left:764px;
    top:674px;
    width:34px;
    height:34px;
  }
  #u639 {
    position:absolute;
    left:2px;
    top:9px;
    width:30px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u640_img {
    position:absolute;
    left:0px;
    top:0px;
    width:34px;
    height:34px;
  }
  #u640 {
    position:absolute;
    left:618px;
    top:674px;
    width:34px;
    height:34px;
  }
  #u641 {
    position:absolute;
    left:2px;
    top:9px;
    width:30px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u642_img {
    position:absolute;
    left:0px;
    top:0px;
    width:34px;
    height:34px;
  }
  #u642 {
    position:absolute;
    left:693px;
    top:675px;
    width:34px;
    height:34px;
  }
  #u643 {
    position:absolute;
    left:2px;
    top:9px;
    width:30px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u644 {
    position:absolute;
    left:148px;
    top:121px;
    width:142px;
    height:28px;
  }
  #u644_input {
    position:absolute;
    left:0px;
    top:0px;
    width:142px;
    height:28px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#000000;
  }
  #u644_input:disabled {
    color:grayText;
  }
  #u645_div {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    height:27px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u645 {
    position:absolute;
    left:63px;
    top:116px;
    width:85px;
    height:27px;
    font-size:28px;
  }
  #u646 {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    white-space:nowrap;
  }
  #u647 {
    position:absolute;
    left:443px;
    top:123px;
    width:119px;
    height:50px;
  }
  #u647_input {
    position:absolute;
    left:0px;
    top:0px;
    width:119px;
    height:28px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#000000;
  }
  #u647_input:disabled {
    color:grayText;
  }
  #u648_div {
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
  #u648 {
    position:absolute;
    left:348px;
    top:117px;
    width:85px;
    height:33px;
    font-size:28px;
  }
  #u649 {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    white-space:nowrap;
  }
  #u650_div {
    position:absolute;
    left:0px;
    top:0px;
    width:10px;
    height:23px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u650 {
    position:absolute;
    left:572px;
    top:117px;
    width:10px;
    height:23px;
    font-size:28px;
  }
  #u651 {
    position:absolute;
    left:0px;
    top:0px;
    width:10px;
    white-space:nowrap;
  }
  #u652 {
    position:absolute;
    left:876px;
    top:115px;
    width:144px;
    height:31px;
  }
  #u652_input {
    position:absolute;
    left:0px;
    top:0px;
    width:144px;
    height:31px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#000000;
  }
  #u652_input:disabled {
    color:grayText;
  }
  #u653_div {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    height:23px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u653 {
    position:absolute;
    left:781px;
    top:116px;
    width:85px;
    height:23px;
    font-size:28px;
  }
  #u654 {
    position:absolute;
    left:0px;
    top:0px;
    width:85px;
    white-space:nowrap;
  }
  #u655_div {
    position:absolute;
    left:0px;
    top:0px;
    width:1px;
    height:16px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:28px;
  }
  #u655 {
    position:absolute;
    left:975px;
    top:439px;
    width:1px;
    height:16px;
    font-size:28px;
  }
  #u656 {
    position:absolute;
    left:0px;
    top:0px;
    width:1px;
    visibility:hidden;
    white-space:nowrap;
  }
  #u657_div {
    position:absolute;
    left:0px;
    top:0px;
    width:121px;
    height:23px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:20px;
  }
  #u657 {
    position:absolute;
    left:1054px;
    top:201px;
    width:121px;
    height:23px;
    font-size:20px;
  }
  #u658 {
    position:absolute;
    left:0px;
    top:0px;
    width:121px;
    white-space:nowrap;
  }
  #u659 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u660_div {
    position:absolute;
    left:0px;
    top:0px;
    width:122px;
    height:35px;
    background:inherit;
    background-color:rgba(255, 153, 51, 1);
    border:none;
    border-radius:5px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  #u660 {
    position:absolute;
    left:1210px;
    top:116px;
    width:122px;
    height:35px;
  }
  #u661 {
    position:absolute;
    left:2px;
    top:10px;
    width:118px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u662_div {
    position:absolute;
    left:0px;
    top:0px;
    width:97px;
    height:20px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:20px;
    color:#FFFFFF;
    text-align:center;
  }
  #u662 {
    position:absolute;
    left:1223px;
    top:123px;
    width:97px;
    height:20px;
    font-size:20px;
    color:#FFFFFF;
    text-align:center;
  }
  #u663 {
    position:absolute;
    left:0px;
    top:0px;
    width:97px;
    word-wrap:break-word;
  }
  #u664 {
    position:absolute;
    left:0px;
    top:0px;
    width:0px;
    height:0px;
  }
  #u665_div {
    position:absolute;
    left:0px;
    top:0px;
    width:122px;
    height:35px;
    background:inherit;
    background-color:rgba(255, 153, 51, 1);
    border:none;
    border-radius:5px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
  }
  #u665 {
    position:absolute;
    left:1212px;
    top:193px;
    width:122px;
    height:35px;
  }
  #u666 {
    position:absolute;
    left:2px;
    top:10px;
    width:118px;
    visibility:hidden;
    word-wrap:break-word;
  }
  #u667_div {
    position:absolute;
    left:0px;
    top:0px;
    width:97px;
    height:20px;
    background:inherit;
    background-color:rgba(255, 255, 255, 0);
    border:none;
    border-radius:0px;
    -moz-box-shadow:none;
    -webkit-box-shadow:none;
    box-shadow:none;
    font-size:20px;
    color:#FFFFFF;
    text-align:center;
  }
  #u667 {
    position:absolute;
    left:1225px;
    top:201px;
    width:97px;
    height:20px;
    font-size:20px;
    color:#FFFFFF;
    text-align:center;
  }
  #u668 {
    position:absolute;
    left:0px;
    top:0px;
    width:97px;
    word-wrap:break-word;
  }
  #u669_div {
    position:absolute;
    left:0px;
    top:0px;
    width:100px;
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
  #u670 {
    position:absolute;
    left:0px;
    top:0px;
    width:100px;
    word-wrap:break-word;
  }
  #u671_div {
    position:absolute;
    left:0px;
    top:0px;
    width:116px;
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
  #u671 {
    position:absolute;
    left:267px;
    top:203px;
    width:116px;
    height:24px;
    font-size:20px;
  }
  #u672 {
    position:absolute;
    left:0px;
    top:0px;
    width:116px;
    word-wrap:break-word;
  }
  #u673_div {
    position:absolute;
    left:0px;
    top:0px;
    width:129px;
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
  #u673 {
    position:absolute;
    left:450px;
    top:202px;
    width:129px;
    height:24px;
    font-size:20px;
  }
  #u674 {
    position:absolute;
    left:0px;
    top:0px;
    width:129px;
    word-wrap:break-word;
  }
  #u675_div {
    position:absolute;
    left:0px;
    top:0px;
    width:97px;
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
  #u675 {
    position:absolute;
    left:671px;
    top:202px;
    width:97px;
    height:24px;
    font-size:20px;
  }
  #u676 {
    position:absolute;
    left:0px;
    top:0px;
    width:97px;
    word-wrap:break-word;
  }
  #u677 {
    position:absolute;
    left:597px;
    top:123px;
    width:127px;
    height:23px;
  }
  #u677_input {
    position:absolute;
    left:0px;
    top:0px;
    width:127px;
    height:28px;
    font-family:'Arial Normal', 'Arial';
    font-weight:400;
    font-style:normal;
    font-size:20px;
    text-decoration:none;
    color:#000000;
  }
  #u677_input:disabled {
    color:grayText;
  }
  #t1 {
    position:absolute;
    top:166px;

  }

</style>
