import React, { useState } from "react";
import Tag from "./Tag";


function TaskForm({setTasks}) {

    const [taskData, setTaskData] = useState({
        task: "",
        status: "todo",
        tags: [],
    })

    const handleChange = (event) => {
        const {name,value} = event.target

        setTaskData((prev) => {
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(taskData);
        setTasks((prev) => {return [...prev, taskData]})
        setTaskData({
            task: "",
            status: "todo",
            tags: [],
        })
    }

    const checkTag = (tag) => {
        return taskData.tags.some(item => item === tag )
    }
    
    const selectTag = (tag) => {
        if (taskData.tags.some(item => item === tag )){

            const filterTags = taskData.tags.filter(item => item !== tag)

            return setTaskData((prev) => {

                return {...prev, tags: filterTags}
            })
        } else {
            setTaskData(prev =>  {
                return {...prev, tags: [...prev.tags, tag]}
            } )
        }
    }


    return (
        <header className="app_header">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="task"
                    value={taskData.task}
                    className="task_input" 
                    onChange={handleChange} 
                    placeholder="Input Value" />

                <div className="task_for_bottom_line">
                    <div>
                        <Tag name="HTML" selectTag={selectTag} checkTag={checkTag('HTML')}/>
                        <Tag name="JavaScript" selectTag={selectTag} checkTag={checkTag('JavaScript')} />
                        <Tag name="CSS" selectTag={selectTag} checkTag={checkTag('CSS')}/>
                        <Tag name="React"selectTag={selectTag} checkTag={checkTag('React')} />
                    </div>
                    <div>
                        <select 
                            name="status" 
                            id="" 
                            className="task_status" 
                            value={taskData.status}
                            onChange={handleChange}>

                            <option value="todo">To do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>

                        </select>
                        <button type='submit' className="task_submit">+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
};
export default TaskForm