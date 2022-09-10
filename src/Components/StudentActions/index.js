import * as actionTypes from "./types";

//set host details to redux after login
export const setHostDetails = (obj) => {
  return {
    type: actionTypes.SETHOSTDETAILS,
    payload: {
      hostDetail: obj,
    },
  };
};

//set auth status to redux for host true / false

export const setHostAuthStatus = (status) => {
  return {
    type: actionTypes.SETHOSTAUTHSTATUS,
    payload: {
      authStatus: status,
    },
  };
};

//set property type to redux for host
export const setHostPropertyType = (obj) => {
  return {
    type: actionTypes.SETHOSTPROPERTYTYPE,
    payload: {
      propertyType: obj,
    },
  };
};
