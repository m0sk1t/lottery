import {
  GOODS_RECEIVED,
  GOODS_ITEM_CREATED,
  GOODS_ITEM_RECEIVED,
  GOODS_ITEM_UPDATED,
  GOODS_ITEM_DELETED,
} from "../actions/types";

const initialState = [];
const goods = (state = initialState, action) => {
  switch (action.type) {
    case GOODS_ITEM_CREATED: {
      const newState = state.map(Object.create);
      newState.push(action.data);
      return newState;
    }
    case GOODS_RECEIVED:
      return action.data;
    case GOODS_ITEM_RECEIVED:
      return [action.data];
    case GOODS_ITEM_UPDATED: {
        const newState = state.map(Object.create);
        return newState.map(item => item._id === action.data._id ? action.data : item);
    }
    case GOODS_ITEM_DELETED:
      break;
    default:
      return state;
  }
}

export default goods;
