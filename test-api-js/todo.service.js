class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
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
        const id = req.params.id
    const todo = todos.todo[0]
    if(todo) {
      todos.todo.splice(id, 1)
    }
    return res.status(200).json({
      data: todos,
      error: null,
    });
    }

    update_todo(id, todo){
        const { id, item, completed } = req.body;
        const todoUpdate = todos.todo.find((todo) => todo.id == id);
        todo.complete = true;
}


module.exports= todoservice;
