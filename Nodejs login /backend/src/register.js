import axios from "axios";
import "dotenv/config";

import { getUsers } from "./utils/getUsers.js";
import { userDBPath } from "./utils/dataPath.js";

export async function register(req, res) {
  const { username, password } = req.body;
  try {
    const users = await getUsers();

    if (!(users && Array.isArray(users) && users.length > 0)) {
      res.status(500).json({ message: "No user found", code: 2 });
      return;
    } else {
      const user = users.find((user) => user.username === username);

      if (user) {
        res.status(409).json({
          message: "User already exists",
          code: "1",
          username: username,
        });
        return;
      } else if (!password) {
        res.status(409).json({
          message: "Password is empty",
          code: "2",
          username: username,
        });
        return;
      } else {
        await axios.post(userDBPath, {
          username: username,
          password: password,
        });
        res
          .status(200)
          .json({ message: "Register success", code: "0", username: username });
      }
    }
  } catch (error) {
    console.log(error);
  }
}
