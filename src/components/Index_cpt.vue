<template>
  <div class="index_cpt">
    <p>我是子组件巴拉巴拉巴拉</p>
    <p>父组件给我传参了{{gocpt}}</p>
    <div class="Index_box">
      <span @click="add()">+</span>
      <span @click="remove()">-</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "",
  data() {
    return {
      flag: false,
      num: 0
    };
  },
  props: {
    gocpt: {
      type: null
    }
  },
  mounted() {},
  methods: {
    add(){
      this.num++
      this.$emit('goFarthernum',this.num)
    }, 
    remove(){
      if(this.num<=0){
        this.num = 0
      }else{
      this.num--
      }
       this.$emit('goFarthernum',this.num)
    }
  }
};
</script>

<style lang="scss">
.index_cpt {
  width: 100%;
  box-sizing: border-box;
  p {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40%;
    color: green;
    font-size: 20px;
    font-weight: normal;
  }
  .Index_box {
    width: 20%;
  margin-left: 50%;
  transform:translateX(-50%);
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom:50px;
    span {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: solid 1px green;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: green;
      font-weight: 900;
      cursor: pointer;
    }
  }
}
</style>