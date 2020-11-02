import React, { useState, useEffect } from 'react'
import {
  useLocation,
  useHistory,
  Link
} from 'react-router-dom'
import logo from '../../logo.svg'
import './style.css'

const Header = ({ currentDevice }) => {
  let location = useLocation()
  let history = useHistory()
  const [isMenuActive, setisMenuActive] = useState(false)
  const [activeMenuLink, setActiveMenuLink] = useState(location.pathname)

  useEffect(() => {
    setActiveMenuLink(location.pathname)
    setisMenuActive(false)
  }, [location])

  let isMobile = currentDevice === 'mobile',
    isTablet = currentDevice === 'tablet'

  return (
    <header className={`header ${isMenuActive && (isMobile || isTablet) ? 'active' : ''} ${currentDevice}`}>
      <div className="header-status-toggler" onClick={() => setisMenuActive(!isMenuActive)} title={`${!isMenuActive ? 'Abrir Menu' : 'Fechar Menu'}`}></div>
      <Link to="/" className="header-logo">
        <img src={logo} className="header-logo-img spin" alt="logo" />
        <div className="header-logo-brand">
          <h1 className="header-logo-brand-name">Brand Name</h1>
          <p className="header-logo-brand-slogan">brand slogan</p>
        </div>
      </Link>
      <nav className="header-nav">
        <ul className="header-nav-links">
          <li className="header-nav-links-item">
            <Link className={`header-nav-links-item-link ${activeMenuLink === '/' ? 'active' : ''}`} to="/">Home</Link>
          </li>
          <li className="header-nav-links-item">
            <Link className={`header-nav-links-item-link ${activeMenuLink === '/sobre' ? 'active' : ''}`} to="/sobre">Sobre</Link>
          </li>
          <li className="header-nav-links-item">
            <Link className={`header-nav-links-item-link ${activeMenuLink === '/topicos' ? 'active' : ''}`} to="/topicos">Tópicos</Link>
          </li>
        </ul>
        <div className="header-breadcrumb">
          <span>
            <Link to="/" className="header-breadcrumb-item">Home</Link>
            <Link to="/topicos" className="header-breadcrumb-item">Tópicos</Link>
            <Link to="/topicos/termo" className="header-breadcrumb-item">Termo</Link>
          </span>
          <span className="header-breadcrumb-item-go-back" onClick={() => history.goBack()}>Voltar</span>
        </div>
      </nav>
    </header>
  )
}

export default Header