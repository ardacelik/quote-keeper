import React, { useState, useContext, useEffect } from "react";
import QuoteContext from "../../context/quote/quoteContext";

const QuoteForm = () => {
  const quoteContext = useContext(QuoteContext);

  const { addQuote, updateQuote, clearCurrent, current } = quoteContext;

  useEffect(() => {
    if (current !== null) {
      setQuote(current);
    } else {
      setQuote({
        text: "",
        author: ""
      });
    }
  }, [quoteContext, current]);

  const [quote, setQuote] = useState({
    text: "",
    author: ""
  });

  const { text, author } = quote;

  const onChange = e => setQuote({ ...quote, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addQuote(quote);
    } else {
      updateQuote(quote);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit} className="mt-3">
      <h2 className="text-center">{current ? "Edit Quote" : "Add Quote"}</h2>
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
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value={current ? "Update Quote" : "Add Quote"}
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-info btn-block mt-2" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default QuoteForm;
