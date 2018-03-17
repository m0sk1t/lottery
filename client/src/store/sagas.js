import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import * as Api from './api';
import {
  createUser,
  userCreated,
  userUpdated,
  goodsReceived,
  goodsItemCreated,
  goodsItemUpdated,
} from '../actions';
import {
  FETCH_USER,
  FETCH_GOODS,
  CREATE_USER,
  UPDATE_USER,
  CREATE_GOODS_ITEM,
  UPDATE_GOODS_ITEM,
} from '../actions/types';

function* getUser(action) {
  try {
    const res = yield call(Api.fetchUser);
    const user = {
      money: 1000,
      ...(res.results[0])
    }
    yield put(createUser(user));
  } catch (e) {
    console.error(e.message);
  }
}

function* addUser(action) {
  try {
    const user = yield call(Api.createUser, action.data);
    yield put(userCreated(user));
  } catch (e) {
    console.error(e.message);
  }
}

function* updateUser(action) {
  try {
    const user = yield call(Api.updateUser, action.id, action.participated, action.ticketPrice);
    yield put(userUpdated(user));
  } catch (e) {
    console.error(e.message);
  }
}

function* getGoods(action) {
  try {
    const goods = yield call(Api.fetchGoods);
    yield put(goodsReceived(goods));
  } catch (e) {
    console.error(e.message);
  }
}

function* addGoodsItem(action) {
  try {
    const goodsItem = yield call(Api.createGoodsItem, action.data);
    yield put(goodsItemCreated(goodsItem));
  } catch (e) {
    console.error(e.message);
  }
}

function* updateGoodsItem(action) {
  try {
    const goodsItem = yield call(Api.updateGoodsItem, action.id, action.uid);
    yield put(goodsItemUpdated(goodsItem));
  } catch (e) {
    console.error(e.message);
  }
}

function* sagas() {
  yield takeLatest(FETCH_USER, getUser);
  yield takeLatest(CREATE_USER, addUser);
  yield takeLatest(FETCH_GOODS, getGoods);
  yield takeLatest(UPDATE_USER, updateUser);
  yield takeLatest(CREATE_GOODS_ITEM, addGoodsItem);
  yield takeLatest(UPDATE_GOODS_ITEM, updateGoodsItem);
}

export default sagas;