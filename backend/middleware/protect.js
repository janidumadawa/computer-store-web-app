const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  try {
    token = token.split(" ")[1]; // Remove "Bearer " prefix
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use environment variable
    req.admin = decoded; // Attach the decoded payload to the request object
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

module.exports = protect;