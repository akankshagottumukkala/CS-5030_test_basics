class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D1",
            "done": false
        },{
            "title": "T3",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        const { id, item, completed } = req.body;
    const newTodo = {
      id,
      item,
      completed,
    };
    this.todos.todo.push(newTodo);
    return res.status(201).json({
      data: todos,
      error: null,
    });
    }

    delete_todo(id){
    const todo = todos.todo[0]
    // if(todo) {
      todos.todo.splice(1, 1)
    // }
    return this.todos.todo;
    }

    update_todo(req, todo){
        const { id, item, completed } = req.body;
        const todoUpdate = todos.todo.find((key) => key.title == "T1");
        todoUpdate.complete = true;
        return this.todos.todo;
}
}


module.exports= todoservice;
