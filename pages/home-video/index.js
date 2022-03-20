// pages/home-video/index.js
import {
  getTopMV
} from '../../service/video';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    hasMore: true,
  },

  /**
   * 生命周期函数--监听页面加载 create
   */
  onLoad: function (options) {
    this.getTopMVs(0);
  },

  getTopMVs: async function (offset) {
    // 如果没有更多，直接返回
    if (!this.data?.hasMore) return;
    // wx.startPullDownRefresh() 主动调用下拉刷新
    // !offset && wx.startPullDownRefresh();
    wx.showNavigationBarLoading();
    const res = await getTopMV({
      offset,
      limit: 10
    });
    if (res?.code === 200) {
      if (offset) {
        this.setData({
          topMVs: [...this?.data?.topMVs, ...res?.data]
        })
      } else {
        this.setData({
          topMVs: res?.data
        })
      }
      this.setData({
        hasMore: res?.hasMore
      })
    }
    wx.hideNavigationBarLoading();
    !offset && wx.stopPullDownRefresh();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成 mount
   */
  onReady: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('hello');
    this.getTopMVs(0);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.getTopMVs(this.data?.topMVs?.length);
  },


  handleVideoItemClick(e) {
    const id = e?.target?.dataset?.item?.id;
    console.log(id);
    // 路由跳转时不能加js后缀
    wx.navigateTo({
      url: `/pages/detail-video/index?id=${id}`,
    })
  }
})