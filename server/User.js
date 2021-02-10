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

const deleteUser = (id) => {
    const index = Users.findIndex((user) => user.id === id);
    if (index !== -1) return Users.splice(index, 1);
}

const showUser = () => [...Users]

module.exports = { addUser, findUser, showUser, deleteUser };