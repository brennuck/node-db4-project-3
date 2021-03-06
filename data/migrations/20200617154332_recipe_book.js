exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("name", 256).notNullable().index();
      tbl
        .integer("step_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("name", 256).notNullable().index();

      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("ingredient_details", (tbl) => {
      tbl.increments();

      tbl
        .integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.string("quantity").notNullable().index();
    })
    .createTable("recipe_instructions", (tbl) => {
      tbl.increments();
      tbl.text("instruction").notNullable();
    })
    .createTable("recipe_steps", (tbl) => {
      tbl.increments();
      tbl
        .integer("instruction_number")
        .unsigned()
        .references("id")
        .inTable("recipe_instructions")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.integer("step_numbers").unsigned().notNullable();
      tbl.text("instructions").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_steps")
    .dropTableIfExists("ingredient_details")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
