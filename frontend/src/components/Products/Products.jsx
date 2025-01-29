import React, { useContext, useEffect, useState } from "react";
import useProductInfo from "../../hooks/useProductInfo";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Modal,
  Row,
  Toast,
} from "react-bootstrap";
import CartContext from "../../context/CartContext";

const Products = () => {
  const productData = useProductInfo();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { addToCart, cartItems } = useContext(CartContext);

  return (
    <div className="mb-5">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Body>Product Added to Cart</Modal.Body>
        </Modal.Header>
      </Modal>
      <Container>
        <Row className="g-4">
          {productData ? (
            productData.map((item) => (
              <Col md={6} lg={3} key={item.id}>
                <Card className="h-100">
                  <Container className="text-center py-5">
                    <Image
                      src={item.image}
                      style={{ height: "100px", width: "100px" }}
                      fluid
                    />
                  </Container>

                  <Card.Body>
                    <p>{item.title}</p>
                    <p> ${item.price}</p>
                    <Button
                      style={{ backgroundColor: "rgb(3, 122, 122)" }}
                      id={item.id}
                      onClick={() => {
                        addToCart(item);
                        handleShow();
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No Products</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
