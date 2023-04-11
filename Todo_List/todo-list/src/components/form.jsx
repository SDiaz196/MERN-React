import { useState } from "react";
import Todo from './todo';

const Form = (props) => {
    const [todoList, setTodoList] = useState([]);

    const [task, setTask] = useState({ name: "", isDone: false });

    const onChange = (e) => {
        setTask({
            name: e.target.value,
            isDone: false
        });
    };

    const addTask = (e) => {
        e.preventDefault();
        const newTodo = [...todoList, task];
        setTodoList(newTodo);

        setTask({ name: "", isDone: false });
    }

    return (
        <div>
            <form onSubmit={addTask}>
                <h1>To Do list</h1>
                <input type="text" name="task" onChange={onChange} value={task.name} />
                <input type="submit" value="Add task" />
            </form>
            <Todo todos={todoList} setTodos={setTodoList} />
        </div>
    )

}
export default Form;