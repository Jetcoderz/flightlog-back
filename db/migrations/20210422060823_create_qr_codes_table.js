exports.up = function (knex) {
  return knex.schema.createTable("qr_codes", function (table) {
    table.increments("id").primary();
    table.string("url").notNullable();
    table.integer("flightID").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("qr_codes");
};
