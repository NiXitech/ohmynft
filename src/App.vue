<template>
  <div id="app">
    <van-config-provider :theme="theme">
      <header class="norem-home-header">
        <!-- <van-grid :border="false" :column-num="headerTitle.length + 2" clickable="true">
          <van-grid-item :text="projectName">
            <van-button round size="mini" @click="changeTheme" type="success">切换主题</van-button>
          </van-grid-item>
          <van-grid-item v-for="value in headerTitle" :key="value" :to="value.routeTo">
            {{ value.name }}
          </van-grid-item>
          <van-grid-item text="Connect Wallet"></van-grid-item>
        </van-grid> -->
        <div class="norem-project-title">
          <!-- <img src="./assets/projectlogo.png" /> -->
        </div>
        <div class="norem-project-tabs">
          <div v-for="(item, index) in homeTabs" :key="item" :tabindex="index" @click="changeTab(item.routeTo)">
            {{ item.name }}
          </div>
        </div>
        <div class="norem-project-wallet" @mouseover="showWhyConnect(true)" @mouseleave="showWhyConnect(false)">
          <van-popover :show="showPopover" trigger="">
            <div class="popoverselfness" :style="{ width: '350px', height: '166px' }">
              <div class="titleness" :style="{
                textAlign: 'center',
                fontSize: '18px',
                lineHeight: '18px',
                color: '#fff',
                marginTop: '24px',
                fontFamily: 'AlibabaPuHuiTi-2-95-ExtraBold',
              }">
                Why Connect?  
              </div>
              <div class="detailInfo" :style="{
                width: '302px',
                height: '105px',
                margin: '16px 24px',
                opacity: '0.6',
                fontFamily: 'AlibabaPuHuiTi-2-55-Regular',
                fontSize: '14px',
                lineHeight: '21px',
                textAlign: 'justify',
              }">
                {{ whyConnect }}
              </div>
            </div>
            <template #reference>
              <button>
                Connect Wallet
              </button>
            </template>
          </van-popover>
        </div>
      </header>

      <router-view class="router-view" v-slot="{ Component }">
        <transition :name="transitionName">
          <component :is="Component" />
        </transition>
      </router-view>
      <!-- <router-view class="router-view"></router-view> -->

      <div class="footer">
        <Footer></Footer>
      </div>
    </van-config-provider>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { RouterView, useRouter } from "vue-router";
import Footer from './components/Footer.vue';
export default {
  setup() {
    const router = useRouter();
    const state = reactive({
      showPopover: false,
      homeTabs: [
        { id: "LiveNow", name: "LiveNow", routeTo: "/" },
        { id: "Completed", name: "Completed", routeTo: "/completed" },
        { id: "Activity", name: "Activity", routeTo: "/activity" },
        { id: "MyEntries", name: "My Entries", routeTo: "/myentries" },
        { id: "FAQ", name: "FAQ", routeTo: "/faq" },
        { id: "NFTDetail", name: "detail", routeTo: "/detail" },
      ],
      projectName: "Oh My NFT",
      transitionName: "slide-right",
      theme: "dark",
      whyConnect:
        "OH MY NFT is a blockchain-based and secure platform. Participation requires you to register your wallet and email. No private data is shared with us.",
    });

    router.beforeEach((to, from) => {
      if (to.meta.index > from.meta.index) {
        state.transitionName = "slide-right"; // 向左滑动
      } else if (to.meta.index < from.meta.index) {
        // 由次级到主级
        state.transitionName = "slide-left";
      } else {
        state.transitionName = ""; // 同级无过渡效果
      }
    });

    // 切换主题
    // const changeTheme = () => {
    //   if (state.theme === "light") {
    //     state.theme = "dark";
    //   } else {
    //     state.theme = "light";
    //   }
    // };

    const showWhyConnect = (value) => {
      state.showPopover = value;
    };

    const changeTab = (routeTo) => {
      router.push({ path: routeTo, params: {} });
    };

    return {
      ...toRefs(state),
      changeTab,
      showWhyConnect,
    };
  },
  components: { RouterView, Footer },
};
</script>

<style lang="less">
@import "./common/style/mixin";

html,
body {
  height: auto;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
  /* Chrome Safari */
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-size: cover;
  background: url("./assets/background.png") no-repeat;
  background-size: 100% auto;

  .norem-home-header {
    background: url("./assets/background.png") no-repeat;
    background-size: cover;
    opacity: 1;
    position: fixed;
    z-index: 10000;
    .wh(100%, 72px);
    border-bottom: 1px solid #3a8aff;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: nowrap;

    .norem-project-title {
      .wh(11.25%, 100%);
      background: url('./assets/projectlogo.png') left center no-repeat;
      margin-left: 200px;
    }

    .norem-project-tabs :hover {
      cursor: pointer;
      color: #3a8aff;
    }

    .norem-project-tabs :focus {
      color: #3a8aff;
    }

    .norem-project-tabs {
      .wh(34.11%, auto);
      line-height: 72px;
      font-family: HarmonyOS_Sans_Bold;
      font-size: 16px;
      font-weight: bold;
      color: #FFFFFF;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .norem-project-wallet {
      .wh(159px, 72px);
      line-height: 72px;
      margin-right: 200px;

      button {
        .wh(159px, 36px);
        width: 159px;
        line-height: 36px;
        background: #3a8aff;
        border-radius: 24px;
        font-family: HarmonyOS_Sans_Bold;
        font-size: 16px;
        font-weight: bold;
        color: #FFFFFF;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}

.router-view {
  -webkit-overflow-scrolling: touch;
}

.footer {
  height: 192px;
  display: flex;
  flex-direction: column-reverse;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.van-badge--fixed {
  z-index: 1000;
}
</style>
