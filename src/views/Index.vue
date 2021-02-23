<template>
  <div class="wrapper">
    <h6>重新学习Vue的第一天！</h6>
    <button @click="goChildren()">点我向子组件传参</button>
    <IndexCpt :gocpt="isShow" @goFarthernum="gofarther"></IndexCpt>
    <div class="num_cont">{{ cont }}</div>
    <button @click="goDetail()">去详情页看看</button>
    <button @click="goList()">打开二级路由页面</button>
    <transition enter-active-class="animated zoomInLeft">
      <router-view />
    </transition>
    <mt-checklist
      v-model="value"
      :options="options"
      @change="checkbtn()"
      :checked="true"
    ></mt-checklist>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
      >全选</el-checkbox
    >
    <div style="margin: 15px 0"></div>
    <el-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{
        city
      }}</el-checkbox>
    </el-checkbox-group>
    <div class="imgList">
      <div class="listSon" v-for="(item, index) in imgArray" :key="index">
        <img v-lazy="item" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import IndexCpt from "../components/Index_cpt";
import Vue from "vue";
//引用全局挂载的store vuex
import { mapState, mapActions } from "vuex";
import { Checklist } from "mint-ui";
const cityOptions = ["北京", "上海", "广州", "深圳"];
export default {
  name: "",
  data() {
    return {
      isShow: false,
      cont: 0,
      value: [],
      options: [
        {
          label: "A选项",
          value: "A",
        },
        {
          label: "B选项",
          value: "B",
        },
        {
          label: "C选项",
          value: "C",
        },
        {
          label: "D选项",
          value: "D",
        },
      ],
      checkAll: false,
      checkedCities: ["北京"],
      cities: cityOptions,
      isIndeterminate: true,
      imgArray: [
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=23502887,33088315&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3044252915,3000135763&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2039372190,1416636276&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2700488562,1599755667&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2835461829,991315723&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2793360253,957929236&fm=26&gp=0.jpg",
      ],
    };
  },
  components: {
    IndexCpt,
  },
  computed: {
    ...mapState({
      Datalist: (state) => state.app.DataList,
    }),
  },
  mounted() {
    this.getList();
  },
  methods: {
    ...mapActions({
      getList: "app/getList",
    }),
    goChildren() {
      this.isShow = !this.isShow;
    },
    gofarther(num) {
      this.cont = num;
    },
    goDetail() {
      this.$router.push({ path: `/detail?id=${this.cont}` });
    },
    goList() {
      this.$router.push({
        name: "list",
        params: { listdata: this.Datalist.data },
      });
    },
    checkbtn() {
      console.log(this.value);
    },
    handleCheckAllChange(val) {
      console.log(val);
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>
<style lang="scss">
.wrapper {
  width: 100%;
  background: #f4f4f5;
  color: #1b1b1b;
  font-size: 0.4rem;
  overflow-x: hidden;
  h6 {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    margin: 0;
    font-size: 30px;
    font-weight: normal;
    color: orange;
  }
  button {
    width: 140px;
    background: orange;
    color: #fff;
    text-align: center;
    border: none;
    font-size: 15px;
    border-radius: 40px;
    margin: 20px 50%;
    transform: translateX(-50%);
    outline: none;
    cursor: pointer;
  }
  .num_cont {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: orange;
    font-weight: 900;
    text-align: center;
  }
  .el-checkbox {
    margin-left: 30%;
  }
  .el-checkbox-group {
    display: flex;
    flex-direction: column;
  }
  img {
    width: 100%;
  }
}
</style>