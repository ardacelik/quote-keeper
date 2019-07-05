import React, { useReducer } from "react";
import uuid from "uuid";
import QuoteContext from "./quoteContext";
import quoteReducer from "./quoteReducer";
import {
  ADD_QUOTE,
  DELETE_QUOTE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_QUOTE,
  FILTER_QUOTES,
  CLEAR_FILTER
} from "../types";

const QuoteState = props => {
  const initialState = {
    quotes: [
      {
        id: 1,
        quote: "quote 1",
        author: "Arda"
      },
      {
        id: 2,
        quote: "quote 2",
        author: "Anil"
      },
      {
        id: 3,
        quote: "quote 3",
        author: "Celik"
      }
    ]
  };

  const [state, dispatch] = useReducer(quoteReducer, initialState);

  // Add Quote

  // Delete Quote

  // Set Current Quote

  // Clear Current Quote

  // Update Quote

  // Filter Quotes

  // CLear Filter

  return (
    <QuoteContext.Provider
      value={{
        quotes: state.quotes
      }}
    >
      {props.children}
    </QuoteContext.Provider>
  );
};

export default QuoteState;
