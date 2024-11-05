export const catchAsync = (Controller) => {
  return (req, res, next) => {
    Controller(req, res, next).catch((error) => {
      console.error('Error:', error);
      res.status(500).json({
        status: 'error',
        message: error.message || 'Internal server error'
      });
    });
  };
}; 