import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 6666;

app.use(bodyParser.json());

app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get("/user/:id", async (req, res) => {
  console.log(req);
  const id = parseInt(req.params.id);
  console.log("id:", id);

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/user", async (req, res) => {
  const { name, age, email, address } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        age,
        email,
        address,
      },
    });
    res
      .status(201)
      .json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/users/search", async (req, res) => {
  const { name, age, email, address } = req.query;
  let queryCondition = {};
  if (name) {
    queryCondition.name = name.toString();
  }
  if (age) {
    queryCondition.age = parseInt(age.toString());
  }
  if (email) {
    queryCondition.email = email.toString();
  }
  if (address) {
    queryCondition.address = address.toString();
  }

  try {
    const users = await prisma.user.findMany({
      where: queryCondition,
    });

    if (users.length > 0) {
      res.json(users);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
