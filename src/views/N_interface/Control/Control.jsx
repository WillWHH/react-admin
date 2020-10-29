import React, { Component } from 'react'
import { Card, Icon, Col, Row } from 'antd'
class Control extends Component {
    render() {
        return (
            <Card title={'上级管控'}>
                <Row gutter={(20, [15, 24])}>
                    <Col span={6}>
                        <Card hoverable bordered={false} style={{ backgroundColor: 'grey' }}>
                            <Col span={10}>
                                <Icon style={{ fontSize: '50px', color: 'white' }} type='desktop' />
                            </Col>
                            <Col span={14} style={{ fontSize: '1.4rem', color: 'white', textAlign: 'center' }}>
                                <table>
                                    <tr>
                                        <td>状态:</td>
                                        <td>不连接</td>
                                    </tr>
                                </table>
                            </Col>
                        </Card>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default Control
