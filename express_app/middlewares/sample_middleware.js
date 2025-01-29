export const checkMiddleware = (req, res, next) => {
  try {
    if (parseInt(req.params.id) === 1) {
      const user = {
        id: 1,
        name: "XYZ",
      };
      req.user = user;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};
