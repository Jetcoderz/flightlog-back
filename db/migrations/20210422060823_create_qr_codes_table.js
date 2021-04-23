exports.up = function (knex) {
  return knex.schema.createTable("qr_codes", function (table) {
    table.increments("id").primary();
    table.string("username").notNullable();
    table.integer("flightID").notNullable();
    table.string("url").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("qr_codes");
};
