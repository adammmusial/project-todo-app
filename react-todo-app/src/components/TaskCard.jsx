import React from 'react'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'
import './TaskCard.css'
    
const TaskCard = ({title,tags}) => {
  return (
        <article className="task_card">
            <p className="task_text">{title}</p>
            <div className='task_card_bottom_line'>
                <div className="task_tag_cards">
                    {
                        tags.map((tag, index) => <Tag key={index} name={tag} checkTag={true} />)
                    }
                </div>
                <div className="task_delete">
                    <img src={deleteIcon} className='delete_icon'></img>
                </div>
            </div>
        </article>

  )
}

export default TaskCard