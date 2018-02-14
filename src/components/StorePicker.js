import React, {Component} from 'react';
import { getFunName } from '../helpers';

class StorePicker extends Component{

  // constructor(){
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(e){
    e.preventDefault();
    const storeName = this.storeInput.value;
    this.props.history.push(`/store/${storeName}`);
  }
  
  render(){
    return(
      <form className="store-selector" 
        onSubmit = { (e) => this.goToStore(e) }>
        { /* Store Selector - only inside react element */ }
        <h2>Please Enter a Store</h2>
        <input type="text" 
          required 
          placeholder="Store Name" 
          defaultValue={ getFunName() } 
          ref={(input) =>{ this.storeInput = input } } />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default StorePicker;