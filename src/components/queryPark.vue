<template>
  <div>

    <div class="header-title">
      <span><router-link to="/"><button style="font-size: 30px">返回首页</button></router-link></span>
      <div class="header-title-text">停车位查询</div>
    </div>
    <div class="header-sort bottom-border">
      <ul class="clear-float">
        <li><button style="font-size: 40px;" v-on:click="querypark(sort.zhineng)">点我查询</button></li>
        <li><button style="font-size: 40px" v-on:click="querypark(sort.feiyong)">费用排序</button></li>
        <li><button style="font-size: 40px" v-on:click="querypark(sort.juli)">距离排序</button></li>
        <li><button style="font-size: 40px" v-on:click="querypark(sort.kongfang)">剩余排序</button></li>
      </ul>
    </div>

    <div class="content bottom-border clear-float" v-for="item in responseResult">
      <div class="content-img">
        <img style="width:300px;height:150px" v-bind:src="item.imageUrl" />
      </div>
      <div >
        <p style="font-size: 30px"><strong>停车场名称：{{item.name}}</strong></p>
        <p class="p1">距离景点：{{item.distance}} km</p>
        <p class="p1">剩余空车位：{{item.vacancy}} 个</p>
        <p class="p1">停车费用：{{item.fee}} 元/小时</p>
      </div>
      <div class="right-content">

      </div>
    </div>

  </div>
</template>

<script>
import qs from 'qs'

export default {
  name: 'queryPark',
  data () {
    return {
      responseResult: [],
      sort: {
        zhineng: 1,
        juli: 2,
        feiyong: 5,
        kongfang: 4
      }
    }
  },

  methods: {
    querypark (data) {
      this.$axios.get('/api/querypark', {params: {
        flag: data
      }
      }).then(response => {
        this.responseResult = response.data
        for (let i in response.data.length) {
          this.responseResult.push(response.data[i])
        }
      }).catch(fail => {
        this.responseResult = '请求失败'
      })
    }
  },

  mounted () {
  }
}
</script>

<style scoped>

  *{
    margin: 0;
    padding: 0;
  }

  /* 公共样式 */
  .bottom-border{
    border:1px solid #000;
  }

  /* 清理浮动 */
  .clear-float::after{
    content: "";
    display:block;
    clear: both;
  }

  .header-title{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    font-size: 40px;
    color: #fff;
    background: rgb(226, 123, 82);
    text-align: right;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .header-title span{
    padding-left: 20px;
  }

  .header-title-text{
    padding-right: 40px;
  }

  .header-sort ul li{
    float: left;
    width: 15%;
    font-size: 30px;
    list-style-type: none;
    padding: 20px;
  }

  /* 控制排序图标 */
  .header-sort ul li span{
    font-size: 20px;
    color:blue;
  }

  .content{
    height: 194px;
    display: flex;
    align-items: center;
  }

  .content-img{
    padding: 20px 40px;
    float: left;
  }

  .p1{
    font-size: 20px;
  }

  .middle-content > p,.right-content > p{
    margin-top: 10px;
  }

  .right-content{
    float: left;
    margin-left: 40px;
  }

</style>
