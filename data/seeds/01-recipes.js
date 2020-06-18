exports.seed = function (knex) {
  return knex("recipes").insert([
    { id: 1, name: "chocolate cake", step_id: 1 },
    { id: 2, name: "grilled chicken", step_id: 2 },
  ]);
};
