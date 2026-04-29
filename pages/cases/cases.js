Page({
  data: {
    cases: [
      {
        id: 1,
        url: '/images/case_lobby.jpg',
        caption: '前厅迎宾点位 | 品牌展示+来访接待'
      },
      {
        id: 3,
        url: '/images/case_interaction.jpg',
        caption: '真实场景互动 · 贴合园所需求'
      }
    ]
  },

  onLoad: function () {
    console.log('试点案例页加载完成')
  },

  previewImage: function(e) {
    const url = e.currentTarget.dataset.url
    wx.previewImage({
      current: url,
      urls: this.data.cases.map(item => item.url)
    })
  },

  goToContact: function() {
    wx.navigateTo({
      url: '/pages/contact/contact'
    })
  }
})