import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {

  render() {

    const restaurants = this.props.store.getState().restaurants.map((restaurant, index) => {
      return <Restaurant text={restaurant.text} key={index} store={this.props.store} id={restaurant.id} restaurant={restaurant}/>
    });

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
