import React, { Component } from 'react'
import { Card, Icon, Row, Col, Popover } from 'antd'
import { terminal_device } from './data'

class terminal_dev extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.setState({
            data: terminal_device
        })
    }
    renderDevItem = ({ id, port, address, state }) => (
        <Col span={3}>
            <Popover
                content={
                    <table>
                        <tr>
                            <th>用户ID号:</th>
                            <th>{id}</th>
                        </tr>
                        <tr>
                            <th>用户端口:</th>
                            <th>{port}</th>
                        </tr>
                        <tr>
                            <th>端口地址:</th>
                            <th>{address}</th>
                        </tr>
                        <tr>
                            <td>当前状态:</td>
                            <td>{state ? '离线' : '在线'}</td>
                        </tr>
                    </table>
                }
                placement='right'
                trigger='hover'>
                <Card
                    hoverable
                    bordered={false}
                    justify='center'
                    align='middle'
                    style={{ backgroundColor: state ? '#e4e4e4' : '#b2fd7c' }}>
                    <Row>
                        <Icon style={{ fontSize: '50px', color: 'white' }} type='user' />
                    </Row>
                    <Row>
                        <span style={{ fontSize: '1.5rem', color: 'white' }}> ID号:{id}</span>
                    </Row>
                </Card>
            </Popover>
        </Col>
    )

    render() {
        return (
            <Card title={'用户终端设备'}>
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

export default terminal_dev
