// pages/record/index.js
import ActionSheet, {
  ActionSheetTheme
} from '../../miniprogram_npm/tdesign-miniprogram/action-sheet/index';

const app = getApp();

const AnalogData = {
  collect: [
    {
      cover: "https://img2.baidu.com/it/u=715079339,2005340835&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
      name:"鑫旺旅店",
      priceType:"经济型",
      goodsType:"民宿",
      score:"4.0",
      signLocation:"火车站",
      tags:["近火车站","新开业/新装修"],
      averageExpenditure: 180,
      lowestPrice:35,
    },
    {
      cover: "https://img1.baidu.com/it/u=633544316,4117874954&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375",
      name:"wang wang旅店",
      priceType:"奢侈型",
      goodsType:"酒店",
      score:"4.5",
      signLocation:"悬崖",
      tags:["近悬崖","鬼屋试住"],
      averageExpenditure: 1800,
      lowestPrice:1000,
    },
  ],
  browsingHistory: [
    {
      cover: "https://img0.baidu.com/it/u=4262494031,1769661262&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500",
      name:"乐浮青旅",
      priceType:"经济型",
      goodsType:"民宿",
      score:"4.0",
      signLocation:"火车站",
      tags:["近火车站","新开业/新装修"],
      averageExpenditure: 180,
      lowestPrice:35,
    },
    {
      cover: "https://img0.baidu.com/it/u=2568693033,481791887&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
      name:"背包钟楼店",
      priceType:"奢侈型",
      goodsType:"酒店",
      score:"4.5",
      signLocation:"悬崖",
      tags:["近悬崖","鬼屋试住"],
      averageExpenditure: 1800,
      lowestPrice:1000,
    },
    {
      cover: "https://img0.baidu.com/it/u=3484496121,609922468&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=350",
      name:"云澜酒店",
      priceType:"经济型",
      goodsType:"民宿",
      score:"4.0",
      signLocation:"火车站",
      tags:["近火车站","新开业/新装修"],
      averageExpenditure: 180,
      lowestPrice:35,
    },
    {
      cover: "https://img1.baidu.com/it/u=455142448,3644222349&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375",
      name:"桃惑",
      priceType:"奢侈型",
      goodsType:"酒店",
      score:"4.5",
      signLocation:"悬崖",
      tags:["近悬崖","鬼屋试住"],
      averageExpenditure: 1800,
      lowestPrice:1000,
    },
    {
      cover: "https://img2.baidu.com/it/u=715079339,2005340835&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750https://img1.baidu.com/it/u=311365422,1688131382&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=500",
      name:"如意酒店",
      priceType:"经济型",
      goodsType:"民宿",
      score:"4.0",
      signLocation:"火车站",
      tags:["近火车站","新开业/新装修"],
      averageExpenditure: 180,
      lowestPrice:35,
    },
    {
      cover: "https://img0.baidu.com/it/u=1510552598,429214542&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
      name:"震动主题旅店",
      priceType:"奢侈型",
      goodsType:"酒店",
      score:"4.5",
      signLocation:"悬崖",
      tags:["近悬崖","鬼屋试住"],
      averageExpenditure: 1800,
      lowestPrice:1000,
    },
  ],
  purchaseRecord: [
    {
      cover: "https://img2.baidu.com/it/u=715079339,2005340835&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750https://img1.baidu.com/it/u=311365422,1688131382&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=500",
      name:"如意酒店",
      priceType:"经济型",
      goodsType:"民宿",
      score:"4.0",
      signLocation:"火车站",
      tags:["近火车站","新开业/新装修"],
      averageExpenditure: 180,
      lowestPrice:35,
    },
    {
      cover: "https://img0.baidu.com/it/u=1510552598,429214542&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500",
      name:"震动主题旅店",
      priceType:"奢侈型",
      goodsType:"酒店",
      score:"4.5",
      signLocation:"悬崖",
      tags:["近悬崖","鬼屋试住"],
      averageExpenditure: 1800,
      lowestPrice:1000,
    },
  ],
  follow: [
    {
      cover: "https://img0.baidu.com/it/u=3484496121,609922468&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=350",
      name:"云澜酒店",
      priceType:"经济型",
      goodsType:"民宿",
      score:"4.0",
      signLocation:"火车站",
      tags:["近火车站","新开业/新装修"],
      averageExpenditure: 180,
      lowestPrice:35,
    },
    {
      cover: "https://img1.baidu.com/it/u=455142448,3644222349&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375",
      name:"桃惑",
      priceType:"奢侈型",
      goodsType:"酒店",
      score:"4.5",
      signLocation:"悬崖",
      tags:["近悬崖","鬼屋试住"],
      averageExpenditure: 1800,
      lowestPrice:1000,
    },
  ]
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: "国内酒店",
    TabCurrentIndex: 0,
    TabItemName: [{
        "name": "收藏"
      },
      {
        "name": "看过"
      },
      {
        "name": "住过"
      },
      {
        "name": "关注"
      }
    ],
    TabCur: 0,
    page_index: 0,
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    page_height: app.globalData.WindowHeight - 50 - app.globalData.CustomBar,
    analogData:AnalogData
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  },
  handleAction() {
    ActionSheet.show({
      theme: ActionSheetTheme.List,
      selector: '#t-action-sheet',
      context: this,
      items: [{
          label: '国内酒店',
        },
        {
          label: '国际/中国港澳台',
        },
        {
          label: '民宿公寓',
        }
      ],
    });
  },
  handleSelected(e) {
    let label = e.detail.selected.label;
    this.setData({
      pageTitle: label,
      TabCurrentIndex: 0
    });
  },
  onSwiperPageChange(e) {
    let index = e.detail.current
    this.setData({
      TabCurrentIndex: index
    })
  },
  tabSelect(e) {
    let index = e.currentTarget.dataset.index
    this.setData({
      TabCurrentIndex: index
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})