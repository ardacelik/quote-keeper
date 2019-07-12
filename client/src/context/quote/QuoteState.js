import React, { useReducer } from "react";
import axios from "axios";
import QuoteContext from "./quoteContext";
import quoteReducer from "./quoteReducer";
import {
  GET_QUOTES,
  CLEAR_QUOTES,
  ADD_QUOTE,
  DELETE_QUOTE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_QUOTE,
  FILTER_QUOTES,
  CLEAR_FILTER,
  QUOTE_ERROR
} from "../types";

const QuoteState = props => {
  const initialState = {
    quotes: null,
    current: null,
    filtered: null,
    error: null
  };

  const [state, dispatch] = useReducer(quoteReducer, initialState);

  // Get Quotes
  const getQuotes = async () => {
    try {
      const res = await axios.get("/api/quotes");

      dispatch({
        type: GET_QUOTES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: QUOTE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Quote
  const addQuote = async quote => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/quotes", quote, config);

      dispatch({
        type: ADD_QUOTE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: QUOTE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Quote
  const deleteQuote = async id => {
    try {
      const res = await axios.delete(`/api/quotes/${id}`);

      dispatch({
        type: DELETE_QUOTE,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: QUOTE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update Quote
  const updateQuote = async quote => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(`/api/quotes/${quote._id}`, quote, config);

      dispatch({
        type: UPDATE_QUOTE,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: QUOTE_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Quotes
  const clearQuotes = () => {
    dispatch({ type: CLEAR_QUOTES });
  };

  // Set Current Quote
  const setCurrent = quote => {
    dispatch({ type: SET_CURRENT, payload: quote });
  };

  // Clear Current Quote
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Filter Quotes
  const filterQuotes = textToFilter => {
    dispatch({ type: FILTER_QUOTES, payload: textToFilter });
  };

  // CLear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <QuoteContext.Provider
      value={{
        quotes: state.quotes,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addQuote,
        deleteQuote,
        setCurrent,
        clearCurrent,
        updateQuote,
        filterQuotes,
        clearFilter,
        getQuotes,
        clearQuotes
      }}
    >
      {props.children}
    </QuoteContext.Provider>
  );
};

export default QuoteState;
