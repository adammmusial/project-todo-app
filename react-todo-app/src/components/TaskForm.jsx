import React, { useState } from "react";


 
function  TaskForm()  {
	const  [inputValue, setInputValue] =  useState('');

	const  handleChange = (event) => {
		setInputValue(event.target.value);
	};

return  (
    <header className="app_header">
        <form>
            <input  type="text"  value={inputValue} onChange={handleChange} placeholder="Input Value" />
        </form>
        <div className="task_for_bottom_line">
            <button className="tag">HTML</button>
            <button className="tag">JavaScript</button>
            <button className="tag">CSS</button>
            <button className="tag">React</button>
            <button className="tag"></button>

            <select name="" id="" className="task_status">

                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
            
            </select>
            <button type = 'submit' className="task_submit">+ Add Task</button>
        </div>
    </header>
)};
export default TaskForm