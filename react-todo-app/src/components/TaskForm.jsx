import React, { useState } from "react";
import Tag from "./Tag";


function TaskForm() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <header className="app_header">
            <form>
                <input type="text" className="task_input" value={inputValue} onChange={handleChange} placeholder="Input Value" />

                <div className="task_for_bottom_line">
                    <div>
                        <Tag name="HTML"/>
                        <Tag name="JavaScript"/>
                        <Tag name="CSS"/>
                        <Tag name="React"/>
                    </div>
                    <div>
                        <select name="" id="" className="task_status">

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