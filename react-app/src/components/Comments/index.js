import React, { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as trackActions from '../../store/track';


const Comment = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const [commentContent, setCommentContent] = useState('');
  const history = useHistory();

  const handlePost = e => {

    e.preventDefault()

    const newComment = {
      userId,
      annotationId: '1',
      content: commentContent
    }

    dispatch(trackActions.addNewCommentThunk(newComment))
    history.push(`/tracks/`);

  };

  return (
    <>
      <form onSubmit={handlePost}>
        <label>Comment:</label>
        <input
        type='textarea'
        name='comment'
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
        ></input>

        <button type='Submit'>Submit</button>
      </form>
    
    </>
  )

};


export default Comment;