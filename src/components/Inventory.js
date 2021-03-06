import React, { Component } from 'react';
import AddFishForm from './AddFishForm';

import PropTypes from 'prop-types';

class Inventory extends Component {

  constructor(){
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, key){
    const fish = this.props.fishes[key];
    const updatedFish = {
      ...fish,
      [e.target.name] : e.target.value
    }
    this.props.updateFish(key, updatedFish);

  }

  renderInventory(key){
    const fish = this.props.fishes[key];
    return(
      <div className="fish-edit" key={key}>
        <input type="text" value={fish.name} 
          name="name" placeholder="Fish Name"
          onChange={(e)=> this.handleChange(e, key)}
        />        
        <input type="text" 
          value={fish.price} name="price" placeholder="Fish Price"
          onChange={(e)=> this.handleChange(e, key)}
        />
        <select type="text" 
          value={fish.status} name="status" placeholder="Fish Status"
          onChange={(e)=> this.handleChange(e, key)}
          >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" 
          onChange={(e)=> this.handleChange(e, key)}
          value={fish.desc} name="desc" placeholder="Fish Desc"></textarea>        
        <input 
          onChange={(e)=> this.handleChange(e, key)}
          type="text" value={fish.image} name="image" placeholder="Fish Image"/>
        <button onClick={()=> this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )
  }

  render() {
    return (
      <div className="Inventory">
        <h2>Inventory</h2>
        <AddFishForm 
          addFish = { this.props.addFish }
        />
        {
          Object.keys(this.props.fishes).map(this.renderInventory)
        }
        <button
        onClick={ this.props.loadSamples }>Load sample Fishes</button>
      </div>
    );
  }
}

Inventory.propTypes = {
  addFish: PropTypes.func.isRequired,
  fishes: PropTypes.object.isRequired,
  loadSamples: PropTypes.func.isRequired,
  updateFish: PropTypes.func.isRequired,
  removeFish: PropTypes.func.isRequired
}

export default Inventory;
