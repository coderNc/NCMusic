// pages/detail-video/index.js
import {
  getMVDetail,
  getMVUrl,
  getRelatedVideo
} from '../../service/video';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    mvDetails: {},
    mvUrl: {},
    relatedVideo: [],
  },

  /**
   * 生命周期函数--监听页面加载
   * 通过路由跳转的方式将路由的query放到options中
   */
  onLoad: function (options) {
    console.log(options);
    this?.getMvDetail(options?.id);
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

  async getMvDetail(id) {
    const res = await Promise.all([
      getMVDetail({
        mvid: id
      }),
      getMVUrl({
        id
      }),
      getRelatedVideo({
        id
      })
    ])

    if (res?.[0]?.code === 200) {
      this?.setData({
        mvDetails: {
          ...res?.[0]?.data
        }
      })
    }
    if (res?.[1]?.code === 200) {
      this?.setData({
        mvUrl: {
          ...res?.[1]?.data
        }
      })
    }
    if (res?.[2]?.code === 200) {
      this?.setData({
        relatedVideo: [...res?.[2]?.data]
      })
    }
  },

  handleClick (e) {
    console.log(e);
  }

})