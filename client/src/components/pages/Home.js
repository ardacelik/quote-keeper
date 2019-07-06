import React from "react";
import Quotes from "../quotes/Quotes";
import QuoteFrom from "../quotes/QuoteForm";

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div>
            <QuoteFrom />
          </div>
        </div>
        <div className="col">
          <Quotes />
        </div>
      </div>
    </div>
  );
};

export default Home;
