// app.js

import { goods } from '/analog_data.js'

App({
  onLaunch() {
    wx.getSystemInfo({
        success: e => {
          this.globalData.StatusBar = e.statusBarHeight;
          let custom = wx.getMenuButtonBoundingClientRect();
          this.globalData.Custom = custom;
          this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
          this.globalData.WindowHeight = e.windowHeight;
          this.globalData.pixelRatio = e.pixelRatio;
        }
    })

    // 尝试读取用户信息
  },
  globalData: {
    userInfo: null,
    loginStatus: false,
    Custom:'',  //自定义导航栏  **注意：不要更改此值，否则会影响导航栏高度
    CustomBar:'',  // 自定义导航栏高度 **注意：不要更改此值，否则会影响导航栏高度
    pixelRatio: '',  // 设备像素比
    goods: goods,  // 商品信息
  }
})
