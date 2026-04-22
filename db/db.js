const { Pool } = require("pg"); // installing pg lets my node-app talk to Postgres.
// import Pool class from pg (postgres) library. Pool manages connections to the database (better than single connection, which is bad.. )

// Pool manages multiple databse connections.
// isntead of 1 connection, we get a pool of reusable connections
// Each incoming request can use a connection from the pool.
// When finished, the connection is returned to the pool
// this allows handling mutliple requests at the same time efficiently.

// Creating connection pool - CREATE ONCE - and reuse everywhere. NOT creating
// a new pool in each
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

module.exports = pool;

// flow mental model: .env -> dotenv -> process.env -> pg Pool - > database

// For database pooling in Next.js/Node.js, you must create a single instance of the pool outside the request handler to avoid exhausting database connections during hot reloads or serverless function scaling.
// serverless : code runs on demand, not always running. E.g call to a route handler function. Request -> start function -> run -> stop. BUT, dual meaning here: infrastucture concept is serverless = no server management (cloud provider does this for you), and execution model, which is the not always running code..Confusing term.
