import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

class Bar extends Component {
    componentDidMount() {
        let myChart = echarts.init(document.getElementById('bar'))
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['报文数']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['网络协议类', '紧急信息', '控制信令', '短信息', '长信息', '视频文件', '管理信息', '邮件']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '报文数',
                    type: 'bar',
                    data: [320, 332, 301, 334, 390, 330, 320, 300],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                { offset: 0, color: '#06B5D7' }, //柱图渐变色
                                { offset: 0.5, color: '#44C0C1' }, //柱图渐变色
                                { offset: 1, color: '#71C8B1' } //柱图渐变色
                            ])
                        }
                    }
                }
            ]
        })
        window.addEventListener('resize', function() {
            myChart.resize()
        })
    }
    render() {
        return <div id='bar' style={{ height: 600, background: '#fff' }}></div>
    }
}

export default Bar
