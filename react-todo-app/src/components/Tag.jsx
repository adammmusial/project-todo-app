import React from 'react'
import './Tag.css'

const Tag = ({name,selectTag}) => {

  return (
    <button className='tag' onClick={() => selectTag(name)}>{name}</button>
  )
}

export default Tag