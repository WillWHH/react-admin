import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Layout, BackTop } from 'antd'
import routes from '@/routes'
import { menuToggleAction } from '@/store/actionCreators'
import echarts from 'echarts/lib/echarts'
import avatar from '@/assets/images/user.jpg'
import menu from './menu'
import '@/style/layout.scss'

import AppHeader from './AppHeader.jsx'
import AppAside from './AppAside.jsx'
import HeadTitle from './HeadTitle.jsx'

const { Content } = Layout

class DefaultLayout extends Component {
    state = {
        avatar,
        show: true,
        menu: []
    }
    getMenu = menu => {
        return menu
    }

    componentDidMount() {
        this.setState({
            menu: this.getMenu(menu)
        })
    }

    componentDidUpdate() {
        let { pathname } = this.props.location

        // 菜单收缩展开时 echarts 图表的自适应
        if (pathname === '/' || pathname === '/awareness') {
            this.timer = setTimeout(() => {
                echarts.init(document.getElementById('bar')).resize()
            }, 500)
        } else {
            this.timer = null
        }
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

    render() {
        let { menuClick, menuToggle } = this.props
        return (
            <Layout>
                <HeadTitle />
                <Content>
                    <Layout className='app'>
                        <BackTop />
                        <AppAside menuToggle={menuToggle} menu={this.state.menu} />
                        <Layout style={{ marginLeft: menuToggle ? '80px' : '300px', minHeight: '100vh' }}>
                            <AppHeader menuToggle={menuToggle} menuClick={menuClick} show={this.state.show} />
                            <Content className='content'>
                                <Switch>
                                    {routes.map(item => {
                                        return (
                                            <Route
                                                key={item.path}
                                                path={item.path}
                                                exact={item.exact}
                                                render={props => <item.component {...props} />}></Route>
                                        )
                                    })}
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                </Content>
            </Layout>
        )
    }
}

const stateToProp = state => ({
    menuToggle: state.menuToggle
})

const dispatchToProp = dispatch => ({
    menuClick() {
        dispatch(menuToggleAction())
    }
})

export default withRouter(connect(stateToProp, dispatchToProp)(DefaultLayout))
