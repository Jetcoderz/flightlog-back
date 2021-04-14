exports.up = function (knex, Promise) {
  return knex.schema.createTable("records", function (table) {
    table.string("user").notNullable();
    table.date("date").notNullable();
    table.string("purpose");
    table.string("flightNo").notNullable();
    table.string("departure");
    table.string("arrival");
    table.increments("id").primary();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("records");
};
