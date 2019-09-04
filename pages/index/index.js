Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList: [],
    //导航索引，激活类的赋予
    currentActiveIndex: 0,
    swiperList: [],
    videosList: []
  },

  // 获取导航数据接口的方法
  getNavList(){
    let that = this;
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
      success(res){
        // console.log(res);
        if(res.data.code===0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  // 获取轮播图api数据
  getswiperList() {
    let that = this;
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
      success(res) {
        // console.log(res);
        if (res.data.code === 0) {
          that.setData({
            swiperList: res.data.data.swiperList
          })
        }
        // console.log(res);
      }
    })
  },
// 获取视频列表数据的方法
  getvideosList() {
    let that = this;
    wx.request({
      url: "https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
      success(res) {
        // console.log(res);
        if (res.data.code === 0) {
          that.setData({
            videosList: res.data.data.videosList
          })
        }
        
      }
    })
  },

  // 为导航元素设置点击事件更新data中相应数据
  activeNav(e) {
    this.setData({
      currentActiveIndex: e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getswiperList();
    this.getvideosList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})