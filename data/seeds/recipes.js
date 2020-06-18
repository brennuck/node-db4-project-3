exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        { id: 1, name: "chocolate cake", },
        { id: 2, name: "grilled chicken", },
      ]);
    });
};
