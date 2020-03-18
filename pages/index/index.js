//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: {
      title: '豆瓣电影',
      subTitle: '源码出品,必属精品'
    }, //首页标题
    list: [{
        name: '正在热映'
      },
      {
        name: '即将上映'
      },
      {
        name: 'TOP250'
      }
    ],
    banner: {
      imglist: ['/assets/movie1.jpg','/assets/movie2.jpg','/assets/movie3.jpg',],
      indicatorDots: false,
      vertical: false,
      autoplay: true,
      interval: 2000,
      duration: 500
    }
  },
  //事件处理函数



})