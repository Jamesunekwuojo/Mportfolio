import { Container, Row, Button } from "react-bootstrap";
import './Shop.css'; // Import the CSS file

const Shop = () => {
    return (
        <Container>
            <Row>
                <div className='containerDiv'> 
                    <div className='shop-item'>
                        <img src="image1.jpg" alt="Item 1"/>
                        <Button variant="primary">Buy Now</Button>
                    </div>
                    <div className='shop-item'>
                        <img src="image2.jpg" alt="Item 2"/>
                        <Button variant="primary">Buy Now</Button>
                    </div>
                    <div className='shop-item'>
                        <img src="image3.jpg" alt="Item 3"/>
                        <Button variant="primary">Buy Now</Button>
                    </div>
                    <div className='shop-item'>
                        <img src="image4.jpg" alt="Item 4"/>
                        <Button variant="primary">Buy Now</Button>
                    </div>
                    <div className='shop-item'>
                        <img src="image5.jpg" alt="Item 5"/>
                        <Button variant="primary">Buy Now</Button>
                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default Shop;
