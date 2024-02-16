import jwt from "jsonwebtoken";
import "dotenv/config";

function authToken(req, res, next) {
  const headers = req.headers;
  console.log(headers);
  const token = headers?.authorization?.split(" ")[1];

  if (!token) {
    next();
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    err ? res.status(403).json({ message: "Invalid token", code: 2 }) : null;
    req.body.username = decoded.username;
    req.body.password = decoded.password;
  });
  next();
}

export { authToken };
