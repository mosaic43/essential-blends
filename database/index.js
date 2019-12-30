const { Pool, Client } = require('pg')
const connectionString = 'postgressql://postgres:postgres@localhost:5432/remedies'

const client = new Client({
    connectionString: connectionString
});
client.connect();