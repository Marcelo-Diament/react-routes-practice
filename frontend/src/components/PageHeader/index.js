import React from 'react'
import './style.css'

const PageHeader = ({ title, intro }) => {
  return (
    <header className="main-header">
      <h1 className="main-header-title">{title}</h1>
      <p className="main-header-intro">{intro}</p>
    </header>
  )
}

export default PageHeader