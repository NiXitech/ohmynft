<template>
  <div class="home-page">
    <div class="congratulations">
      <div class="attention-info">
        Earn Big Rewards With Referrals！
      </div>
    </div>
    <div class="card-list">
      <completed-card :cardData="item" v-for="item in allCardList" :key="item.cardName"></completed-card>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import CompletedCard from '../components/CompletedCard.vue'
export default {
  components: {
    CompletedCard,
  },
  setup() {
    const state = reactive({
      allCardList: [
        { cardName: 'NFT01', cardValue: '#1', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT02', cardValue: '#2675', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT03', cardValue: '#3', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT04', cardValue: '#4', BUSD: '0.01', unit: 'BUSD', progress: 60 },
        { cardName: 'NFT01', cardValue: '#1', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT02', cardValue: '#2675', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT03', cardValue: '#3', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT04', cardValue: '#4', BUSD: '0.01', unit: 'BUSD', progress: 60 },
        { cardName: 'NFT01', cardValue: '#1', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT02', cardValue: '#2675', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT03', cardValue: '#3', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT04', cardValue: '#4', BUSD: '0.01', unit: 'BUSD', progress: 60 }
      ]
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

  .card-list {
    width: calc(100% - 400px);
    margin-top: 72px;
    padding-left: 200px;
    padding-right: 200px;
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>
