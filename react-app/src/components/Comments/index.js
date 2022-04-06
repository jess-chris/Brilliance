import React, { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as trackActions from '../../store/track';


const Comment = () => {

  const dispatch = useDispatch();
  //const userId = useSelector(state => state.session.user.id)
  const [commentContent, setCommentContent] = useState('');
  const history = useHistory();

  const handlePost = e => {

    e.preventDefault()

    const newComment = {
      commentId: '2'
    }

    dispatch(trackActions.deleteCommentThunk(newComment))
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