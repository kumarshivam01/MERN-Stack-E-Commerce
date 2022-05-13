const bcrypt = require('bcryptjs')

const Users = [
    {
        name:"admin1",
        email:'admin1@gamil.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:"admin2",
        email:'admin2@gamil.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:"admin3",
        email:'admin3@gamil.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
]

module.exports=Users