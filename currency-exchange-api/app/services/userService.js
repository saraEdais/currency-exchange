const User = require("../models/user");
const userObj = new User();

class UserService {

    async addNewUser(user) {
        return await userObj.addUser(user).then((res) => res);
    };


}
 
module.exports = UserService;