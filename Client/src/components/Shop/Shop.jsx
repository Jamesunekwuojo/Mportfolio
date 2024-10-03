
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Shop.css';  // Create this CSS file for additional grid styling.

const Shop = () => {
  const books = [
    {
      title: "Courage: How Ordinary People Achieve Extraordinary Results",
      price: "₦ 2,100",
      oldPrice: "₦ 4,500",
      image: "cover1.jpeg",
    },
    {
      title: "Mind Shift",
      price: "₦ 1,550",
      oldPrice: "₦ 3,000",
      image: "path/to/image2.jpg",
    },
    {
      title: "Purpose Before Partner: What No One Told You About...",
      price: "₦ 1,000",
      oldPrice: "₦ 2,000",
      image: "path/to/image3.jpg",
    },
    // Add more book data as needed
  ];

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <div className="book-grid">
            {books.map((book, index) => (
              <Card key={index} className="book-card" >
                <Card.Img variant="top" src={book.image} alt={book.title} className="book-image" />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    <span className="new-price">{book.price}</span>
                    {' '}
                    <span className="old-price">{book.oldPrice}</span>
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
