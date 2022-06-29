module.exports = {
    client: 'pg',
    connection: {
      database: 'base_do_conhecimento',
      user:     'postgres',
      password: 'tucano3d'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }

};
