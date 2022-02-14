const connection = require("../connections/index");

class User {
    
    #id;
    #username;
    #email;
    #password;
    #visaCardNumber;

    async addUser(user) {

        const isExistingEmail = await connection.query(`SELECT * FROM users where lower(email)='${user.email}'`)
            .then(([rows, fields]) => {
                if (rows.length > 0) {
                    return true;
                }
                else return false;
            });
        if (isExistingEmail) {
            return "the email already exists in the DataBase";
        }

        const isExistingUsername = await connection.query(`SELECT * FROM users where lower(username)='${user.username}'`)
            .then(([rows, fields]) => {
                if (rows.length > 0) {
                    return true;
                }
                else return false;
            });
        if (isExistingUsername) {
            return "the username already exists in the DataBase";
        }

        const sqlQuery = `INSERT INTO USERS (USERNAME,EMAIL,PASSWORD,VISACARDNUMBER) VALUES ('${user.username
            }', '${user.email}','${user.password}','${user.visaCardNumber}')`;
        return await connection.query(sqlQuery)
            .then(([rows, fields]) => {
                return 'successfully added a new user ';
            })
            .catch((err) => err);
    }
}

module.exports = User;