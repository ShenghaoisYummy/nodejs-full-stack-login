export const defaultDBPath = "http://localhost:6000";

export const userDBPath = (process.env.DB_PATH || defaultDBPath) + "/user";
export const bcryptDBPath = (process.env.DB_PATH || defaultDBPath) + "/bcrypt";
