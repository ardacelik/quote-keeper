import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import QuoteContext from "../../context/quote/quoteContext";
import Spinner from "../layout/Spinner";
import QuoteItem from "./QuoteItem";

const Quotes = () => {
  const quoteContext = useContext(QuoteContext);

  const { quotes, filtered, getQuotes, loading } = quoteContext;

  useEffect(() => {
    getQuotes();
    // eslint-disable-next-line
  }, []);

  if (quotes !== null && quotes.length === 0 && !loading) {
    return <h4 className="m-2">Please add a quote</h4>;
  }

  return (
    <div>
      <Fragment>
        {quotes !== null && !loading ? (
          <TransitionGroup>
            {filtered !== null
              ? filtered.map(quote => (
                  <CSSTransition
                    key={quote._id}
                    timeout={500}
                    classNames="item"
                  >
                    <QuoteItem quote={quote} />
                  </CSSTransition>
                ))
              : quotes.map(quote => (
                  <CSSTransition
                    key={quote._id}
                    timeout={500}
                    classNames="item"
                  >
                    <QuoteItem quote={quote} />
                  </CSSTransition>
                ))}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}
      </Fragment>
    </div>
  );
};

export default Quotes;
