<template>
  <div class="card-content">
    <div class="card-img">
      <img src="../assets/tmpImg/cardImg.png" />
      <div class="card-id">
        {{ cardData.cardValue }}
      </div>
    </div>
    <div class="card-detail">
      <div class="card-name-value">
        <div class="card-name">{{ cardData.cardName }}</div>
        <div class="card-value">{{ cardData.cardValue }}</div>
      </div>
    </div>
    <div class="card-busd">
      <span>{{ cardData.BUSD }} {{ cardData.unit }}</span>
      <img src="../assets/partImg/binance.png" />
    </div>
    <div class="card-progress">
      <div class="progress-bar">
        <van-progress :percentage="cardData.progress" pivot-text="" stroke-width="8" color="#1F95FF" />
      </div>
      <span>
        {{ cardData.progress }}%
      </span>
    </div>
    <div class="card-button">
      <button>
        Enter now
      </button>
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
  .wh(350px, 530px);
  margin-bottom: 40px;
  border-radius: 24px;
  background: #443c4a;
  display: flex;
  flex-direction: column;

  .card-img {
    margin-top: 20px;
    margin-left: 20px;
    width: 310px;
    height: 310px;
    opacity: 1;

    img {
      .wh (100%, 100%);
      border-radius: 24px;
    }

    .card-id {
      width: 54px;
      height: 30px;
      line-height: 30px;
      border-radius: 15px;
      position: relative;
      top: -40px;
      left: 8px;
      background: #fff;
      text-align: center;

      font-family: AlibabaPuHuiTi-2-95-ExtraBold;
      font-size: 14px;
      font-weight: 800;
      color: #3E3E3E;
    }
  }

  .card-detail {
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;

    .card-name-value {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .card-name {
        font-family: AlibabaPuHuiTi-2-115-Black;
        font-size: 20px;
        font-weight: 1000;
        line-height: 20px;
        color: #ffffff;
      }

      .card-value {
        font-family: AlibabaPuHuiTi-2-55-Regular;
        font-size: 20px;
        font-weight: normal;
        line-height: 20px;
        text-align: right;
        letter-spacing: 0px;
        color: #ffffff;
      }
    }
  }

  .card-busd {
    margin-top: 16px;
    margin-left: 20px;
    font-family: AlibabaPuHuiTi_2_95_ExtraBold;
    font-size: 24px;
    font-weight: 800;
    line-height: 24px;
    letter-spacing: 0px;
    color: #2395FF;

    img {
      .wh(20px, 20px);
      margin-left: 5px;
    }
  }

  .card-progress {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    display: inline-flex;
    flex-direction: row;
    justify-content: space-between;

    .progress-bar {
      width: 268px;
      padding-top: 4px;
    }

    span {
      font-family: AlibabaPuHuiTi-2-115-Black;
      font-size: 14px;
      font-weight: 1000;
      line-height: 14px;
      letter-spacing: 0px;
      color: #3A8AFF;
    }
  }

  .card-button {
    button {
      width: 310px;
      height: 60px;
      line-height: 60px;
      border-radius: 30px;
      opacity: 1;
      background: #3A8AFF;
      margin: 16px 20px 0px;
      text-align: center;
      font-family: AlibabaPuHuiTi-2-95-ExtraBold;
      font-size: 20px;
      font-weight: 800;
      color: #fff;
    }
  }
}
</style>
