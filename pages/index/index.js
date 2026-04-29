Page({
  data: {},

  onLoad: function () {
    console.log('首页加载完成')
  },

  goToProduct: function () {
    wx.navigateTo({
      url: '/pages/product/product'
    })
  },

  goToCases: function () {
    wx.navigateTo({
      url: '/pages/cases/cases'
    })
  },

  goToContact: function () {
    wx.navigateTo({
      url: '/pages/contact/contact'
    })
  },

  goToAbout: function () {
    wx.navigateTo({
      url: '/pages/about/about'
    })
  }
})