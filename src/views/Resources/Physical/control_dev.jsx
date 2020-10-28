import React, { Component } from 'react'
import { Card, Icon, Row, Col, Popover } from 'antd'
import { control_device } from './data'

class control_dev extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.setState({
            data: control_device
        })
    }
    renderDevItem = ({ id, type, rate, waveform, quality, state }) => (
        <Col span={6}>
            <Popover
                content={
                    <table>
                        <tr>
                            <th>设备ID号:</th>
                            <th>{id}</th>
                        </tr>
                        <tr>
                            <th>链路类型:</th>
                            <th>{type}</th>
                        </tr>
                        <tr>
                            <th>传输速率:</th>
                            <th>{rate}</th>
                        </tr>
                        <tr>
                            <th>传输波形:</th>
                            <th>{waveform}</th>
                        </tr>
                        <tr>
                            <th>链路质量:</th>
                            <th>{quality}</th>
                        </tr>
                        <tr>
                            <td>当前状态:</td>
                            <td>{state ? '故障' : '可用'}</td>
                        </tr>
                    </table>
                }
                placement='bottom'
                trigger='hover'>
                <Card hoverable bordered={false} style={{ backgroundColor: state ? '#ff1919' : '#b2fd7c' }}>
                    <Col span={10}>
                        <Icon style={{ fontSize: '50px', color: 'white' }} type={state ? 'alert' : 'desktop'} />
                    </Col>
                    <Col span={14} style={{ fontSize: '1.5rem', color: 'white' }}>
                        <table>
                            <tr>
                                <th>设备ID:</th>
                                <th>{id}</th>
                            </tr>
                            <tr>
                                <td>状态:</td>
                                <td>{state ? '故障' : '可用'}</td>
                            </tr>
                        </table>
                    </Col>
                </Card>
            </Popover>
        </Col>
    )

    render() {
        return (
            <Card title={'控制设备'}>
                <Row gutter={(20, [15, 24])}>
                    {this.state.data &&
                        this.state.data.map(item => {
                            return this.renderDevItem(item)
                        })}
                </Row>
            </Card>
        )
    }
}

export default control_dev
