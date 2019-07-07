import React, { Fragment, useContext } from "react";
import QuoteContext from "../../context/quote/quoteContext";
import QuoteItem from "./QuoteItem";

const Quotes = () => {
  const quoteContext = useContext(QuoteContext);

  const { quotes, filtered } = quoteContext;

  if (quotes.length === 0) {
    return <h4>Please add a quote</h4>;
  }

  return (
    <div>
      <Fragment>
        {filtered !== null
          ? filtered.map(quote => <QuoteItem key={quote.id} quote={quote} />)
          : quotes.map(quote => <QuoteItem key={quote.id} quote={quote} />)}
      </Fragment>
    </div>
  );
};

export default Quotes;
