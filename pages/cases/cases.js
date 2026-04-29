Page({
  data: {
    cases: [
      {
        id: 1,
        icon: '🏫',
        name: '北京国际幼儿园',
        location: '北京市朝阳区',
        status: '已落地',
        desc: '引进智能机器人后，课堂互动率提升80%，孩子们的学习兴趣明显增强',
        tags: ['AI教学', '互动课堂']
      },
      {
        id: 2,
        icon: '🏢',
        name: '上海双语幼儿园',
        location: '上海市浦东新区',
        status: '已落地',
        desc: '机器人辅助教学，教师工作效率提升50%，家长满意度达99%',
        tags: ['效率提升', '家长满意']
      },
      {
        id: 3,
        icon: '🏠',
        name: '深圳实验幼儿园',
        location: '深圳市南山区',
        status: '已落地',
        desc: '智能陪伴机器人成为孩子们的好朋友，出勤率显著提升',
        tags: ['情感陪伴', '出勤提升']
      },
      {
        id: 4,
        icon: '🌳',
        name: '杭州绿城育华幼儿园',
        location: '杭州市西湖区',
        status: '试点中',
        desc: '试点阶段已获得师生一致好评，计划全面推广',
        tags: ['试点推广', '好评如潮']
      },
      {
        id: 5,
        icon: '🌆',
        name: '广州天河幼儿园',
        location: '广州市天河区',
        status: '已落地',
        desc: '通过机器人记录成长数据，实现个性化教育方案',
        tags: ['成长记录', '个性化']
      },
      {
        id: 6,
        icon: '🏡',
        name: '成都金苹果幼儿园',
        location: '成都市锦江区',
        status: '已落地',
        desc: '机器人艺术课程激发孩子创造力，作品数量增加3倍',
        tags: ['艺术启蒙', '创造力']
      }
    ],
    testimonials: [
      {
        id: 1,
        avatar: '👩‍🏫',
        content: '机器人让课堂变得生动有趣，孩子们每天都期待上课',
        author: '张园长',
        title: '北京国际幼儿园'
      },
      {
        id: 2,
        avatar: '👨‍🏫',
        content: '大大减轻了我的工作负担，让我有更多时间关注每个孩子',
        author: '李老师',
        title: '上海双语幼儿园'
      },
      {
        id: 3,
        avatar: '👩‍👧',
        content: '孩子回家后经常分享在幼儿园和机器人的有趣互动',
        author: '王妈妈',
        title: '深圳实验幼儿园家长'
      }
    ]
  },

  onLoad: function () {
    console.log('案例页面加载完成')
  },

  viewCase: function (e) {
    const caseItem = this.data.cases[e.currentTarget.dataset.index]
    wx.showToast({
      title: `查看：${caseItem.name}`,
      icon: 'none'
    })
  },

  goToContact: function () {
    wx.switchTab({
      url: '/pages/about/about'
    })
  }
})