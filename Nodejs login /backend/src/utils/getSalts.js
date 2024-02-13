import axios from "axios";
import { userDBPath, bcryptDBPath } from "./dataPath.js";

async function getSaltRounds(id = "1") {
  const salts = await axios.get(bcryptDBPath).then((res) => res.data);

  try {
    const salt = salts.find((salt) => salt.id === id);
    if (salt) {
      return salt.saltRounds;
    }
  } catch (error) {
    console.log(error);
  }
}

export { getSaltRounds };
