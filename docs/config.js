export default {
  title: 'Fantasticit',
  logo: 'Fantasticit',
  toc: true,
  renderFooter: (buildTime, relativeFilePath) =>
    `Bulid at ${buildTime}, Modify on <a href="https://github.com/fantasticit/coding/tree/main${relativeFilePath}" target="_blank">Github</a>`,
  navs: [
    {
      title: '首页',
      path: '/index'
    },
    {
      title: '文章',
      path: '/articles'
    },
    {
      title: '数据结构与算法',
      path: '/algo-data-structure'
    },
    {
      title: '设计模式',
      path: '/design-patterns'
    },
    {
      title: '其他',
      path: '/others'
    },
    {
      title: "Github",
      path: "https://github.com/fantasticit/coding"
    }
  ],
  manifest: { 
    "name" : "Fantasticit: 学习笔记" , 
    "short_name" : "Fantasticit" , 
    "display" : "standalone" , 
    "start_url" : "/" , 
    "theme_color" : "#000" , 
    "background_color" : "#000" , 
    "icons" : [72, 96, 120, 128, 144, 152, 180, 192, 384, 512].map(s => ({
      "src": `assets/icon${s}.png`,
      "sizes": `${s}x${s}`,
      "type": "image/png"
    }))
  },
  outputDir: '.spa'
}
