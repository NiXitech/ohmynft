<template>
  <div class="homepage">
    <div class="goods">
      <van-skeleton title :row="3" :loading="loading">

        <div class="slogen">
          <Slogen></Slogen>
        </div>

        <div class="feature-card" v-for="feature in featureList" :key="feature.title">
          <div class="feature-title">
            {{ feature.title }}
          </div>
          <div class="card-List">
            <NFTCard :cardData="item" v-for="item in feature.cardList" :key="item.cardName"></NFTCard>
          </div>
        </div>

        <div class="card-referrals-dashborde">
          <referral-card> </referral-card>
        </div>

        <div class="feature-card">
          <div class="feature-title">
            ALL
          </div>
          <div class="card-List">
            <NFTCard :cardData="item" v-for="item in allCardList" :key="item.cardName"></NFTCard>
          </div>
        </div>
      </van-skeleton>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import Slogen from "../components/Slogen.vue";
import NFTCard from '../components/NftCard.vue';
import ReferralCard from '../components/ReferralCard.vue';
export default {
  components: {
    Slogen,
    NFTCard,
    ReferralCard
  },
  setup() {
    const state = reactive({
      loading: true,
      logos: [
        { text: "Metamask Connect", imgSrc: require("../assets/partImg/metamask.png") },
        { text: "Binance Connect", imgSrc: require("../assets/partImg/binance.png") },
        { text: "Redeem Connect", imgSrc: require("../assets/partImg/redeem.png") },
        { text: "My Referral", imgSrc: require("../assets/partImg/referral.png") },
      ],
      featureList: [
        { title: 'Feature', cardList: [{ cardName: 'NFT01', cardValue: '#1', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT02', cardValue: '#2675', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT03', cardValue: '#3', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT04', cardValue: '#4', BUSD: '0.01', unit: 'BUSD', progress: 60 }] },
        { title: 'Up Coming', cardList: [{ cardName: 'up coming01', cardValue: '1', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'up coming02', cardValue: '2', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'up coming03', cardValue: '3', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'up coming04', cardValue: '4', BUSD: '0.01', unit: 'BUSD', progress: 60 }] },
        { title: 'Ending Soon', cardList: [{ cardName: 'up coming01', cardValue: '1', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'up coming02', cardValue: '2', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'up coming03', cardValue: '3', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'up coming04', cardValue: '4', BUSD: '0.01', unit: 'BUSD', progress: 60 }] },
      ],
      allCardList: [
        { cardName: 'NFT01', cardValue: '#1', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT02', cardValue: '#2675', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT03', cardValue: '#3', BUSD: '0.01', unit: 'BUSD', progress: 60 }, { cardName: 'NFT04', cardValue: '#4', BUSD: '0.01', unit: 'BUSD', progress: 60 }
      ]
    });

    onMounted(() => {
      state.loading = false;
    });

    // const goToDetail = (item) => {
    //   router.push({ path: `/product/${item.goodsId}` })
    // }

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";

.homepage {
  padding: 72px 200px 0px 200px;

  .goods {
    .slogen {
      padding-top: 112px;
      .wh(100%, auto);
    }

    .feature-card {
      margin-top: 62px;

      .feature-title {
        font-family: HarmonyOS_Sans_Bold;
        font-size: 34px;
        font-weight: bold;
        line-height: 34px;
        letter-spacing: 0px;
        margin-bottom: 36px;
        color: #FFFFFF;
      }

      .card-List {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }

    .card-referrals-dashborde {
      margin-top: 72px;
      border: 2px dashed #4a4d57;
    }
  }
}
</style>
