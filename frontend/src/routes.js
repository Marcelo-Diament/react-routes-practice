import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import SobrePage from './pages/SobrePage'
import TopicosPage from './pages/TopicosPage'
import TopicoPage from './pages/TopicoPage'
import ArtigoPage from './pages/ArtigoPage'

const Routes = () => {
  return (
    <Router>
      <Route path="/" component={Header} />
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