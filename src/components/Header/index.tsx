import React, { FC } from 'react'
import './style/index.less'
import logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'

const Header: FC = () => {
    return (
        <header className="nav-header">
            <div className="header-container">
                <div className="logo">
                    <a href="/" className="logo-link">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar">
                    <NavLink to='/' className="nav-item">
                        <span className="nav-item__text">首页</span>
                    </NavLink>
                    <NavLink to='/' className="nav-item">
                        <span className="nav-item__text">下载App</span>
                    </NavLink>
                    <div className="search-container">
                        <input type="text" className="search-input" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
