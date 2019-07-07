import React from "react";
import Quotes from "../quotes/Quotes";
import QuoteForm from "../quotes/QuoteForm";
import QuoteFilter from "../quotes/QuoteFilter";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            <QuoteForm />
          </div>
        </div>
        <div className="col">
          <QuoteFilter />
          <Quotes />
        </div>
      </div>
    </div>
  );
};

export default Home;
