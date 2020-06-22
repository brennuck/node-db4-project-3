exports.seed = function(knex) {
      return knex('recipe_steps').insert([
        { id: 1, instruction_number: 1, step_numbers: 1, instructions: "Make the cake" },
        { id: 2, instruction_number: 1, step_numbers: 2, instructions: "Put in the oven" },
        { id: 3, instruction_number: 1, step_numbers: 3, instructions: "Eat the whole thing" },
        { id: 4, instruction_number: 2, step_numbers: 1, instructions: "Thaw chicken" },
        { id: 5, instruction_number: 2, step_numbers: 2, instructions: "Grill till cooked" },
        { id: 6, instruction_number: 2, step_numbers: 3, instructions: "Put in fridge and eat all the cake" },
      ]);
};
