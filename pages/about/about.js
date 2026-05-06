Page({
  data: {
    team: [
      { id: 1, avatar: '👨‍🏫', name: '王磊', title: '导师' },
      { id: 2, avatar: '👩‍🏫', name: '潘晓明', title: '助教' },
      { id: 3, avatar: '👨‍💼', name: '高芹芹', title: '组长' },
      { id: 4, avatar: '👩‍💼', name: '沈娟娟', title: '成员' },
      { id: 5, avatar: '👨‍💻', name: '谷懿宣', title: '成员' },
      { id: 6, avatar: '👩‍💻', name: '徐晨程', title: '成员' },
      { id: 7, avatar: '👨‍🎓', name: '叶博伦', title: '成员' },
      { id: 8, avatar: '👩‍🎓', name: '王倩', title: '成员' }
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
