import React, { useContext, useEffect } from "react";
import Quotes from "../quotes/Quotes";
import QuoteForm from "../quotes/QuoteForm";
import QuoteFilter from "../quotes/QuoteFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
