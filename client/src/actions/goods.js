import {
  FETCH_GOODS,
  GOODS_RECEIVED,
  CREATE_GOODS_ITEM,
  RECEIVE_GOODS_ITEM,
  UPDATE_GOODS_ITEM,
  DELETE_GOODS_ITEM,

  GOODS_ITEM_CREATED,
  GOODS_ITEM_RECEIVED,
  GOODS_ITEM_UPDATED,
  GOODS_ITEM_DELETED,
} from "./types";

export const fetchGoods = () => ({
  type: FETCH_GOODS,
});

export const goodsReceived = (data) => ({
  type: GOODS_RECEIVED,
  data,
});

export const createGoodsItem = (data) => ({
  type: CREATE_GOODS_ITEM,
  data,
});

export const receiveGoodsItem = (data) => ({
  type: RECEIVE_GOODS_ITEM,
  data,
});

export const updateGoodsItem = (id, uid) => ({
  type: UPDATE_GOODS_ITEM,
  uid,
  id,
});

export const deleteGoodsItem = (data) => ({
  type: DELETE_GOODS_ITEM,
  data,
});


export const goodsItemCreated = (data) => ({
  type: GOODS_ITEM_CREATED,
  data,
});

export const goodsItemReceived = (data) => ({
  type: GOODS_ITEM_RECEIVED,
  data,
});

export const goodsItemUpdated = (data) => ({
  type: GOODS_ITEM_UPDATED,
  data,
});

export const goodsItemDeleted = (data) => ({
  type: GOODS_ITEM_DELETED,
  data,
});
