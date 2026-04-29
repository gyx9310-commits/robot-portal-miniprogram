Page({
  data: {
    particles: [
      { id: 1, left: 10, top: 20, delay: 0 },
      { id: 2, left: 25, top: 60, delay: 0.5 },
      { id: 3, left: 45, top: 30, delay: 1 },
      { id: 4, left: 65, top: 70, delay: 1.5 },
      { id: 5, left: 80, top: 40, delay: 2 },
      { id: 6, left: 30, top: 80, delay: 0.3 },
      { id: 7, left: 70, top: 25, delay: 0.8 },
      { id: 8, left: 15, top: 50, delay: 1.2 }
    ],
    rotateY: 0,
    rotateX: 0,
    startX: 0,
    startY: 0,
    isAutoRotating: true
  },

  onLoad: function () {
    console.log('首页加载完成')
    this.startAutoRotate()
  },

  startAutoRotate: function() {
    if (this.autoRotateTimer) return
    this.autoRotateTimer = setInterval(() => {
      if (this.data.isAutoRotating) {
        this.setData({
          rotateY: (this.data.rotateY + 0.5) % 360
        })
      }
    }, 20)
  },

  onTouchStart: function(e) {
    this.setData({
      isAutoRotating: false,
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    })
  },

  onTouchMove: function(e) {
    const deltaX = e.touches[0].clientX - this.data.startX
    const deltaY = e.touches[0].clientY - this.data.startY
    
    this.setData({
      rotateY: this.data.rotateY + deltaX * 0.5,
      rotateX: Math.max(-30, Math.min(30, this.data.rotateX - deltaY * 0.3))
    })
    
    this.setData({
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY
    })
  },

  onTouchEnd: function() {
    setTimeout(() => {
      this.setData({
        isAutoRotating: true,
        rotateX: 0
      })
    }, 2000)
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