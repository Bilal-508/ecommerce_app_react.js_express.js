import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Col, Container, Offcanvas, Row, Stack, Table } from "react-bootstrap";
import close from "../../images/delete.png";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import CheckOutModal from "../Modal/CheckOutModal";

const SideBar = ({ show, handleClose }) => {
  const {
    cartItems,
    removeFromCart,
    calculateTotalAmount,
    addToCart,
    deleteFromCart,
  } = useContext(CartContext);
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>View Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Container>
          {cartItems.map((item) => (
            <>
              <div className="d-flex gap-4 mb-5" key={item.id}>
                <div>
                  <img
                    src={item.image}
                    alt="img"
                    height="100px"
                    width="100px"
                  />
                </div>
                <div>
                  <p>{item.title}</p>
                  <p>$ {item.price}</p>
                  <div className="d-flex gap-3 align-items-center">
                    <div className="d-flex gap-3 align-items-center text-center w-50 justify-content-around">
                      <img
                        role="button"
                        src={plus}
                        alt="+"
                        width="15px"
                        height="15px"
                        onClick={() => addToCart(item)}
                      />
                      <div className="text-center">{item.quantity}</div>
                      <img
                        role="button"
                        src={minus}
                        alt="+"
                        width="15px"
                        height="15px"
                        onClick={() => removeFromCart(item)}
                      />
                    </div>
                    <img
                      role="button"
                      src={close}
                      alt="+"
                      width="15px"
                      height="15px"
                      onClick={() => deleteFromCart(item.id)}
                    />
                  </div>
                </div>
              </div>
            </>
          ))}
          {cartItems.length > 0 ? (
            <>
              <p>Total Amount: $ {calculateTotalAmount().toFixed(2)}</p>
              <CheckOutModal />
            </>
          ) : (
            <p>No Items in the Cart</p>
          )}
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideBar;
