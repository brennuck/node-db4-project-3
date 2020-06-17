
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
        tbl.increments();
        tbl.string("name", 256).notNullable().index();
    })
    .createTable("ingredients", tbl => {
        tbl.increments();
        tbl.string("name", 256).notNullable().index();
    })
    .createTable("ingredient_details", tbl => {
        tbl.increments();

        tbl.integer("recipe_id")
            .unsigned()
            .references("id")
            .inTable("recipes")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
        tbl.integer("ingredient_id")
            .unsigned()
            .references("id")
            .inTable("ingredients")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")

        tbl.float('quantity').notNullable().index();
    })
    .createTable("recipe_steps", tbl => {
        tbl.increments();
        tbl.integer("step_numbers").unsigned().notNullable();
        tbl.text("instructions").notNullable();
        tbl.integer("recipe_id")
            .unsigned()
            .references("step_id")
            .inTable("recipes")
            .onDelete("RESTRICT")
            .onUpdate("CASCADE")
    })
};

exports.down = function(knex) {
  
};
