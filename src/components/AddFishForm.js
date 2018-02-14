import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AddFishForm extends Component {

  createFish(event){
    event.preventDefault();
    console.log('Gonna create some fish');

    const fish = {
      name : this.name.value,
      price : this.price.value,
      status : this.status.value,
      desc : this.desc.value,
      image : this.image.value
    };

    this.props.addFish(fish);
    this.fishForm.reset();
  }

  render() {
    return (
      <form 
        ref = { input => this.fishForm = input }
        className="fish-edit" 
        onSubmit={(e) => { this.createFish(e) }}>
        <input ref={(input) => this.name = input } type="text" placeholder="name" />
        <input ref={(input) => this.price = input } type="text" placeholder="price" />
        <select ref={(input) => this.status = input } name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={(input) => this.desc = input } placeholder="desc"></textarea>
        <input ref={(input) => this.image = input } type="text" placeholder="image" />
        <button type="submit">+ Add Item</button>
      </form>
    );
  }
}

AddFishForm.propTypes = {
  addFish: PropTypes.func.isRequired
}

export default AddFishForm;
