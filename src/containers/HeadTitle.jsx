import React, { Component } from 'react'
import { Icon, Layout } from 'antd'

import '@/style/layout.scss'

const { Header } = Layout
class HeadTitle extends Component {
    render() {
        return (
            <Header className='title'>
                <span className='logo'>
                    <Icon type='desktop' />
                    <text> 异构网络综合接入资源管控平台</text>
                </span>
            </Header>
        )
    }
}

export default HeadTitle
