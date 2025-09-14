export const adminAuth = (req, res, next) => {
  const { email, password } = req.headers;

  if (email === "admin@demo.com" && password === "admin123") {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
