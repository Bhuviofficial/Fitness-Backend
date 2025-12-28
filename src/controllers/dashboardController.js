export const getDashboard = (req, res) => {
  res.json({
    message: "Dashboard loaded successfully",
    user: req.user
  });
};
