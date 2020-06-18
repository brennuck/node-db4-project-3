exports.seed = function (knex) {
  return knex("ingredient_details").insert([
    { id: 1, quantity: "5 bags", ingredient_id: 1 },
    { id: 2, quantity: "3 eggs", ingredient_id: 2 },
    { id: 3, quantity: "7 cups", ingredient_id: 3 },
    { id: 4, quantity: "1 breast", ingredient_id: 4 },
    { id: 5, quantity: "3 second spray", ingredient_id: 5 },
  ]);
};
