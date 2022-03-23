import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';

const Product = (props) => {
  return(
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.imageUrl} />
      <Card.Body>
        <Card.Title>{props.data.productName}</Card.Title>
        {props.data.releasedDate}
        <Rating rating={props.data.rating} numOfReviews={props.data.numOfReviews}/>
        <Card.Text>
          {props.data.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
    </div>
  )
}

export default Product;
