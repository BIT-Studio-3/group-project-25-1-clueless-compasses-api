import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;  // Attach user data to the request object
    next();
  } catch (err) {
    return res.status(403).json({ message: "Not authorized" });
  }
};

export default authMiddleware;