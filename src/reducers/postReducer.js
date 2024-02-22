import { ACTION_TYPES } from "./ActionTypes";
export const INITIAL_STATE = {
  loading: false,
  post: null,
  error: false,
  errorData: null,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        ...state,
        loading: true,
        post: null,
        error: null,
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        post: action.payload,
        error: null,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        loading: false,
        post: null,
        error: true,
        errorData: action.payload,
      };
    case ACTION_TYPES.RESET:
      return {
        loading: false,
        post: null,
        error: false,
        errorData: null,
      };
    default:
      return {
        loading: false,
        post: null,
        error: false,
        errorData: null,
      };
  }
};

export const emptyReturnPostReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        loading: true,
        post: false,
        error: false,
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        post: true,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        loading: false,
        post: false,
        error: action.payload,
      };
    case ACTION_TYPES.RESET:
      return {
        loading: false,
        post: false,
        error: false,
      };
    default:
      return {
        loading: false,
        post: false,
        error: false,
      };
  }
};
