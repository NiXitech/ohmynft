<template>
  <div class="card-content">
    <div class="table-list">
      <div class="table-detail">
        <tr class="table-title">
          <td v-for="item in columnTitle" :key="item">
            {{ item }}
          </td>
        </tr>
        <tr class="table-row" v-for="(rowItem, index) in activityList" :key="rowItem">
          <td v-for="(item, iterator) in columnTitle" :key="item" class="table-column">
            <img :src="rowItem[index].imgSrc" v-if="iterator < 2" />
            <div class="column-line-two">
              <div class="column-line-first">
                {{ rowItem[iterator].name }}
              </div>
              <div class="column-line-second">
                {{ rowItem[iterator].productId }}
              </div>
            </div>
          </td>
        </tr>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  // props: ['activityData'],
  setup() {
    const state = reactive({
      columnTitle: [
        'Competition', 'Username', 'Entries Purchased', 'Time'
      ],
      activityList: [
        [
          { imgSrc: require('../assets/partImg/twitter.png'), name: 'claudia', productId: '#1543' },
          { imgSrc: require('../assets/partImg/twitter.png'), name: 'claudia', productId: '' },
          { imgSrc: '', name: '', productId: '#1543' },
          { imgSrc: '', name: '', productId: '#1543' },
        ], 
      ]
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";

.card-content {
  .wh(100%, 530px);
  overflow: auto;

  // ::-webkit-scrollbar {
  //   display: none;
  //   /* Chrome Safari */
  // }

  .table-list {
    height: 100%;

    .table-detail {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .table-title {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
        font-family: AlibabaPuHuiTi-2-115-Black;
        font-size: 16px;
        font-weight: 1000;
        line-height: 16px;
        color: #fff;
        padding-bottom: 24px;
      }

      .table-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 113px;
        line-height: 113px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);

        font-family: HarmonyOS-Sans-SC-Bold;
        font-size: 16px;
        font-weight: bold;
        color: #FFFFFF;

        .table-column {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          img {
            .wh(64px, 64px);
            padding-top: 25px;
            padding-right: 24px;
          }

          .column-line-two {
            height: 113px;
            padding-top: 24px;
            display: flex;
            flex-direction: column;

            .column-line-first {
              height: 24px;
              line-height: 24px;
              // font-family: HarmonyOS_Sans_SC_Bold;
              font-size: 16px;
              font-weight: bold;
              color: #FFFFFF;
            }

            .column-line-second {
              height: 24px;
              line-height: 24px;
              margin-top: 20px;
              // font-family: HarmonyOS_Sans_SC;
              font-size: 14px;
              font-weight: normal;
              color: #FAFAFA;
            }
          }
        }
      }
    }
  }
}
</style>
