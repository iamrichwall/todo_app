const Todo = require("../models/todo");

exports.getAllTodo = (req, res) =>{
    Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) =>{
        res.status(404).json({message: "Don't have any Todo", error: error.message});
    });
}

exports.postCreateTodo = (req, res) =>{
    Todo.create(req.body)
    .then((data) => res.json({message: "Todo added successfully", data}))
    .catch((err) => {
        res.status(400).json({message: "Failed to add new todo", error: err.message});
    }) ;
}

exports.putUpdateTodo = (req, res) =>{
    Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => {
        res.json({message: "Todo is updated successfully", data})
    })
    .catch((err) => {
        res.status(400).json({message: "Failed to update todo", error: err.message});
    })
}

exports.deleteTodo = (req, res) =>{
    Todo.findByIdAndRemove(req.params.id, req.body)
    .then((data) => {
        res.json({message: "Todo deleted successfully", data});
    })
    .catch((err) => {
        res.status(404).json({message:"Todo not found", error: err.message});
    })
}