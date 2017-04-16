import React, { Component } from 'react';


class PetData extends Component {
  render() {
    return (
      <div>
        <div><a>Name:</a> {this.props.data.name}</div>
        <div><a>Gender:</a> {this.props.data.gender}</div>
        <div><a>Birth Year:</a> {this.props.data.birth}</div>
        <div><a>Owner:</a> {this.props.data.owner}</div>
        <div><a>Description:</a> <div>{this.props.data.description}</div></div>
      </div>
    );
  }
}

export default PetData;