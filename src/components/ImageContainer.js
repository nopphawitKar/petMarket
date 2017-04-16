import React, { Component } from 'react';
import { Link } from 'react-router';
// import { Button } from 'reactstrap';
// import './static/css/App.css';

class ImageContainer extends Component {
  render() {
    const src = this.props.src;
    const link = this.props.link;
    return (
    <Link to={link}>
      	<div className="imgContainer">
        	<img src={src} className="homeImage"/>
        	<div className="waterprint">{this.props.waterPrint}</div>
      	</div>
    </Link>
    );
  }
}

export default ImageContainer;
