import React, { Component } from 'react'
import { Link } from 'react-router'
import contacts from '../data/contacts';
// import logo from '../static/img/header.jpg';

class NavBar extends React.Component{
  render() {
    return (
      <div className="Nav">
        <div><Link to="/"><img src="/img/logo.jpg"/></Link></div>
        <div><Link to="/Articles" className="NavText">Articles</Link></div>
        <div><Link to="/" className="NavText">Pets&Products</Link></div>
        <div><Link to="/Gallery" className="NavText">Gallery</Link></div>
      </div>
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <div className="footer">
        <div>
          {contacts.map(data => {
            return(
              <a href={data.url} key={data.id}>
                <img className="contact" src={data.image}/>
              </a>
            ) 
          })}
        </div>
        <div>
          <a>Contacts</a>
          <a>Edcent Co., Ltd. Room.513 1+6Resident Inthamara21 Samsainnai Phayathai Bangkok 10400 </a>
        </div>
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
          <Footer/>
      </div>
    )
  }
}

export default App