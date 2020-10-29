import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Layout } from 'antd'

const { Header } = Layout

const AppHeader = props => {
    let { menuClick, menuToggle } = props
    return (
        <Header className='header'>
            <div className='left'>
                <Icon
                    style={{ fontSize: '2rem' }}
                    onClick={menuClick}
                    type={menuToggle ? 'menu-unfold' : 'menu-fold'}
                />
            </div>
        </Header>
    )
}

AppHeader.propTypes = {
    menuClick: PropTypes.func,
    menuToggle: PropTypes.bool
}

export default React.memo(AppHeader)
