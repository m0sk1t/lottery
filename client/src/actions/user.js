import {
  FETCH_USER,
  CREATE_USER,
  RECEIVE_USER,
  UPDATE_USER,
  DELETE_USER,

  USER_CREATED,
  USER_RECEIVED,
  USER_UPDATED,
  USER_DELETED,
} from "./types";

export const fetchUser = () => ({
  type: FETCH_USER,
});

export const createUser = (data) => ({
  type: CREATE_USER,
  data,
});

export const receiveUser = (data) => ({
  type: RECEIVE_USER,
  data,
});

export const updateUser = (id, participated, ticketPrice) => ({
  type: UPDATE_USER,
  participated,
  ticketPrice,
  id,
});

export const deleteUser = (data) => ({
  type: DELETE_USER,
  data,
});


export const userCreated = (data) => ({
  type: USER_CREATED,
  data,
});

export const userReceived = (data) => ({
  type: USER_RECEIVED,
  data,
});

export const userUpdated = (data) => ({
  type: USER_UPDATED,
  data,
});

export const userDeleted = (data) => ({
  type: USER_DELETED,
  data,
});
