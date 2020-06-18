exports.seed = function (knex) {
  return knex("ingredients").insert([
    { name: "chocolate", recipe_id: 1 },
    { name: "eggs", recipe_id: 1 },
    { name: "flour", recipe_id: 1 },
    { name: "chicken", recipe_id: 2 },
    { name: "oil", recipe_id: 2 },
  ]);
};