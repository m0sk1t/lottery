import React from "react";
import {
  Badge,
  Label,
  Panel,
  Button,
} from 'react-bootstrap';
import "./GoodItem.css";

const GoodItem = ({ ttl, item, participate, isParticipated }) => {
  return (
    <Panel className="GoodItem">
      <Panel.Heading>
        <Panel.Title componentClass="h3">Total participants <Badge>{item.participants.length}</Badge></Panel.Title>
      </Panel.Heading>
      <Panel.Body>
        <h4>{item.title}</h4>
        <img src={item.icon} alt="how it looks" />
        <p>{item.description}</p>
        <p>Price: {item.price} <strong>₽</strong></p>
        <p>
          {
            ttl
              ? <Label bsStyle="success">{ttl}</Label>
              : <Label bsStyle="warning">{item.winner|| 'winner'}</Label>
          }
        </p>
        {
          isParticipated
            ? <Button onClick={participate} bsStyle="danger">Drop ticket</Button>
            : <Button onClick={participate} bsStyle="primary">Buy ticket ({item.ticketPrice}₽)</Button>
        }
      </Panel.Body>
    </Panel>
  );
}

export default GoodItem;