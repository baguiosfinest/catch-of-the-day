import React, { Component } from 'react';
import './App.css';

import base from '../base';

import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';

import fishes from '../sampleFishes';

import PropTypes from 'prop-types';

class App extends Component {
  constructor(){
    super();

    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.updateFish = this.updateFish.bind(this);
    this.removeFish = this.removeFish.bind(this);

    this.addToOrder = this.addToOrder.bind(this);
    this.removeOrder = this.removeOrder.bind(this);

    this.state = {
      fishes: {},
      orders: {}
    };

  }

  componentWillMount(){
    const storeId = this.props.match.params.storeId;
    this.ref = base.syncState(`${storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
    const localStorageRef = localStorage.getItem(`order-${this.props.match.params.storeId}`);
    if(localStorageRef){
      this.setState({
        orders: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem(`order-${this.props.match.params.storeId}`, JSON.stringify(nextState.orders));

  }

  addFish(fish){
    // update state
    const fishes = {...this.state.fishes};
    const timestamp = Date.now();
    // add fish
    fishes[`fish-${timestamp}`] = fish;

    // set state
    this.setState({ 
      fishes: fishes
    });
  }

  updateFish(key, updatedfish){
    const fishes = { ...this.state.fishes};
    fishes[key] = updatedfish;
    this.setState({ fishes });
  }

  removeFish(key){
    const fishes = {...this.state.fishes}
    fishes[key] = null;
    this.setState({
      fishes
    });
  }

  loadSamples(){
    this.setState({
      fishes: fishes
    })
  }

  addToOrder(key){
    const orders = {...this.state.orders};
    orders[key] = orders[key] + 1 || 1;
    this.setState({
      orders
    });
  }

  removeOrder(key){
    const orders = {...this.state.orders};
    delete orders[key];
    this.setState({
      orders
    });
  }

  

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh seafood market" ></Header>
          <ul className="list-of-fishes">
            { 
              Object
                .keys(this.state.fishes) 
                .map((key, index) => <Fish key={key} 
                  index = {key}
                  details = { this.state.fishes[key] }
                  addToOrder = { this.addToOrder } />)
            }
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes} 
          orders={this.state.orders} 
          removeOrder = { this.removeOrder }
          params={this.props.match.params}
        />
        <Inventory 
          addFish = { this.addFish } 
          updateFish = { this.updateFish }
          loadSamples = { this.loadSamples }
          removeFish = { this.removeFish }
          fishes = {this.state.fishes} />
      </div>
    );
  }
}

App.propTypes = {
  params: PropTypes.object
}

export default App;
