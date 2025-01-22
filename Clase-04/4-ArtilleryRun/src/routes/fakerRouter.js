import { Router } from "express";
import {fakerES_MX as faker} from '@faker-js/faker'

export const router = Router();

router.get("/user", async (req, res) => {
  let nombre = faker.person.firstName();
  let apellido = faker.person.lastName();
  let email = faker.internet.email({ firstName: nombre, lastName: apellido });
  let password = faker.internet.password({ length: 6, memorable: true });

  let usuario = { nombre, apellido, email, password };

  console.log(
    `Se generó el usuario ${nombre} ${apellido}, con email: ${email}`
  );
  res.setHeader("Content-Type", "application/json");
  return res.status(200).json({ usuario });
});
