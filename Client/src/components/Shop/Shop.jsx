import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Shop.css"; // Create this CSS file for additional grid styling.

const Shop = () => {
  const books = [
    {
      title: "Courage",
      price: "₦ 2,100",
      image: "cover2.jpg",
    },
    {
      title: "Mind Shift",
      price: "₦ 1,550",
      image: "mindsetcover4.jpg",
    },
    {
      title: "Purpose Before Partner",
      price: "₦ 1,000",
      image: "partnercover3.jpg",
    },

  

    {
      title: "30 Lessons life taught me before 30",
      price: " ₦ 3000",
      image: "cover1.jpeg"
    },

    {
      title: "Making Productive Impact During Nysc",
      price: " ₦ 550",
      image: "nysccover7.jpg"
    },

    


    {
      title: "Overcoming Hurts Make progress",
      image: "overcomincover5.jpg"
    },


    {
      title: "Understanding Your Identity",
      image: "yourIdentity.jpg"
    },

    {
      title: "Beyond Speaking",
      image: "beyondcover6.jpg",
    },

 
    // Add more book data as needed
  ];

  return (
    <Container className="mt-4" >
      <Row className="g-4"> {/* Add g-4 for spacing between columns */}
        {books.map((book, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}> {/* Adjust grid sizes based on screen */}
            <Card className="book-card">
              <Card.Img
                variant="top"
                src={book.image}
                alt={book.title}
                className="book-image"
              />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <span className="new-price">{book.price}</span>{" "}
                </Card.Text>
                <Button variant="primary"><Link className='linkClass' to="https://selar.co/m/AbiodunMustapha" target="_blank">Buy Now</Link></Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
