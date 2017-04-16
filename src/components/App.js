import React, { Component } from 'react'
import { Link } from 'react-router'
// import logo from '../static/img/header.jpg';

class NavBar extends React.Component{
  render() {
    return (
      <div className="Nav">
        <div><Link to="/"><img src="/img/logo.jpg"/></Link></div>
        <div><Link to="/Articles" className="NavText">Articles</Link></div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div>
          <NavBar/>
          { this.props.children } 
          <div className="footer">foot</div>
      </div>
    )
  }
}

export default App