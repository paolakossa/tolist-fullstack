const connection = require('./connection')

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async(task) => {
    const {title, data, status} = task;

    const setData = new Date(data).toUTCString();
    
    console.log(setData);

    const query = 'INSERT INTO tasks(title, status, create_at) VALUES (?, ?, ?)';

    const [createdTask ]= await connection.execute(query, [title,status,setData]);

    return {insertId: createdTask.insertId};
};

const deleteTask = async (id) => {
    const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask
};

const updateTask = async (id, task) => {
    const {title, status} = task; 

    const query = 'UPDATE tasks SET title = ?, status= ? WHERE id = ?';

    const [updatedTask] = await connection.execute(query, [title, status, id]);
    return updatedTask
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
};