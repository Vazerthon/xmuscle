exports.up = async knex => {
  await knex.schema.createTable('workout', table => {
    table.uuid('id').primary();
    table.uuid('userId').notNullable();
    table.datetime('date', { useTz: false, precision: 6 }).notNullable();
    table.text('notes');

    table.foreign('userId').references('user.id');
    table.index(['id', 'userId']);
  });
};

exports.down = async knex => {
  await knex.schema.table('workout', table => {
    table.dropIndex(['id', 'userId']);
  });

  await knex.schema.dropTable('workout');
};
