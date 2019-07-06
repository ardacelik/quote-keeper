import React from "react";
import PropTypes from "prop-types";

const QuoteItem = ({ quote }) => {
  const { id, text, author } = quote;

  return (
    <div className="card m-3">
      <div className="card-header">Quote</div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>{text}</p>
          <footer className="blockquote-footer">
            {author}
            <p className="text-muted m-0">2 days ago</p>
          </footer>
        </blockquote>
      </div>
      <div className="card-footer ">
        <button className="btn btn-dark">Edit</button>
        <button className="btn btn-danger float-right">Delete</button>
      </div>
    </div>
  );
};

QuoteItem.propTypes = {
  quote: PropTypes.object.isRequired
};

export default QuoteItem;
