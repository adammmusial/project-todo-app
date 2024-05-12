import React from 'react'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'
import './TaskCard.css'
    
const TaskCard = ({title}) => {
  return (
        <article className="task_card">
            <p className="task_text">This is simple text</p>
            <div className='task_card_bottom_line'>
                <div className="task_tag_cards">
                    <Tag name="hrml"/>
                    <Tag name="hrml"/>
                    <Tag name="hrml"/>
                </div>
                <div className="task_delete">
                    <img src={deleteIcon} className='delete_icon'></img>
                </div>
            </div>
        </article>

  )
}

export default TaskCard