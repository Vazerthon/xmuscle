const { up, down } = require('./20180909173554_boilerplate');

exports.up = async knex => {
  await down(knex);
};

exports.down = async knex => {
  await up(knex);
};
