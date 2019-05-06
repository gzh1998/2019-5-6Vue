<template>
  <div class="detail">
    <p>我是二级路由页面</p>
    <div class="list_box" v-for="(item,index) in this.$route.params.listdata" :key="index">
      <a>{{item.name}}</a>
      <img :src="item.pic" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
  watch:{
    
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
.detail {
  width: 100%;
  height: 100%;
  background:skyblue;
  color: #fff;
  font-size: 30px;
  text-align: center;
  padding: 200px;
   box-sizing: border-box;
   display: flex;
   flex-wrap: wrap;
   p{
     width: 100%;
   }
  .list_box{
    width: 20%;
    color:#fff;
    font-size: 20px;
    height:80px;
    display: flex;
    align-items: center;
    img{
      width: 50px;
      height: 50px;
      margin-left: 10px;
    }
  }
}
</style>