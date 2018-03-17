import {
  USER_CREATED,
  USER_RECEIVED,
  USER_UPDATED,
  USER_DELETED,
} from "../actions/types";

const initialState = {};
const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_CREATED:
      return action.data;
    case USER_RECEIVED:
      return action.data;
    case USER_UPDATED:
      return action.data;
    case USER_DELETED:
      return initialState;
    default:
      return initialState;
  }
}

export default user;
