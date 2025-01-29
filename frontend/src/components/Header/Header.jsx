import React, { useContext, useState } from "react";
import "./Header.css";
import logo from "../../images/logo.avif";
import cartImg from "../../images/shopping-cart.png";
import { Container, Nav, Navbar, Offcanvas, Table } from "react-bootstrap";
import CartContext from "../../context/CartContext";
import close from "../../images/delete.png";

const Header = () => {
  const { cartItems, calculateTotalAmount, removeFromCart } =
    useContext(CartContext);
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

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>View Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              {cartItems.map((item, index) => (
                <>
                  <tbody key={item.id}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={item.image}
                          alt=""
                          height="30px"
                          width="30px"
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>
                        {" "}
                        <img
                          src={close}
                          alt="close"
                          height="20px"
                          width="20px"
                          onClick={() => removeFromCart(item)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
              <tfoot>
                <tr>
                  <td colSpan={5}>Total</td>
                  <td>{calculateTotalAmount().toFixed(2)}</td>
                </tr>
              </tfoot>
            </Table>
          ) : (
            <p>No Items in the Cart</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
