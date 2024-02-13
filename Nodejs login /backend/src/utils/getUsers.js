import axios from "axios";
import "dotenv/config";
import { userDBPath, bcryptDBPath } from "./dataPath.js";

async function getUsers() {
  const users = await axios
    .get(userDBPath)
    .then((res) => res.data)
    .catch((err) => console.log(err));
  return users;
}

export { getUsers };
