import React from "react";
import sampleImage from "../../images/product_1.jpg";
import { Container, Image, Stack } from "react-bootstrap";

const Checkout = () => {
  return (
    <Container className="cart_items_container">
      <p>Your Cart Items</p>
      <Stack className="cart" gap={3}>
        <div className="d-flex gap-3">
          <Image src={sampleImage} fluid height="70px" width="70px" />
          <div className="description">
            <b>Product Name</b>
            <p>Price: 9</p>
            <div class="countHandler">
              <button> - </button>
              <input value="1" />
              <button> + </button>
            </div>
          </div>
        </div>

        <div className="d-flex gap-3">
          <Image src={sampleImage} fluid height="70px" width="70px" />
          <div className="description">
            <b>Product Name</b>
            <p>Price: 9</p>
            <div class="countHandler">
              <button> - </button>
              <input value="1" />
              <button> + </button>
            </div>
          </div>
        </div>

        <div className="d-flex gap-3">
          <Image src={sampleImage} fluid height="70px" width="70px" />
          <div className="description">
            <b>Product Name</b>
            <p>Price: 9</p>
            <div class="countHandler">
              <button> - </button>
              <input value="1" />
              <button> + </button>
            </div>
          </div>
        </div>
      </Stack>
    </Container>
  );
};

export default Checkout;
