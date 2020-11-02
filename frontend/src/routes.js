import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { detectDevice } from './utils'
import Header from './components/Header'
import ArtigoPage from './pages/ArtigoPage'
import HomePage from './pages/HomePage'
import SobrePage from './pages/SobrePage'
import TopicoPage from './pages/TopicoPage'
import TopicosPage from './pages/TopicosPage'

const Routes = () => {
  const [currentDevice, setCurrentDevice] = useState(detectDevice())

  useEffect(() => {
    const updateDeviceDimensions = () => {
      setCurrentDevice(detectDevice())
    }
    window.addEventListener('resize', updateDeviceDimensions)
    updateDeviceDimensions()
    return () => {
      window.removeEventListener('resize', updateDeviceDimensions)
    }
  }, [currentDevice])

  return (
    <Router>
      <Route path="/">
        <Header currentDevice={currentDevice} />
      </Route>
      <main className="main">
        <Switch>
          <Route path="/sobre" component={SobrePage} />
          <Route exact path="/topicos/:topico/:artigo" component={ArtigoPage} />
          <Route exact path="/topicos/:topico" component={TopicoPage} />
          <Route exact path="/topicos" component={TopicosPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </Router>
  )
}

export default Routes