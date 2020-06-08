
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "testUser1", password: 'password'},
        {username: "testUser2", password: 'password'},
        {username: "testUser3", password: 'password'}
      ]);
    });
};
