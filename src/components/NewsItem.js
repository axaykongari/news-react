import React, { Component } from "react";

export class NewsItem extends Component {
    descriptionStyle = {
        'textOverflow': 'ellipsis',
        'WebkitLineClamp': '2',
        'lineClamp': '2',
        'display': '-webkit-box',
        'WebkitBoxOrient': 'vertical',
        'overflow': 'hidden'
    }
  render() {
    let {title, description, image, url} = this.props;
    return (
      <div className="col-md-4 my-2">
        <div className="card" style={{ width: '18rem' }}>
          <img src={image?image:'https://img.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg?w=740&t=st=1672137935~exp=1672138535~hmac=4f7539739298da81a512bad4ed6105d1d426dee0e98dbddf039a1ac884c11f68'} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text" style={this.descriptionStyle}>
              {description}
            </p>
            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
                Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
