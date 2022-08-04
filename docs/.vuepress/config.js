module.exports = {
    base: '/ZhuoQueBa_Blog/',
    head: [
      ['link', { rel: 'icon', href: './images/logo.png' }] //设置标签处的图标 自己绘制了一个
    ],
    host: 'localhost', // ip
    port: '2323', //端口号 默认为8080
    
    themeConfig: {
      logo: '/images/logo.png',// 注意图片放在 public 文件夹下
      
      nav:[ // 导航栏配置
       {text:'Home', link:'/'},
       {text: 'About', link: '/about/'}, 
       {text: 'github', link: 'https://github.com/yequanzhuo/ZhuoQueBa_Blog'},
      ],      
    },

    locales: {//语言配置
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: '中文',
        title: 'ZhuoQueBa_Blog',
        description: 'ZhuoQueBa的个人网站',
      }
    },
  }
