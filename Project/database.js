<<<<<<< HEAD
const mysql = require("mysql2");

const dbConfig = {
    host: "127.0.0.1",
    port: 3306,
    user: "dbmsuser",
    password: "dbmsproject",
    database: "dbms_project",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

pool.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Database Pool Creation Error or Initial Connection Failed:", err.message);
    } else {
        console.log("✅ Database Pool created & initial connection successful!");
        connection.release();
    }
});

=======
const mysql = require("mysql2");

const dbConfig = {
    host: "127.0.0.1",
    port: 3306,
    user: "dbmsuser",
    password: "dbmsproject",
    database: "dbms_project",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

pool.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Database Pool Creation Error or Initial Connection Failed:", err.message);
    } else {
        console.log("✅ Database Pool created & initial connection successful!");
        connection.release();
    }
});

>>>>>>> 5cbaa376ebf85c7b9ba5c4342d2116207091147c
module.exports = pool;