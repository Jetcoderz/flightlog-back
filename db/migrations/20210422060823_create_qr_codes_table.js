exports.up = function (knex) {
  return knex.schema.createTable("qr_codes", function (table) {
    table.increments("id").primary();
    table.string("user").notNullable();
    table.integer("flight_id").notNullable();
    table.string("url").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("qr_codes");
};
