import React, { Component } from 'react';
// import gallery from '../data/gallery';

class Gallery extends Component {
  render() {
  	var datas = this.props.route.data;

    return (
      <div className="homeContainer">
          {datas.map(data => {
            return <img key={data.id} src={data.image} className="galleryImage  animated zoomIn delay"/>
          })}
      </div>
    );
  }
}

export default Gallery;