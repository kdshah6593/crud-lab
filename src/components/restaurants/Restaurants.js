import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  render() {
    
    const restaurants = this.props.restaurants.map(restaurant => <Restaurant deleteRestaurant={this.props.deleteRestaurant} key={restaurant.id} restaurant={restaurant} />)

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;