import React, { Component } from 'react'
import Header from './components/Header'
import Add from './pages/add/Add'
import Home from './pages/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import DirigentList from './pages/Home/DirigentList'
import Show from './pages/Home/Show'
import Edit from './pages/Home/Edit'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ajouter" component={Add} />
          <Route exact path="/dirigeant" component={DirigentList} />
          <Route exact path="/show/:id" component={(id) => <Show ide={id} />} />
          <Route exact path="/edit/:id" component={(id) => <Edit ide={id} />} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
