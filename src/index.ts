import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);

  // run migration
  await orm.getMigrator().up();

  // create Post object
  const post = await orm.em.create(Post, { title: "my first post" });

  // insert
  await orm.em.persistAndFlush(post);
};

main();
