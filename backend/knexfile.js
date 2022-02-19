module.exports  =  {      
    client: 'mysql2', 
      connection: { 
        database: 'knowledge', 
        user: 'root', 
        password: 'rska2022' 
      }, 
      pool: { 
        min: 2, 
        max: 10 
      }, 
      migrations: { 
        tableName: 'knex_migrations' 
    } 
} 