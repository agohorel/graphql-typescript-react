import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

require("dotenv").config();

export default {
  entities: [Post, User],
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  dbName: "reddit_clone",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
