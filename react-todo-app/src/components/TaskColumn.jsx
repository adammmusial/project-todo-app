import React from 'react'
import './TaskColumn.css'
import TaskCard from './TaskCard'

export const Column = ({title,icon}) => {
  return (
    <section className="task_column">
        <h2 className='task_column_heading'>
            <img className='task_column_icon'src={icon} alt=''></img>
            {title}
        </h2>

        <TaskCard title="test"/>
    </section>
  )
}

