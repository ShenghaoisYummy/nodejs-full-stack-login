import axios from "axios";
import "dotenv/config";

import { getUsers } from "./utils/getUsers.js";

export async function login(req, res) {
  const { username, password } = req.body;
  const users = await getUsers();

  if (!(users && Array.isArray(users) && users.length > 0)) {
    res.status(500).json({ message: "No user found", code: 2 });
    return;
  } else {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (!user) {
      res.status(500).json({ message: "No user found 2", code: 1 });
      return;
    } else {
      res.status(200).json({ message: "Login success", code: 0 });
    }
  }
}
