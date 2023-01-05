<template>
  <div class="card-content">
    <div class="copyRight">
      COPYRIGHT @ 2022 OH MY NFT
    </div>
    <div class="link-other">
      <div class="linkList" v-for="item in linkList" :key="item">
        {{ item.name }}
      </div>
      <img src="../assets/partImg/twitter.png" />
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue'
export default {
  setup() {
    const state = {
      linkList: [
        { name: 'FAQ' },
        { name: 'PRIVACY POLICY' },
        { name: 'COOKIE POLICY' },
        { name: 'TERMS AND CONDITIONS' },
      ]
    };
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";

.card-content {
  .wh(100%, 120px);
  border-top: 1px solid #FFFFFF;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;

  .copyRight {
    width: 20%;
    padding-left: 200px;
    margin-top: 53px;
    font-family: HarmonyOS_Sans_Bold;
    font-size: 16px;
    font-weight: bold;
    line-height: 14px;
    color: #FFFFFF;
  }

  .link-other {
    padding-right: 200px;
    margin-top: 53px;
    width: 40%;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;

    font-family: HarmonyOS_Sans_Bold;
    font-size: 16px;
    font-weight: bold;
    line-height: 18px;
    color: #FFFFFF;

    img {
      width: 20px;
      height: 17px;
      border-radius: 8px;
    }
  }
}
</style>
