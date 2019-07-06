import React, { Fragment, useContext } from "react";
import QuoteContext from "../../context/quote/quoteContext";

const Quotes = () => {
  const quoteContext = useContext(QuoteContext);

  const { quotes } = quoteContext;

  return (
    <div>
      <Fragment>
        {quotes.map(quote => (
          <h3>{quote.quote}</h3>
        ))}
      </Fragment>
    </div>
  );
};

export default Quotes;
