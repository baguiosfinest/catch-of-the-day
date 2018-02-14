import React, { Component } from 'react';
import '../css/animation.css';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';

class Order extends Component {

  constructor(){
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key){
    const fish = this.props.fishes[key];
    const count = this.props.orders[key];

    if(!fish || fish.status === 'unavailable'){
      return <li key={key}>Sorry, { fish? fish.name : 'fish' } is no longer available!</li>
    }

    return (
      <li key = {key}>
        <i className="close" onClick = {() => this.props.removeOrder(key)}>x</i>
        <span>
          <CSSTransitionGroup className="count-wrap"
            transitionName="count"
            component="span"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}>
            <span key={count}>{count} </span>
          </CSSTransitionGroup>
          lbs {fish.name}
        </span>
        <span className="price">
          {count*fish.price}
        </span>
      </li>
    )

  }

  render() {
    const orderIds = Object.keys(this.props.orders);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.orders[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable){
        return prevTotal + (count * fish.price || 0)
      }
      return prevTotal;
    }, 0);

    return (
      <div className="Order">
        <h2>Your Orders:</h2>
        <CSSTransitionGroup 
          className="order"
          component="ul"
          transitionName="order"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>

          {orderIds.map(this.renderOrder)}

          <li className="total">
            <strong>Total: </strong>
            { total }
          </li>
        </CSSTransitionGroup>
      </div>
    );
  }
}

Order.propTypes = {
  removeOrder: PropTypes.func.isRequired,
  orders: PropTypes.object.isRequired,
  fishes: PropTypes.object.isRequired
}

export default Order;
