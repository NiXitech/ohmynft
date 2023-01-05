<template>
  <div class="activity-page">
    <div class="congratulations">
      <div class="attention-info">
        Earn Big Rewards With Referrals！
      </div>
    </div>
    <div class="activity-list">
      <activity-form :activityData="{}"></activity-form>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import ActivityForm from '../components/ActivityForm.vue'
export default {
  components: {
    ActivityForm,
  },
  setup() {
    const state = reactive({
      
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
@import "../common/style/mixin";

.activity-page {
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

  .activity-list {
    padding: 72px 200px 101px 200px;
  }
}
</style>
