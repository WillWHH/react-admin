import React, { Component } from 'react'
import { Card, Icon, Row, Col, Popover } from 'antd'
import { HF_network } from '../data'

class HF_net extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.setState({
            data: HF_network
        })
    }
    renderDevItem = ({ id, type, rate, waveform, state }) => (
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
                            <td>当前状态:</td>
                            <td>{state ? '不连接' : '连接'}</td>
                        </tr>
                    </table>
                }
                placement='bottom'
                trigger='hover'>
                <Card hoverable bordered={false} style={{ backgroundColor: state ? '#ff1919' : '#b2fd7c' }}>
                    <Col span={10}>
                        <Icon style={{ fontSize: '50px', color: 'white' }} type={state ? 'alert' : 'desktop'} />
                    </Col>
                    <Col span={14} style={{ fontSize: '1.4rem', color: 'white', textAlign: 'center' }}>
                        <table>
                            <tr>
                                <th>ID:</th>
                                <th>{id}</th>
                            </tr>
                            <tr>
                                <td>状态:</td>
                                <td>{state ? '不连接' : '连接'}</td>
                            </tr>
                        </table>
                    </Col>
                </Card>
            </Popover>
        </Col>
    )

    render() {
        return (
            <Card title={'HF网'}>
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

export default HF_net
