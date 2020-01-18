exports.up = async knex => {
  await knex.schema.createTable('user', table => {
    table.uuid('id').primary();
    table.text('authProviderId').notNullable();
  });
};

exports.down = async knex => {
  await knex.schema.dropTable('user');
};
