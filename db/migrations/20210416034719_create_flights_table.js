exports.up = function (knex, Promise) {
  return knex.schema.createTable("flights", function (table) {
    table.increments("id").primary();
    table.string("username").notNullable();
    table.date("date").notNullable();
    table.string("flightNo").notNullable();
    table.string("depGate");
    table.string("arrGate");
    table.string("depAirport");
    table.string("arrAirport");
    table.timestamp("takeoff");
    table.timestamp("landing");
    table.string("airline");
    table.string("plane");
    table.string("purpose");
    table.specificType("entertainment", "text ARRAY");
    table.string("meal");
    table.string("seatNo");
    table.string("review");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("flights");
};
