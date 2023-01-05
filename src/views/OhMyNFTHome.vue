<template>
  <div>
    <van-tabs v-model:active="active" type="line" animated border="false">
      <van-tab title="标签 1">标签1内容 1
        <van-button class="enableEthereumButton" type="primary" loading-type="spinner" @click="connectWallet">Enable
          Ethereum</van-button>
      </van-tab>
      <van-tab title="标签 2">标签2内容 2
        <van-button class="enableEthereumButton" type="primary" loading-type="spinner" @click="metamaskConnect">Enable
          Ethereum222</van-button>
      </van-tab>
      <van-tab title="标签 3">标签3内容 3</van-tab>
      <van-tab title="标签 4">标签4内容 4</van-tab>
      <div>
        web3.js content
      </div>
    </van-tabs>
  </div>
  <div>
    slogen
    <div>
      content left
      content right
    </div>
  </div>
  <div>
    v-for cards
  </div>
</template>
<!-- <script src="https://unpkg.com/@metamask/detect-provider/dist/detect-provider.min.js"></script> -->
<script>
import { ref } from 'vue';
export default {
  name: 'home',
  components: {

  },
  setup() {
    // walletconnect接入步骤
    const connectWallet = () => {
      // const ethereumButton = document.querySelector('.enableEthereumButton');
      // ethereumButton.addEventListener('click', () => {
      if (typeof window.ethereum !== 'undefined') {   // && window.ethereum.isMetaMask
        // 连接调起metamask
        const ethereum = window.ethereum
        ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {
          // 获得钱包地址
          const address = result[0];
          try {
            // 请求用户授权
            // window.ethereum.enable();
            console.log('用户授权成功')
          } catch (error) {
            // 用户不授权时
            console.error("User denied account access")
          }
          console.log('錢包連接成功', address);
        }).catch((error) => {
          console.log("error", error);
        });
      } else {
        // 提示用户安装metamask

      }
      // });
    }

    // metamask接入步骤
    const metamaskConnect = () => {
      // 判断是否安装metamask
      if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
        const ethereum = window.ethereum
        try {
          // 调起钱包界面
          ethereum.request({ method: 'eth_requestAccounts' }).then((result) => {
            // 获得钱包地址
            const address = result[0];
            console.log('錢包地址:', address);
          })
          // 账户列表
          ethereum.request({ method: 'eth_accounts' }).then((result) => {
            result.map((account, index) => {
              console.log('账户列表' + index + ':', account)
            })
          })
          ethereum.request({
            method: 'eth_sendTransaction',
            params: [
              {
                to: '0x276c61Dddbf100D95fb483EC1379751367ef5cb8',
                'from': '0x7c6562ae7c2f002634eab5b00dfcaca93c377baa',
                value: '12',
              },
            ],
          }).then((result) => {
            console.log('交易结果：', result)
          })
          // 向用户请求给定的权限
          // ethereum.request({
          //   method: 'wallet_requestPermissions',
          //   params: [{ eth_accounts: {} }],
          // }).then((permissions) => {
          //   const accountsPermission = permissions.find(
          //     (permission) => permission.parentCapability === 'eth_accounts'
          //   );
          //   if (accountsPermission) {
          //     console.log('eth_accounts permission successfully requested!');
          //   }
          // }).catch((error) => {
          //   if (error.code === 4001) {
          //     // EIP-1193 userRejectedRequest error
          //     console.log('Permissions needed to continue.');
          //   } else {
          //     console.error(error);
          //   }
          // });
        } catch (error) {
          // 取消连接meatamask的错误码
          if (error.code === 4001) {
            console.log('Please connect to MetaMask.');
          } else {
            console.log("error:", error);
          }
        }
      } else {
        // 未安装流程
        window.alert("please install APP!")
      }
    }

    const active = ref(0);

    return { active, connectWallet, metamaskConnect };
  },
}
</script>

<style lang="less" scoped >

</style>