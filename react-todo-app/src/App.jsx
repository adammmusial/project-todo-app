import React,{useState} from "react"
import './App.css'
import './components/TaskForm.css'
import TaskForm from "./components/TaskForm"
import { Column } from "./components/TaskColumn"
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'


const App = () => {
  const [tasks, setTasks] = useState([])
 
  console.log("task",tasks)
  return (
    <div className="app"> 
      <TaskForm setTasks={setTasks}/>
      <main className="app_main">
        <Column title="To-do" icon={todoIcon} tasks={tasks} status="todo"/>
        <Column title="Doing" icon={doingIcon} tasks={tasks} status="doing" />
        <Column title="Done" icon={doneIcon} tasks={tasks} status="done" />
      </main>
    </div>

  )
}

export default App
