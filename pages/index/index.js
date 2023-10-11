// index.js
// 获取应用实例
const app = getApp()

let leftHeight = 0;
let rightHeight = 0;
let leftData = [];
let rightData = [];


Page({
    data: {
        customBarHeight: app.globalData.CustomBar,
        leftData: [],
        rightData: [],
        tag: ["猜你喜欢", "最新发布", "热榜hot", "我的关注", "猜你喜欢", "最新发布", "热榜hot", "我的关注"],
        currentTagIndex: 0,
        filterTagHeight: app.globalData.CustomBar + (100 / app.globalData.pixelRatio),
        TabCur: 0,
        tabItem: ["国内 海外", "假日精选", "钟点房", "民宿"],
        swiperCurrent: 0,
        swiperList: [{
            id: 0,
            type: 'image',
            url: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1'
        }, {
            id: 1,
            type: 'image',
            url: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
        }, {
            id: 2,
            type: 'image',
            url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1'
        }, {
            id: 3,
            type: 'image',
            url: 'https://image.meiye.art/FiLUT-wb9DP0-dpxRQH19HJOOJOW?imageMogr2/thumbnail/450x/interlace/1'
        }, {
            id: 4,
            type: 'image',
            url: 'https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1'
        }, {
            id: 5,
            type: 'image',
            url: 'https://image.meiye.art/FiqphSjedkvi1y0hfqeNrYGXqLKo?imageMogr2/thumbnail/450x/interlace/1'
        }, {
            id: 6,
            type: 'image',
            url: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1'
        }],
        Headlines: [{
            id: 0,
            title: "ColorUI GA 最新版v2.0.6上线啦~",
            url: '/pages/about/about/about'
        }, {
            id: 1,
            title: "新增6种UI模板库、瀑布流样式",
            url: '/pages/about/about/about'
        }],
        goods_list: [{
                goods: [{
                        img: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
                    },
                    {
                        img: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
                    },
                    {
                        img: 'https://image.meiye.art/FhHGe9NyO0uddb6D4203jevC_gzc?imageMogr2/thumbnail/450x/interlace/1',
                    },
                ]
            },
            {
                goods: [{
                        img: 'https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1',
                    },
                    {
                        img: 'https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P?imageMogr2/thumbnail/450x/interlace/1',
                    },
                    {
                        img: 'https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H?imageMogr2/thumbnail/450x/interlace/1',
                    },
                ]
            },
            {
                goods: [{
                        img: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
                    },
                    {
                        img: 'https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1',
                    },
                    {
                        img: 'https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H?imageMogr2/thumbnail/450x/interlace/1',
                    },
                ]
            }
        ],
        g_list: [{
                img: 'https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1',
            },
            {
                img: 'https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P?imageMogr2/thumbnail/450x/interlace/1',
            },
            {
                img: 'https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H?imageMogr2/thumbnail/450x/interlace/1',
            },
            {
                img: 'https://image.meiye.art/FhtISupNHMibBgrGZOe15CPQ-d5R?imageMogr2/thumbnail/450x/interlace/1',
            },
            {
                img: 'https://image.meiye.art/FgaFNs-YNxw_vRtqCbvQru3z6s3P?imageMogr2/thumbnail/450x/interlace/1',
            },
            {
                img: 'https://image.meiye.art/FqZALKFWQ7vEZtmJyMyB_w776B_H?imageMogr2/thumbnail/450x/interlace/1',
            },
        ],
        d_num: 3,
    },
    onSearchClick() {
        wx.navigateTo({
            url: '../search/search'
        })
    },
    tabSelect(e){
        this.setData({
            TabCur: e.currentTarget.dataset.id
        })
    },
    onLoad() {
        this.create(app.globalData.goods)
        console.log(app.globalData.pixelRatio)
    },
    create(data) {
        let promiseArr = [];

        let sort = function (data) {
            data.forEach(item => {
                if (leftHeight <= rightHeight) {
                    leftHeight += (item.height + 100); // 这里加了一个information的平均估计高度(不加如果一边连续放图片会导致误差太大)
                    leftData.push(item)
                    console.info("右边大")
                } else {
                    rightHeight += (item.height + 100); // 这里加了一个information的平均估计高度(不加如果一边连续放图片会导致误差太大)
                    rightData.push(item);
                    console.info("左边大")
                }
            });
        }

        for (let i in data) {
            let p = new Promise((resolve, reject) => {
                wx.getImageInfo({
                    src: data[i].image,
                    complete: (res) => {
                        let proportion = res.height / res.width;
                        data[i].height = 375 * proportion;
                        resolve(data[i])
                    }
                })
            })
            promiseArr.push(p)
        }
        Promise.all(promiseArr).then(res => {
            sort(res);
            this.setData({
                leftData,
                rightData
            })
        })
    },
    onReachBottom(e) {
        this.create(app.globalData.goods);
    },
})