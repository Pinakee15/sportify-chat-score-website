const Users = [];

const addUser = (id, name, room) => {
    const User = {
        id,
        name,
        room
    }
    Users.push(User);
}

const findUser = (id) => {
    return Users.find(user => user.id == id ? user.name : null);
}

const showUser = () => [...Users]

module.exports = { addUser, findUser, showUser };