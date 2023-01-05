<template>
  <div class="home-page">
    <div class="congratulations">
      <div class="attention-info">
        Earn Big Rewards With Referrals！
      </div>
    </div>
    <div class="detail-content">
      <van-row>
        <van-col>
          1234
        </van-col>
        <van-col>
          1234
        </van-col>
      </van-row>
      <van-row>
        <van-col>
          1234
        </van-col>
        <van-col>
          5678
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
export default {
  components: {

  },
  setup() {
    const state = reactive({

    });

    onMounted(() => {
      state.loading = false;
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";

.home-page {
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

  .detail-content {
    margin: 72px 200px 0px 200px;
  }
}
</style>
