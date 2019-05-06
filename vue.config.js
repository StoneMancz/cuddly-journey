module.exports = {
    configureWebpack: {
        devServer: {
            port: 8089,
            open: true,
            //mock数据
            before(app) {
                let userpoor = [{
                        username: 'cz',
                        password: '123456'
                    }]
                    //登录接口
                let tokenKey = 'caozeng'
                app.get('/api/login', (req, res) => {
                        const {
                            username,
                            password
                        } = req.query;
                        if (username == userpoor[0].username && password == userpoor[0].password) {
                            res.json({
                                code: 1,
                                token: tokenKey + '-' + username + '-' + (new Date().getTime()),
                                messages: '登录成功'
                            })
                        } else {
                            res.json({
                                code: 0,
                                messages: '登录失败'
                            })
                        }
                    })
                    //获取top滚动商品list
                app.get('/api/top_commodity', (req, res) => {
                        res.json({
                            items: [{
                                    url: '#',
                                    image: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/32186/32/15368/89000/5cc160deE3e2dd6fd/4db28a7e924a32b6.jpg!cr_1125x549_0_72!q70.jpg.dpg'
                                },
                                {
                                    url: '#',
                                    image: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/31162/17/1128/101786/5c46ead8E22ee9740/f66061da227c1965.jpg!cr_1125x549_0_72!q70.jpg.dpg'
                                },
                                {
                                    url: '#',
                                    image: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/36013/29/6855/98127/5cc57480E5f1a3c57/678de5459974b56a.jpg!cr_1125x549_0_72!q70.jpg.dpg'
                                }

                            ]
                        });
                    })
                    //获取商品滚动商品列表list
                app.get('/api/rollinglist', (req, res) => {
                        res.json({
                            lists: [{
                                image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp',
                                label: '超市'
                            }, {
                                image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t26635/320/1832919204/11533/a2f9878a/5bee366dN1627d554.png.webp',
                                label: '海屯全球'
                            }, {
                                image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
                                label: '服饰美妆'
                            }, {
                                image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png.webp',
                                label: '生鲜'
                            }, {
                                image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
                                label: '马上到家'
                            }, {
                                image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
                                label: '充值缴费'
                            }, {
                                image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
                                label: '9.9元拼'
                            }, {
                                image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
                                label: '领券'
                            }, {
                                image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
                                label: '挣钱'
                            }, {
                                image: '//m.360buyimg.com/mobilecms/s120x120_jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png.webp',
                                label: '全部'
                            }]
                        })
                    })
                    //获取分类页
                app.get('/api/classificationData', (req, res) => {
                    res.json({
                        lists: [{
                                label: "热门推荐",
                                active: true
                            },
                            {
                                label: "手机数码",
                                active: false
                            },
                            {
                                label: "家用电器",
                                active: false
                            },
                            {
                                label: "家用空调",
                                active: false
                            },
                            {
                                label: "电脑产品",
                                active: false
                            },
                            {
                                label: "计生情趣",
                                active: false
                            },
                            {
                                label: "美妆护肤",
                                active: false
                            },
                            {
                                label: "口红",
                                active: false
                            },
                            {
                                label: "手袋",
                                active: false
                            },
                            {
                                label: "金银财宝",
                                active: false
                            },
                            {
                                label: "手机数码",
                                active: false
                            },
                            {
                                label: "手机数码",
                                active: false
                            }
                        ]
                    })
                })

                app.get('/api/classifiRollinglist', (req, res) => {
                    const get_class_id = req.query.id;
                    var lists_json = [{
                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                        label: '手机',
                        class_id: '1'
                    }, {
                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png',
                        label: '耳机',
                        class_id: '1'
                    }, {
                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png',
                        label: '华为',
                        class_id: '1'
                    }, {
                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png',
                        label: '电饭煲',
                        class_id: '3'
                    }, {
                        image: '//img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png',
                        label: '电磁炉',
                        class_id: '2'
                    }, {
                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png',
                        label: '路由器',
                        class_id: '3'
                    }, {
                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/18974/35/9836/31220/5c82223eE5dcc61b8/4e93c1fbb777bfca.png',
                        label: '避孕套',
                        class_id: '0'
                    }, {
                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t1/19730/14/9859/10199/5c8225eeE5e925911/054ccd7992f86199.png',
                        label: '口红',
                        class_id: '0'
                    }, {
                        image: '//img12.360buyimg.com/focus/s140x140_jfs/t1/25144/37/2370/7617/5c1cae45Ea0ec5a85/f7ba433b5d1e072f.png',
                        label: '吹风机',
                        class_id: '2'
                    }, {
                        image: '//img11.360buyimg.com/focus/s140x140_jfs/t1/30718/32/2643/9923/5c6d03ecEabd2d664/aaee556800519e1f.png',
                        label: '三只松鼠',
                        class_id: '0'
                    }, {
                        image: '//img13.360buyimg.com/focus/s140x140_jfs/t1/23312/39/9884/7280/5c822292E65f3929b/78ba741d321954b0.png',
                        label: '洗衣液',
                        class_id: '0'
                    }, {
                        image: '//img11.360buyimg.com/focus/s140x140_jfs/t1/11731/9/10730/9518/5c822298Eb50b3275/33f88663e1c0284e.png',
                        label: '保温杯',
                        class_id: '0'
                    }, {
                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png',
                        label: '微波炉',
                        class_id: '0'
                    }, {
                        image: '//img13.360buyimg.com/focus/s140x140_jfs/t1/25168/27/9848/15397/5c822507E35d2ad16/384983a98758f8f8.png',
                        label: '洗发液',
                        class_id: '0'
                    }, {
                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t1/19562/14/9878/32183/5c8225f6E7c332db7/c886e52dc05b9ae4.png',
                        label: '卫生巾',
                        class_id: '0'
                    }, {
                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t21115/83/225125274/13856/5473fb3f/5b0567c1N59d53b27.png',
                        label: '冰箱',
                        class_id: '2'
                    }, {
                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png',
                        label: '洗衣机',
                        class_id: '2'
                    }, {
                        image: '//img12.360buyimg.com/focus/s140x140_jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png',
                        label: '电视',
                        class_id: '2'
                    }, {
                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg',
                        label: '夹克',
                        class_id: '0'
                    }, {
                        image: '//img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg',
                        label: 'T恤',
                        class_id: '0'
                    }]
                    lists_json = lists_json.filter((item) => {
                        if (get_class_id == item.class_id) {
                            return item;
                        }
                    });
                    res.json({
                        lists_json
                    })
                })

                app.get('/api/mineList', (req, res) => {
                    res.json({
                        lists: [{
                            label: '商品收藏',
                        }, {
                            label: '我的足迹'
                        }, {
                            label: '店铺'
                        }, {
                            label: '我的订单'
                        }, {
                            label: '退出',
                            type: 'exit'
                        }]
                    })
                })
            }
        }
    },

    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    './src/theme'
                ]
            }
        }
    },

    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    }
}