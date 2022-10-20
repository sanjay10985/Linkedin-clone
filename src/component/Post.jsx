import { Avatar } from '@mui/material'
import React from 'react'
import '../style/Post.css'
import InputOptions from './InputOptions'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Post = ({name,discription,message,photoUrl}) => {


  return (
    <div className='post'>
      <div className="post__header">
        <Avatar/>
        <div className="post__info">
            <h2>{name}</h2>
            <p>{discription}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpOffAltIcon} title="Like" color='gray'/>
        <InputOptions Icon={ChatOutlinedIcon} title="Comment" color='gray'/>
        <InputOptions Icon={ShareOutlinedIcon} title="Share" color='gray'/>
        <InputOptions Icon={SendOutlinedIcon} title="Send" color='gray'/>
      </div>
    </div>
  )
}

export default Post
