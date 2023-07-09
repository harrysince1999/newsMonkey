import React from "react";

const NewsItems = (props) => {
  return (
    <div className="col-md-3">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="/" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
