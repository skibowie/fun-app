import { CHANGE_STATUS_FETCHING, CHANGE_STATUS_FULFILLED, SET_USER_DATA } from "../../types";

const initialState = {
  userData: {
    name: "",
    email: "",
  },
  error: "",
  status: "FULFILLED",
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_STATUS_FETCHING:
      return {
        ...state,
        status: "FETCHING",
      };
    case CHANGE_STATUS_FULFILLED:
      return {
        ...state,
        status: "FULFILLED",
      };
    case SET_USER_DATA: 
      return {
        ...state,
        userData: payload,
        error: "",
      };
    default:
      return state;
  }
};
