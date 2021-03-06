//获取应用实例
var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
    },

    //事件处理函数
    swiperchange: function(e) {
        //console.log(e.detail.current)
    },

    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })

        //sliderList
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                //console.log(res.data)
                that.data.images = res.data
            }
        })

        //venuesList
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/venues/venuesList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                //console.log(res.data.data)
                that.data.venuesItems = res.data.data
            }
        })

        //choiceList
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/goods/choiceList',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                //console.log(res.data.data.dataList)
                that.data.choiceItems = res.data.data.dataList
            }
        })

    }
})
