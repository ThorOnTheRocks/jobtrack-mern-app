const notFoundMiddleware = (req, res) => {
  res.status(400).send('Route not found');
};

export default notFoundMiddleware;