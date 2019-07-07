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
    case UPDATE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.map(quote =>
          quote.id === action.payload.id ? action.payload : quote
        )
      };
    case DELETE_QUOTE:
      return {
        ...state,
        quotes: state.quotes.filter(quote => quote.id !== action.payload)
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case FILTER_QUOTES:
      return {
        ...state,
        filtered: state.quotes.filter(quote => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return quote.text.match(regex) || quote.author.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    default:
      return state;
  }
};
