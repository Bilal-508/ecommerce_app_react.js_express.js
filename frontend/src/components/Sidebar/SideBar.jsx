import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Container, Offcanvas, Stack, Table } from "react-bootstrap";
import close from "../../images/delete.png";
import plus from "../../images/plus.png";
import minus from "../../images/minus.png";
import CheckOutModal from "../Modal/CheckOutModal";

const SideBar = ({ show, handleClose }) => {
  const { cartItems, removeFromCart, calculateTotalAmount, addToCart } =
    useContext(CartContext);
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>View Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.length > 0 ? (
          <>
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
                      <td>{item.title.slice(0, 7)}</td>
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
                      <td>
                        {" "}
                        <img
                          src={plus}
                          alt="close"
                          height="20px"
                          width="20px"
                          onClick={() => addToCart(item)}
                        />
                      </td>
                      <td>
                        {" "}
                        <img
                          src={minus}
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
            <CheckOutModal />
          </>
        ) : (
          <p>No Items in the Cart</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideBar;
