// Source tables that Dataform reads but does not create.
// Add one declare() per source; reference them with ${ref("name")}.
const RAW_SCHEMA = "raw";

[
  "tmd_forecast_ext",   // external table over gs://.../tmd_forecast/
].forEach((name) => declare({ schema: RAW_SCHEMA, name }));