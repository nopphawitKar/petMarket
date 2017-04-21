import React, { Component } from 'react';
import { Link } from 'react-router';
// import { Button } from 'reactstrap';
// import './static/css/App.css';

class ImageContainer extends Component {
  render() {
    const src = this.props.src;
    const link = this.props.link;
    const cssClass = this.props.cssClass;
    return (
    <Link to={link}>
      	<div className="imgContainer">
        	<img src={src} className={cssClass}/>
        	<div className="waterprint">{this.props.waterPrint}</div>
      	</div>
    </Link>
    );
  }
}

export default ImageContainer;
