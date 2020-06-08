
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments('id');
        tbl.text('username', 16)
            .notNullable();
        tbl.string('password', 48)
            .notNullable();
    })
};

exports.down = function(knex) {
  
};
