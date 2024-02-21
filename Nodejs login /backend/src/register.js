import axios from "axios";
import "dotenv/config";
import bcrypt from "bcrypt";
import { getUsers } from "./utils/getUsers.js";
import { userDBPath } from "./utils/dataPath.js";
import { getSaltRounds } from "./utils/getSalts.js";

export async function register(req, res) {
  const { username, password } = req.body;
  console.log(password);
  try {
    const users = await getUsers();
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
      const saltRounds = await getSaltRounds();
      console.log(saltRounds);

      const hashedPassword = await bcrypt.hash(password, saltRounds);

      await axios.post(userDBPath, {
        username: username,
        password: hashedPassword,
      });
      res
        .status(200)
        .json({ message: "Register success", code: "0", username: username });
    }
  } catch (error) {
    console.log(error);
  }
}
