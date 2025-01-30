import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../images/logo.avif";
import cartImg from "../../images/shopping-cart.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import close from "../../images/delete.png";
import SideBar from "../Sidebar/SideBar";

const Header = () => {
  const { cartItems } = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  console.log(cartItems);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="light">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" width="130px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link className="links">New In</Nav.Link>
              <Nav.Link className="links">Mens</Nav.Link>
              <Nav.Link className="links">Womens</Nav.Link>
              <Nav.Link className="links">Kids</Nav.Link>
              <Nav.Link>
                <span className="cart_count_container">
                  <img
                    src={cartImg}
                    alt="cart"
                    className="cartImg"
                    style={{ cursor: "pointer" }}
                    onClick={handleShow}
                  />
                  <p className="cart_count">
                    {cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}
                  </p>
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <SideBar show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
