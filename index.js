const http = require("http");
const Todo = require("./controller");
const { getReqData } = require("./utilities");

const PORT = process.env.PORT || 5000;
const todoController = new Todo();

const server = http.createServer(async (req, res) => {
    const urlParts = req.url.split("/");
    const id = urlParts[3];

    try {
        if (req.url === '/api/todos' && req.method === "GET") {
            const todos = await todoController.getAllTodos();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(todos));

        } else if (req.url.match(/\/api\/todos\/\d+/) && req.method === "GET") {
            const todo = await todoController.getTodoById(id);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(todo));

        } else if (req.url.match(/\/api\/todos\/\d+/) && req.method === "DELETE") {
            const result = await todoController.deleteTodo(id);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));

        } else if (req.url.match(/\/api\/todos\/\d+/) && req.method === "PATCH") {
            const data = await getReqData(req);
            const result = await todoController.updateTodo(id, JSON.parse(data));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));

        } else if (req.url === "/api/todos" && req.method === "POST") {
            const data = await getReqData(req);
            const newTodo = await todoController.createTodo(JSON.parse(data));
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newTodo));

        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: "Route not found" }));
        }

    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: error.message || "Internal Server Error" }));
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
