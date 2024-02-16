import jwt from "jsonwebtoken";
import "dotenv/config";

export function genToken(info, expireTime) {
  const newInfo = { ...info, date: new Date() };
  const token = jwt.sign(newInfo, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: expireTime,
  });

  return token;
}
