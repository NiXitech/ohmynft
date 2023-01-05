<template>
  <div class="card-content">
    <div class="card-left">
      <div class="slogen-Info">
        <span>
          Earn Big Rewards With
          <div class="referrals">Referrals!</div>
        </span>
      </div>
      <div class="slogen-detail">
        <div>
          Invite good friends to connect the wallet and participate in the event,
          you can get up to 25% commission, what are you waiting for, send the
          link to your friends!
        </div>
      </div>
      <div class="button-share">
        <button>
          Share On Twitter
        </button>
        <button>
          Copy Link
          <!-- <van-icon name="records"></van-icon> -->
        </button>
      </div>
    </div>
    <div class="card-right">
      <!-- <img src="../assets/partImg/slogen.png" /> -->
    </div>
  </div>
</template>

<script>
import { toRefs, onMounted } from "vue";
import { Icon } from 'vant';
export default {
  setup() {
    // const route = useRoute()
    // const store = useStore()
    const state = {};
    onMounted(() => { });

    return {
      ...toRefs(state),
      Icon
    };
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";

.card-content {
  .wh(100%, 100%);
  display: flex;
  justify-content: space-between;

  .card-left {
    .slogen-Info {
      width: 476px;
      height: 156px;
      opacity: 1;
      font-family: HarmonyOS_Sans_Bold;
      font-size: 52px;
      font-weight: bold;
      line-height: 78px;
      color: #ffffff;

      .referrals {
        opacity: 1;
        /* oh字体/大装饰 */
        font-family: HarmonyOS_Sans_SC_Bold;
        font-size: 52px;
        font-weight: bold;
        display: inline-block;
        background: linear-gradient(270deg, #F5DB45 0%, #F27300 99%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .slogen-detail {
      margin-top: 48px;
      width: 476px;
      height: 42px;
      opacity: 1;
      font-family: HarmonyOS_Sans_Regular;
      font-size: 14px;
      font-weight: normal;
      line-height: 21px;
      color: #ffffff;
    }

    .button-share {
      margin-top: 64px;

      button {
        width: 222px;
        height: 48px;
        border-radius: 24px;
        opacity: 1;
        font-family: HarmonyOS_Sans_Medium;
        font-size: 16px;
        font-weight: 500;
        line-height: 16px;
        text-align: center;
        color: #ffffff;
        margin-right: 32px;
        cursor: pointer;
      }

      button:nth-child(1) {
        background: #3a8aff;
      }

      button:nth-child(2) {
        width: 222px;
        height: 48px;
        border-radius: 24px;
        opacity: 1;
        background: rgba(255, 255, 255, 0);
        border: 1px solid #3A8AFF;
      }
    }
  }

  .card-right {
    .wh(740px, 426px);

    background: url('../assets/partImg/slogen.png') center 45% no-repeat;
  }
}
</style>
