const LOCAL_HOST = '';
// const LOCAL_HOST = 'http://localhost:9999';
const NEW_USER = 'https://randomuser.me/api/?inc=name,picture';

const headers = {
  'Accept': 'application/json',
  "Content-Type": "application/json; charset=utf-8",
};

export const fetchUser = () => {
  return fetch(NEW_USER)
    .then(res => res.json());
};

export const fetchGoods = () => {
  return fetch(`${LOCAL_HOST}/goods`)
    .then(res => res.json());
};

export const createUser = (data) => {
  return fetch(`${LOCAL_HOST}/users`, { headers, body: JSON.stringify(data), method: 'POST' })
    .then(res => res.json());
};

export const updateUser = (id, participated, ticketPrice) => {
  return fetch(`${LOCAL_HOST}/users/${id}/${participated}/${ticketPrice}`, { headers, method: 'PUT' })
    .then(res => res.json());
};

export const createGoodsItem = (data) => {
  return fetch(`${LOCAL_HOST}/goods`, { headers, body: JSON.stringify(data), method: 'POST' })
    .then(res => res.json());
};

export const updateGoodsItem = (id, user) => {
  return fetch(`${LOCAL_HOST}/goods/${id}/participate/${user}`, { headers, method: 'PUT' })
    .then(res => res.json());
};
