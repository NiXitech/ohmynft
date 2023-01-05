<template>
  <div class="home-page">
    <div class="congratulations">
      <div class="attention-info">
        Earn Big Rewards With Referrals！
      </div>
    </div>
    <div class="detail-content">
      <van-row gutter="40">
        <van-col span="12">
          <div class="card-img">
            <img src="../assets/tmpImg/cardImg.png" />
          </div>
        </van-col>
        <van-col span="12">
          <div class="card-info">
            <div class="info-top">
              <div class="card-title">
                {{ cardtitle }}
              </div>
              <div class="card-number">
                <span v-for="item in [1, 2, 3]" :key="item">
                  <img src="../assets/partImg/redeem.png" alt="">
                  {{ item }}
                </span>
              </div>
            </div>
            <div class="info-bottom">

            </div>
          </div>
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
      cardtitle: 'Apple Watch Series 8 - Starlight Aluminum Case with Sport Loop',
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

    .card-img {
      .wh(740px, 740px);
      border-radius: 24px;
      border: 1px solid #fff;

      img {
        .wh(100%, 100%);
      }
    }

    .card-info {
      .wh(740px, 740px);
      border: 1px solid #fff;

      .info-top {
        width: 100%;

        .card-title {
          font-family: HarmonyOS_Sans_SC_Bold;
          font-size: 24px;
          font-weight: bold;
          line-height: 24px;
          letter-spacing: 0px;
        }
      }

      .info-bottom {
        width: 100%;
      }
    }
  }
}
</style>
