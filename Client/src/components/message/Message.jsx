import React from 'react'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadCrumbs">
            <Link to="/messages">
            Message
            </Link> Umer
        </span>
        <div className="messages">
            <div className="write">
                <textarea name="" cols="30" rows="10" placeholder='write a message' id=""></textarea>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Message
