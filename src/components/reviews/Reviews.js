import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.map(review => <Review key={review.id} review={review} deleteReview={this.props.deleteReview} />)
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;