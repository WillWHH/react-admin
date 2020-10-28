import React from 'react'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import loadable from './utils/loadable'
import 'animate.css'
import './style/base.scss'
import './style/App.scss'

// 公共模块
const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers'))

// 基础页面
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './views/Login'))

const App = () => (
    <Router>
        <Switch>
            <Route path='/' exact render={() => <Redirect to='/index' />} />
            <Route path='/login' component={Login} />
        </Switch>
        <DefaultLayout />
    </Router>
)

export default App
