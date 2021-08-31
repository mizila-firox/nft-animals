export const api = (req, res) => {
  const { id } = req.query;

  res.status(200).json({ id });
};

export default api;
