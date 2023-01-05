import { createApp } from 'vue'
import { ActionBar, ActionBarIcon, ActionBarButton, Divider, Popup, Overlay, Loading, Dialog, ContactCard, Form, AddressEdit, AddressList, Field, CellGroup, Cell, SwipeCell, Icon, Stepper, Checkbox, CheckboxGroup, Button, Swipe, SwipeItem, PullRefresh, Tab, Tabs, SubmitBar, 
  Progress, Card, Col, Row, Tabbar, TabbarItem, Grid, GridItem, ConfigProvider, Skeleton, Popover } from 'vant'
import App from './App.vue'
import store from './store'
import router from './router'
import 'lib-flexible/flexible'
import 'vant/lib/index.css'; // 全局引入样式
import './assets/font/font.css';  // 引入字体
import './utils/rem.js';   // rem缩放比例

const app = createApp(App) // 创建实例

// 全局过滤器
app.config.globalProperties.$filters = {
  prefix(url) {
    if (url && url.startsWith('http')) {
      return url
    } else {
      url = `http://backend-api-01.newbee.ltd${url}`
      return url
    }
  }
}

const VantPlugins = [
  ActionBar, 
  ActionBarIcon, 
  ActionBarButton, 
  Divider, 
  Popup, 
  Overlay, 
  Loading, 
  Dialog, 
  ContactCard, 
  Form, 
  AddressEdit, 
  AddressList, 
  Field, 
  CellGroup, 
  Cell, 
  SwipeCell, 
  Icon, 
  Stepper, 
  Checkbox, 
  CheckboxGroup, 
  Button, 
  Swipe, 
  SwipeItem, 
  PullRefresh, 
  Tab, 
  Tabs, 
  SubmitBar, 
   
  Progress,
  Card, 
  Col, 
  Row,
  Tabbar, 
  TabbarItem,
  Grid, 
  GridItem,
  ConfigProvider,
  Skeleton,
  Popover,
]

// 全局注册Vant UI组件
function appUse(VantPlugins) {
  VantPlugins.forEach(element => {
    app.use(element)
  })
}
appUse(VantPlugins)
app.use(router)
app.use(store)
app.mount('#app')