import React, { useState, useContext } from "react";
import QuoteContext from "../../context/quote/quoteContext";

const QuoteForm = () => {
  const quoteContext = useContext(QuoteContext);

  const [quote, setQuote] = useState({
    text: "",
    author: ""
  });

  const { text, author } = quote;

  const onChange = e => setQuote({ ...quote, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    quoteContext.addQuote(quote);
    setQuote({
      text: "",
      author: ""
    });
  };

  return (
    <form onSubmit={onSubmit} className="mt-3">
      <h2 className="text-center">Add Quote</h2>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Text"
          name="text"
          value={text}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Author"
          name="author"
          value={author}
          onChange={onChange}
        />
      </div>
      <div>
        <button
          type="submit"
          value="Add Quote"
          className="btn btn-primary btn-block"
        >
          Add Quote
        </button>
      </div>
    </form>
  );
};

export default QuoteForm;
