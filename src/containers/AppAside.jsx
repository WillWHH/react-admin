import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import CustomMenu from '@/components/CustomMenu'
import { BorderOuterOutlined } from '@ant-design/icons'
const { Sider } = Layout

const AppAside = props => {
    let { menuToggle, menu } = props
    return (
        <Sider className='aside' width={300} collapsed={menuToggle}>
            <div className='logo'>
                {menuToggle && <BorderOuterOutlined style={{ fontSize: '2.0rem', color: '#08c' }} />}
            </div>
            <CustomMenu menu={menu}></CustomMenu>
        </Sider>
    )
}

AppAside.propTypes = {
    menuToggle: PropTypes.bool,
    menu: PropTypes.array.isRequired
}

export default AppAside
