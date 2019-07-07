import React, { useContext, useRef, useEffect } from "react";
import QuoteContext from "../../context/quote/quoteContext";

const QuoteFilter = () => {
  const quoteContext = useContext(QuoteContext);
  const textToFilter = useRef("");

  const { filterQuotes, clearFilter, filtered } = quoteContext;

  useEffect(() => {
    if (filtered === null) {
      textToFilter.current.value = "";
    }
  });

  const onChange = e => {
    if (textToFilter.current.value !== "") {
      filterQuotes(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className="mt-3">
      <input
        className="form-control"
        ref={textToFilter}
        type="text"
        placeholder="Filter Quotes..."
        onChange={onChange}
      />
    </form>
  );
};

export default QuoteFilter;
