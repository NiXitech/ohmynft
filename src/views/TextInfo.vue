<template>
  <div class="activity-page">
    <div class="congratulations">
      <div class="attention-info">
        Earn Big Rewards With Referrals！
      </div>
    </div>
    <div class="text-title" @click="backInfoHome">
      FAQ
    </div>
    <div class="text-list" v-if="detailInfo">
      <div class="text-row" v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8]" :key="item" @click="showDetailInfo(item)">
        <div class="text-column">
          Questions {{index + 1}}
        </div>
        <div class="text-column-time">
          2023-01-03
        </div>
      </div>
    </div>
    <div class="text-detail" v-if="!detailInfo">
      {{ textInfo }}
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  components: {

  },
  setup() {
    const state = reactive({
      detailInfo: true,
      textInfo: 'All professors and associate professors are requested to meet in the college conference room on Saturday, August 18, at 2:00 p. m. to discuss questions concerning international academic exchanges.All professors and associate professors are requested to meet in the college conference room on Saturday, August 18, at 2:00 p. m. to discuss questions concerning international academic exchanges.All professors and associate professors are requested to meet in the college conference room on Saturday, August 18, at 2:00 p. m. to discuss questions concerning international academic exchanges.All professors and associate professors are requested to meet in the college conference room on Saturday, August 18, at 2:00 p. m. to discuss questions concerning international academic exchanges.All professors and associate professors are requested to meet in the college conference room on Saturday, August 18, at 2:00 p. m. to discuss questions concerning international academic exchanges.All professors and associate professors are requested to meet in the college conference room on Saturday, August 18, at 2:00 p. m. to discuss questions concerning international academic exchanges.',
    });

    const showDetailInfo = (item) => {
      state.detailInfo = false;
      console.log('this is showDetailInfo ---->', item)
    }

    const backInfoHome = ()=> {
      state.detailInfo = !state.detailInfo
    }

    return {
      ...toRefs(state),
      showDetailInfo,
      backInfoHome
    };
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";

.activity-page {
  min-height: 768px;

  .congratulations {
    .wh(100%, 38px);
    padding-top: 72px;
    background-color: rgba(255, 255, 255, 0.05);

    .attention-info {
      .wh(100%, 38px);
      color: rgb(255, 255, 255);
      font-family: AlibabaPuHuiTi-2-55-Regular;
      font-size: 14px;
      font-weight: normal;
      line-height: 38px;
      text-align: center;
      letter-spacing: 0px;
    }
  }

  .text-title {
    margin: 72px 200px 0px 200px;
    padding-bottom: 24px;
    font-family: HarmonyOS_Sans_Bold;
    font-size: 16px;
    font-weight: bold;
    line-height: 16px;
    color: #3A8AFF;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }

  .text-list {
    margin: 0px 200px;

    .text-row {
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);
      height: 65px;
      font-family: HarmonyOS_Sans_Regular;
      font-size: 16px;
      font-weight: normal;
      line-height: 65px;
      color: #FFFFFF;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .text-column {
        width: 80%;
        cursor: pointer;
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; //溢出不换行
      }
    }
  }

  .text-detail {
    margin: 48px 200px 0px;
    font-family: HarmonyOS_Sans_Regular;
    font-size: 14px;
    font-weight: normal;
    line-height: 21px;
    color: #FFFFFF;
  }
}
</style>
