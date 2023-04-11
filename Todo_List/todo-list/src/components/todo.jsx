import { useState } from "react"; 


const Todo = (props) => {
    const {todos, setTodos} = props;

    const deleteTask = (deleteItem) => {
        setTodos(todos.filter((task, i) => {
            return deleteItem !== i;
        }));
    }

    const handleCheck = (i) => {
        const copyTodos = [...todos];
        copyTodos[i].isDone = !copyTodos[i].isDone;

        setTodos(copyTodos);
    }
    return(
        <div>
            {todos.map((task, i) => {
                const taskStyle = {
                    display: 'inline=block'
                    
                };

                if (task.isDone) {
                    taskStyle.textDecoration = "line-through";
                }
                return(
                    <div key={i}>
                        <p style={taskStyle}>{task.name}</p>
                        <input onChange={(e) => {handleCheck(i);}} type="checkbox" checked={task.isDone}/>
                        <button onClick={(e) => {deleteTask(i);}}>Delete</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Todo;