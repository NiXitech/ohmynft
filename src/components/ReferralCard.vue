<template>
  <div class="card-content">
    <div class="card-referrals">
      <div class="dash-title">
        Earn Big Rewards With Referrals!
      </div>

      <div class="mention-info">
        Earn up to 2.5% commission when you invite friends to connect their wallets and participate in the event using
        your referral link.
      </div>

      <div class="id-adress">
        <span>
          2h23u3dio34ids9x9ks0g90s0
        </span>
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
  </div>
</template>

<script>
export default {
  props: ['cardData'],
  setup(props, ctx) {
    console.log("props", props, ctx);
    return {};
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";

.card-content {
  .card-referrals {
    .wh(100%, 546px);
    background: #293B75;
    padding-top: 120px;
    border-radius: 48px;
    opacity: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    .dash-title {
      text-align: center;
      width: 1054px;
      height: 85px;
      // margin-top: 48px;
      font-family: HarmonyOS_Sans_Bold;
      font-size: 52px;
      font-weight: bold;
      line-height: 85px;
      letter-spacing: 0px;
      color: #FFFFFF;
      background: url('../assets/partImg/referrals.png');
      background-size: contain;
    }

    .mention-info {
      font-family: HarmonyOS_Sans_Regular;
      font-size: 14px;
      font-weight: normal;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0px;
      color: #FFFFFF;
    }

    .id-adress {
      width: 660px;
      height: 64px;
      line-height: 64px;
      border-radius: 32px;
      background-color: #FFFFFF;
      opacity: 0.1;
      text-align: left;
      padding-left: 64px;

      span {
        font-family: HarmonyOS_Sans_Regular;
        font-size: 16px;
        font-weight: normal;
        line-height: 16px;
        letter-spacing: 0px;
        background-color: #FFFFFF;
      }
    }

    .button-share {
      margin-bottom: 120px;
      width: 100%;
      text-align: center;
      

      button {
        .wh(318px, 64px);
        border-radius: 32px;
        opacity: 1;
        font-family: HarmonyOS_Sans_Bold;
        font-size: 16px;
        font-weight: bold;
        line-height: 16px;
        letter-spacing: 0px;
        color: #ffffff;
        background: #3a8aff;
        margin-right: 24px;
        cursor: pointer;
      }
    }
  }
}
</style>
