import {
  ADD_QUOTE,
  DELETE_QUOTE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_QUOTE,
  FILTER_QUOTES,
  CLEAR_FILTER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_QUOTE:
      return {
        ...state,
        quotes: [...state.quotes, action.payload]
      };
    default:
      return state;
  }
};
