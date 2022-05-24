import React,{useState} from 'react';
import styles from "./Todos.module.css"


const Todos = () => {
  
  const [value , setValue] = useState("");
  const [todos,setTodos] = useState([]);

  return (
    <div>
        Todos
        <div className='sab'>
          {/* taking input */}
            <input type="text" value={value} placeholder="Write Something"
            onChange={(e) => {
              setValue(e.target.value);
            }}/>
            
            {/* add button */}
            <button 
            onClick={() => {
              setTodos([...todos, {id:Date.now(),value:value}]);
              setValue("")
            }}>+</button>

            {/* add todolist */}
            <div className={styles.todolist}>
              {todos.map((todo) => (
                <div className={styles.todo} key={todo.id}>
                  <input type="checkbox" />
                  <div>{todo.value}</div>
                </div>
              ))}
            </div>


        </div>
    </div>
  )
}

export default Todos