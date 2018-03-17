import React, { Component } from 'react';
import { connect } from "react-redux";
import moment from "moment";
import {
  Badge,
  Panel,
  Button,
  FormGroup,
  FormControl,
} from 'react-bootstrap';

import './App.css';
import logo from './logo.svg';
import {
  updateUser,
  createGoodsItem,
  updateGoodsItem,
} from "./actions";
import GoodItem from "./components/GoodItem";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ttls: {},
      item: {},
    }
    setInterval(() => this.updateTTLS(), 1000);
  }

  updateTTLS() {
    const { goods } = this.props;
    if (!goods.length) return;
    const newTTLS = {};
    const newDate = moment();
    this.props.goods.forEach(goodItem => {
      if (newDate.diff(goodItem.endDate) >= 0) {
        newTTLS[goodItem._id] = false;
      } else {
        newTTLS[goodItem._id] = moment(newDate.diff(goodItem.endDate)).format('h:mm:ss')
      }
    });
    this.setState({ ttls: newTTLS });
  }

  setItemField(e, field) {
    const newItem = {
      ...this.state.item,
      [field]: e.target.value,
    }
    this.setState({ item : newItem });
  }

  capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  createGoodsItem() {
    if (Object.keys(this.state.item).filter(key => !this.state.item[key]).length) return;
    this.props.createGoodsItem(this.state.item);
    this.setState({ item: {} });
  }

  buildUserName(name) {
    if (!name) return;
    return `${this.capitalizeFirstLetter(name.first)} ${this.capitalizeFirstLetter(name.last)}`;
  }

  updateGoodsItem(id, uid) {
    this.props.updateGoodsItem(id, uid);
  }
  renderGoodItem(user, goodItem) {
    const isParticipated = goodItem.participants.includes(user._id);
    const props = {
      isParticipated,
      item: goodItem,
      key: goodItem._id,
      ttl: this.state.ttls[goodItem._id],
      participate: () => {
        this.props.updateUser(user._id, Number(isParticipated), goodItem.ticketPrice);
        user.money >= goodItem.ticketPrice && this.props.updateGoodsItem(goodItem._id, user._id);
      },
    }
    return <GoodItem {...props} />
  }

  render() {
    const { user, goods } = this.props;
    const userName = this.buildUserName(user.name);
    return (
      <div className="App">
        <header className="App-header">
          {
            user.picture
              ? <img src={user.picture.medium} alt="avatar" />
              : <img src={logo} className="App-logo" alt="logo" />
          }
          {
            userName
              ? <h2 className="App-title">{userName}, welcome to Goods lottery, your account amount is <Badge>{user.money}₽</Badge></h2>
              : <h2 className="App-title">Welcome to Goods lottery <Button bsStyle="success">LogIn</Button></h2>
          }
        </header>
        <p className="App-intro"><strong>Our offers:</strong></p>
        <div className="App-goods">
          <Panel className="GoodItem">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Fill out item fields</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="icon"
                  componentClass="input"
                  onChange={(e) => this.setItemField(e, 'icon')}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="title"
                  componentClass="input"
                  onChange={(e) => this.setItemField(e, 'title')}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="number"
                  placeholder="price"
                  componentClass="input"
                  onChange={(e) => this.setItemField(e, 'price')}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="description"
                  componentClass="input"
                  onChange={(e) => this.setItemField(e, 'description')}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="datetime-local"
                  placeholder="endDate"
                  componentClass="input"
                  onChange={(e) => this.setItemField(e, 'endDate')}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="number"
                  placeholder="ticketPrice"
                  componentClass="input"
                  onChange={(e) => this.setItemField(e, 'ticketPrice')}
                />
              </FormGroup>
              <Button bsStyle="success" onClick={() => this.createGoodsItem()}>Add Item</Button>
            </Panel.Body>
          </Panel>
          {goods.map(goodItem => this.renderGoodItem(user, goodItem))}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    goods: state.goods,
  }),
  dispatch => ({
    createGoodsItem: item => dispatch(createGoodsItem(item)),
    updateGoodsItem: (id, uid) => dispatch(updateGoodsItem(id, uid)),
    updateUser: (id, participated, ticketPrice) => dispatch(updateUser(id, participated, ticketPrice)),
  })
)(App);
