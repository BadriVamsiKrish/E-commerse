import React, { useContext } from 'react';
import { Button,Card,Row,Col } from 'react-bootstrap';
import { store } from '../App';
const ArrayItem = () => {
  const[cart,setCart,showcart,setShowcart]=useContext(store);
  const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity:1,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity:1,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity:1,
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    quantity:1,
    
    }
    
    ];

  
    const addToCart = (product) => {
      const existingItem = cart.find((item) => item.title === product.title);
    
      if (existingItem) {
        // If the item already exists in the cart, update its quantity property
        const updatedCart = cart.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
      } else {
        // If the item doesn't exist in the cart, add it with a quantity of 1
        const updatedCart = [...cart, { ...product, quantity: 1 }];
        setCart(updatedCart);
      }
    };
    
     

  return (
    <div>
      <Row xs={3} md={4} className="g-4">
      {productsArr.map((item, idx) => (
        <Col>
          <Card key={new Date()}>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>Title:{item.title}</Card.Title>
              <Card.Text>
                Price:{item.price}
              </Card.Text>
              <Button onClick={(event)=>{addToCart(item)}}>Add</Button> 
              {/* <Button onClick={(event)=>{cart.push(item);setCart([...cart]);console.log('add button clicked',item,cart);addItemToCart(cart,item)}}>Add</Button>  */}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default ArrayItem;