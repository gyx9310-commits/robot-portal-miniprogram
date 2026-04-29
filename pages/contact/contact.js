Page({
  data: {
    name: '',
    phone: '',
    school: '',
    city: '',
    selectedRequirement: '',
    message: '',
    requirements: [
      { id: 'demo', name: '预约演示' },
      { id: 'trial', name: '试用申请' },
      { id: 'cooperation', name: '商务合作' },
      { id: 'consult', name: '咨询服务' }
    ]
  },

  onLoad: function () {
    console.log('联系页面加载完成')
  },

  onNameInput: function (e) {
    this.setData({ name: e.detail.value })
  },

  onPhoneInput: function (e) {
    this.setData({ phone: e.detail.value })
  },

  onSchoolInput: function (e) {
    this.setData({ school: e.detail.value })
  },

  onCityInput: function (e) {
    this.setData({ city: e.detail.value })
  },

  selectRequirement: function (e) {
    this.setData({ selectedRequirement: e.currentTarget.dataset.id })
  },

  onMessageInput: function (e) {
    this.setData({ message: e.detail.value })
  },

  submitForm: function () {
    const { name, phone, school, selectedRequirement } = this.data
    
    if (!name) {
      wx.showToast({ title: '请输入姓名', icon: 'none' })
      return
    }
    
    if (!phone) {
      wx.showToast({ title: '请输入联系电话', icon: 'none' })
      return
    }
    
    if (!school) {
      wx.showToast({ title: '请输入园所名称', icon: 'none' })
      return
    }

    wx.showLoading({ title: '提交中...' })
    
    setTimeout(() => {
      wx.hideLoading()
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 2000
      })
      
      this.setData({
        name: '',
        phone: '',
        school: '',
        city: '',
        selectedRequirement: '',
        message: ''
      })
    }, 1000)
  }
})