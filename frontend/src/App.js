import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Hero />
      <Products />
    </CartContextProvider>
  );
}

export default App;
