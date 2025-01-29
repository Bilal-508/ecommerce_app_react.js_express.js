export const productMiddleWare = (req, res, next) => {
  const productStatus = {
    status: "In Stock",
  };
  req.status = productStatus;
  next();
};
