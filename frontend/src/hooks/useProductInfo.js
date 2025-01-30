import React, { useEffect } from "react";
import { useState } from "react";

//http://localhost:8000/products
//https://fakestoreapi.com/products

function useProductInfo() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, []);
  return data;
}

export default useProductInfo;
