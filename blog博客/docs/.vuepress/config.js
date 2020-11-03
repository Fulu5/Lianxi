module.exports = {
  title: 'Macgx 个人主页',
  description: "Macgx's blog",
  themeConfig: {
    search: false,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Outside',
        items: [
          { text: 'Github', link: 'https://github.com/Fulu5' },
          { text: '简书', link: 'https://www.jianshu.com/u/4b12308ecdaf' }
        ]
      }
    ],
    displayAllHeaders: false,
    sidebar: ['/', 'Axios', 'Quasar', 'VSCode', 'Grid', 'Javascript']
  }
};
