Page({
  data: {
    specs: [
      { id: 1, value: '19', label: '自由度' },
      { id: 2, value: '12', label: '关节数量' },
      { id: 3, value: '80+', label: '细腻表情' },
      { id: 4, value: '10000h+', label: '可靠运行' }
    ],
    features: [
      { id: 1, icon: '💬', title: '智能对话', desc: '支持自然语言交互，能理解儿童语言并进行趣味对话' },
      { id: 2, icon: '🎨', title: '艺术启蒙', desc: '绘画、音乐等艺术课程，激发孩子创造力' },
      { id: 3, icon: '🧮', title: '趣味数学', desc: '游戏化数学学习，让抽象概念变得直观有趣' },
      { id: 4, icon: '📖', title: '故事时间', desc: '海量绘本故事，培养阅读兴趣和想象力' },
      { id: 5, icon: '🏃', title: '运动互动', desc: '体感游戏和运动指导，促进身心健康发展' },
      { id: 6, icon: '👨‍👩‍👧', title: '亲子互动', desc: '支持亲子模式，增进家庭互动与情感联结' }
    ],
    advantages: [
      { id: 1, number: '01', title: '先进AI技术', desc: '基于深度学习算法，持续进化的智能大脑' },
      { id: 2, number: '02', title: '儿童友好设计', desc: '圆润造型、安全材质，专为儿童使用场景设计' },
      { id: 3, number: '03', title: '专业幼教内容', desc: '与资深幼教专家合作开发的教育课程体系' },
      { id: 4, number: '04', title: '数据安全保障', desc: '端到端加密，严格保护儿童隐私数据' }
    ]
  },

  onLoad: function () {
    console.log('产品页面加载完成')
  },

  goToContact: function () {
    wx.switchTab({
      url: '/pages/about/about'
    })
  }
})