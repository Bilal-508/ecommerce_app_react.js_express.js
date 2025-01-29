import React, { useEffect } from "react";
import { useState } from "react";

function useProductInfo() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, []);
  return data;
}

export default useProductInfo;
