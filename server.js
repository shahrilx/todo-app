const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/todoDB';
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

const todoSchema = {
    name: String
};

const Todo = mongoose.model('Todo', todoSchema);

app.get('/', (req, res) => {
    Todo.find({}, (err, foundTodos) => {
        if (!err) {
            res.send(foundTodos);
        } else {
            res.status(500).send(err);
        }
    });
});

app.post('/add', (req, res) => {
    const newTodo = new Todo({
        name: req.body.todo
    });
    newTodo.save((err) => {
        if (!err) {
            res.redirect('/');
        } else {
            res.status(500).send(err);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

