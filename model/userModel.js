import mysqlDB from "../config/db.js";

const Users = {
    signupUser: (userData, callbackfn) => {

        const sqlQuery = 'INSERT INTO users SET ?';
        mysqlDB.query(sqlQuery, userData, callbackfn)

    }
}

export default Users