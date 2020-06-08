const db = require("./dbConfig");

module.exports = {
    find,
    findBy,
    findById,
    add
}

function find(){
    return db('users').select('id', 'username')
}

function findBy (criteria){
    return db('users').where(criteria)
}

function findById (id){
    return db('users')
        .where({id})
        .first();
}

async function add (user){
    const [id] = await db('users').insert(user, 'id')
    return findById(id);
}

