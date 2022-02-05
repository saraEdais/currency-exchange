const User = require("../models/user");
const userr = new User();

class UserService {

    async addNewUser(user) {
        return await userr.addUser(user).then((res) => res);
    };


}
 
module.exports = UserService;