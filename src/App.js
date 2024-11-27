import React from 'react';
import { Container, Card, Button } from 'react-bootstrap'; // Import Bootstrap components
import Name from './components/Name';  // Import your custom components
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import product from './product'; // Import the product JSON object

function App() {
  const firstName = "John"; // Your first name or an empty string for "Hello, there!"
  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Name productName={product.name} />
          <Price productPrice={product.price} />
          <Description productDescription={product.description} />
          <Image productImage={product.image} />
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      <p>{firstName ? `Hello, ${firstName}` : "Hello, there!"}</p>
      {firstName && <img src="path/to/your/image.jpg" alt="Your Image" />}
    </Container>
  );
}

export default App;
