<template>
<div class="detail">
  <p>我是跳转的详情页{{this.$route.query.id}}</p>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in list" :key="item">
      <h3><img :src="item" alt=""></h3>
    </el-carousel-item>
  </el-carousel>
</div>
</template>
<script>
export default {
  name:'',
  data(){
    return{
      list:['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=346897697,2025355603&fm=26&gp=0.jpg','https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2329903964,1249285211&fm=26&gp=0.jpg','https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1658102874,3964557884&fm=26&gp=0.jpg']
    }
  },
  mounted(){

  },
  methods:{

  }
}
</script>
<style lang="scss">
  .detail{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    color: #1b1b1b;
    font-size: 30px;
    text-align: center;
    padding: 200px 100px;
    overflow-x: hidden;
    p{
      width: 100%;
      text-align: center;
    }
  }
  .el-carousel{
    width: 70%;
    margin:50px 13%;
  }
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
  }
  .el-carousel__item{
    margin: 0;
  }
  .el-carousel__container{
    height:300px;
  }
  .el-carousel__item h3{
    margin: 0;
    img{
      width: 100%;
      height: auto;
      margin: 0;
    }
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>