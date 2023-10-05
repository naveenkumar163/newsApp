import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "17rem" }}>
          <span className="position-absolute translate-middle badge rounded-pill bg-success" style={{ zIndex: '1', left: '85%', marginTop: '10px' }}>
            {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." height="200" />
          <div className="card-body">
            <h5 className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-muted">
                By&nbsp;
                <span style={{ fontWeight: "bold" }}>
                  {author ? author : "Unknown"}
                </span>&nbsp;
                on&nbsp;
                <span style={{ fontWeight: "bold" }}>
                  {new Date(date).toGMTString()}
                </span>
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm"
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
