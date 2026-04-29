Page({
  data: {
    team: [
      { id: 1, avatar: '👨‍💼', name: '张明', title: 'CEO' },
      { id: 2, avatar: '👩‍💼', name: '李华', title: 'CTO' },
      { id: 3, avatar: '👨‍🔬', name: '王强', title: 'AI研发总监' },
      { id: 4, avatar: '👩‍🏫', name: '陈静', title: '幼教专家' }
    ]
  },

  onLoad: function () {
    console.log('关于页面加载完成')
  },

  goToContact: function () {
    wx.navigateTo({
      url: '/pages/contact/contact'
    })
  }
})