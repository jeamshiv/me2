import * as actionTypes from "../HostActions/types";
import { combineReducers } from "redux";

//host reducer starts
const initial_host_state = {
  details: {},
  authStatus: false,
  propertyType: "",
};

const host_reducer = (state = initial_host_state, action) => {
  switch (action.type) {
    case actionTypes.SETHOSTAUTHSTATUS:
      return {
        ...state,
        authStatus: action.payload.authStatus,
      };
    case actionTypes.SETHOSTDETAILS:
      return {
        ...state,
        details: action.payload.hostDetail,
      };
    case actionTypes.SETHOSTPROPERTYTYPE:
      return {
        ...state,
        propertyType: action.payload.propertyType,
      };
    default:
      return state;
  }
};
//host reducer ends

//combining all the reducers in one and exporting for glabal accessibility
const rootReducer = combineReducers({
  host: host_reducer,
});

export default rootReducer;
