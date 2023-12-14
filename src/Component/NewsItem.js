import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
   let {title, description, imgurl, newsurl} = this.props



    return (
      <div className="card">
       <img src={!imgurl?"https://cdn.mos.cms.futurecdn.net/JxUb9xDNrvsf3r5TjZdaDi-1200-80.jpeg":imgurl} className="card-img-top" alt="..."/>
          <div className="card-body">
          <h5 className="card-title">{title}...</h5>
             <p className="card-text">{description}...</p>
          <a href={newsurl} target='-blank' className="btn btn-primary">ReadMore</a>
          </div>
     </div>
    );
  }
}

export default NewsItem;
