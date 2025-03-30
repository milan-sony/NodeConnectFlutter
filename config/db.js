import mysql from "mysql"
import dotenv from "dotenv"

// .env config
dotenv.config()

// MySQL db connection
const mysqlDB = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

mysqlDB.connect((error) => {
    if (error) {
        console.error('\n❌ Error connecting to MySQL: ', `Error Name: `,error.name,`,`,`Error Code: `,error.code);
        return;
    }
    console.log(`\n✔️  Connected to MySQL database`);
});

export default mysqlDB