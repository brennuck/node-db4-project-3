exports.seed = function (knex) {
  return knex("recipe_instructions").insert([
    { id: 1, instruction: "How to make chocolate cake" },
    { id: 2, instruction: "How to make juicy grilled chicken" }
  ]);
};
