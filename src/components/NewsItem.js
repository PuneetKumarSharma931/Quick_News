import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, author, published, source } = this.props;

    return (
      <div className="my-3">
        <div className="card">
            <span className="badge rounded-pill bg-danger" style={{zIndex: '1', position: 'absolute', right: '0'}}>{source?source:"Unknown"}</span>
          <img src={imageUrl} className="card-img-top" alt="news" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                by {author ? author : "Unknown"} on{" "}
                {new Date(published).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
