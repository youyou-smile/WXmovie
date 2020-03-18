// pages/list/list.js
Page({

  /*
   * 页面的初始数据
   */
  data: {
    defaultUrl: 'http://192.168.0.158:5000', //保存默认公共url部分
    apiList: [
      '/v2/movie/in_theaters',
      '/v2/movie/new_movies',
      '/v2/movie/top250'
    ],
    list: [] //有效数组------------------------------
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '正在努力加载中',
    })
    var _this = this;
    wx.request({
      url: this.data.defaultUrl + this.data.apiList[options.index],
      success(res) {
        _this.setData({
          list: res.data.subjects
        })
        wx.hideLoading()
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})