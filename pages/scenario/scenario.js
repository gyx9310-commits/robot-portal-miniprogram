Page({
  data: {
    scenarios: [
      {
        id: 1,
        icon: '🏫',
        title: '课堂教学',
        desc: '机器人作为助教，辅助老师进行互动教学，通过趣味问答、故事讲述等方式提升课堂活跃度',
        features: ['互动问答', '故事教学', '知识科普']
      },
      {
        id: 2,
        icon: '🎮',
        title: '游戏互动',
        desc: '设计寓教于乐的游戏活动，让孩子在玩耍中学习，培养动手能力和思维能力',
        features: ['益智游戏', '角色扮演', '团队协作']
      },
      {
        id: 3,
        icon: '🎵',
        title: '艺术启蒙',
        desc: '音乐、绘画等艺术课程，激发孩子的创造力和想象力，培养艺术素养',
        features: ['音乐教学', '绘画指导', '创意培养']
      },
      {
        id: 4,
        icon: '🏃',
        title: '运动健康',
        desc: '引导孩子进行适当的体育活动，通过体感游戏促进身心健康发展',
        features: ['体感游戏', '运动指导', '健康监测']
      },
      {
        id: 5,
        icon: '👨‍👩‍👧',
        title: '情感陪伴',
        desc: '作为孩子的知心伙伴，倾听心声、给予鼓励，陪伴孩子快乐成长',
        features: ['情感交流', '心理疏导', '成长陪伴']
      },
      {
        id: 6,
        icon: '📊',
        title: '成长记录',
        desc: '记录孩子的学习和成长轨迹，生成个性化报告，助力因材施教',
        features: ['学习记录', '成长报告', '数据分析']
      }
    ],
    benefits: [
      { id: 1, icon: '📈', title: '提升教学质量', desc: 'AI辅助教学，让课堂更生动有趣' },
      { id: 2, icon: '👥', title: '减轻教师负担', desc: '分担重复性工作，让老师专注于个性化教育' },
      { id: 3, icon: '💡', title: '激发学习兴趣', desc: '游戏化学习方式，让孩子爱上学习' },
      { id: 4, icon: '📱', title: '家长实时了解', desc: '通过小程序分享孩子在园表现' }
    ]
  },

  onLoad: function () {
    console.log('场景页面加载完成')
  },

  goToContact: function () {
    wx.switchTab({
      url: '/pages/about/about'
    })
  }
})