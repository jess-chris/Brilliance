import React, { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as trackActions from '../../store/track';

import './Comments.css'

const buttonStyle = {
  border: '1px solid rgb(0, 0, 0)',
  fontSize: '1rem',
  padding: '5px',
  fontWeight: '100',
  width: '50%',
  cursor: 'pointer',
  display: 'block',
  color: 'inherit',
}

const Comment = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const tracksObj = useSelector(state => state.track)
  const track = Object.values(tracksObj)[0]
  const [commentContent, setCommentContent] = useState('');
  const history = useHistory();


  const handlePost = async (e) => {

    e.preventDefault()

    const newComment = {
      userId,
      trackId: track.id,
      content: commentContent
    }

    await dispatch(trackActions.addNewCommentThunk(newComment))
    await dispatch(trackActions.getTrackThunk(track.id))
    setCommentContent('');
    history.push(`/tracks/${track.id}`);

  };

  return (
    <div className='comment-post'>
      <form onSubmit={handlePost}>
        <textarea
        rows='10'
        cols='50'
        name='comment'
        placeholder='Leave a comment...'
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        required
        ></textarea>

        <button style={buttonStyle} type='Submit'><i className="fa-regular fa-circle-check"></i> Submit</button>
      </form>
    
    </div>
  )

};


export default Comment;