import axios from "axios";
import "dotenv/config";
import bcrypt from "bcrypt";

import { getUsers } from "./utils/getUsers.js";
import { genToken } from "./utils/genToken.js";

export async function login(req, res) {
  const { username, password } = req.body;
  const users = await getUsers();

  if (!(users && Array.isArray(users) && users.length > 0)) {
    res.status(500).json({ message: "No user found", code: 2 });
    return;
  } else {
    const user = users.find((user) => user.username === username);

    if (!user) {
      res.status(500).json({ message: "No user found 2", code: 1 });
      return;
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        res.status(401).json({ message: "Password not match", code: 3 });
        return;
      }
      const userTokenInfo = {
        username,
        password: user.password, //hashed
      };
      const token = genToken({ username: user.username }, "1h");

      res.status(200).json({ message: "Login success", code: 0, token });
      return;
    }
  }
}
