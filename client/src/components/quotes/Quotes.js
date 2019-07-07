import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
        <TransitionGroup>
          {filtered !== null
            ? filtered.map(quote => (
                <CSSTransition key={quote.id} timeout={500} classNames="item">
                  <QuoteItem quote={quote} />
                </CSSTransition>
              ))
            : quotes.map(quote => (
                <CSSTransition key={quote.id} timeout={500} classNames="item">
                  <QuoteItem quote={quote} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      </Fragment>
    </div>
  );
};

export default Quotes;
