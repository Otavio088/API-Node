const connection = require('./connection');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks'); //pega a primeira posição do array e retorna na const tasks
    return tasks;
};

module.exports = {
    getAll
};
