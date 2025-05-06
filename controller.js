const todo = require("./data");

class Controller {
    async getAllTodos() {
        return new Promise((resolve) => resolve(todo));
    }

    async getTodoById(id) {
        return new Promise((resolve, reject) => {
            const todoItem = todo.find(t => t.id === parseInt(id));
            if (todoItem) {
                resolve(todoItem);
            } else {
                reject(`Todo with id ${id} not found`);
            }
        });
    }

    async createTodo(data) {
        return new Promise((resolve) => {
            const newTodo = {
                id: Math.floor(Math.random() * 10000),
                ...data
            };
            todo.push(newTodo);
            resolve(newTodo);
        });
    }

    async updateTodo(id, data) {
        return new Promise((resolve, reject) => {
            const todoItem = todo.find(t => t.id === parseInt(id));
            if (!todoItem) {
                reject(`Todo with id ${id} not found`);
            } else {
                Object.assign(todoItem, data);
                resolve(todoItem);
            }
        });
    }

    async deleteTodo(id) {
        return new Promise((resolve, reject) => {
            const index = todo.findIndex(t => t.id === parseInt(id));
            if (index === -1) {
                reject(`Todo with id ${id} not found`);
            } else {
                todo.splice(index, 1);
                resolve({ message: "Todo deleted successfully" });
            }
        });
    }
}

module.exports = Controller;
