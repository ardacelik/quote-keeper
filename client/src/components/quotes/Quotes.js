import React, { Fragment, useContext } from "react";
import QuoteContext from "../../context/quote/quoteContext";
import QuoteItem from "./QuoteItem";

const Quotes = () => {
  const quoteContext = useContext(QuoteContext);

  const { quotes } = quoteContext;

  return (
    <div>
      <Fragment>
        {quotes.map(quote => (
          <QuoteItem key={quote.id} quote={quote} />
        ))}
      </Fragment>
    </div>
  );
};

export default Quotes;
