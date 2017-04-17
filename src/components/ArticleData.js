import React, { Component } from 'react';
import ReadMoreReact from 'read-more-react';

class ArticleData extends Component {
  render() {
    return (
      <div>
        <div><a>title:</a> {this.props.data.title}</div>
        <div><a>author:</a> {this.props.data.author}</div>
      </div>
    );
  }
}

export default ArticleData;