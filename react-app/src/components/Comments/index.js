import React, { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as trackActions from '../../store/track';


const Comment = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const tracksObj = useSelector(state => state.track)
  const [commentContent, setCommentContent] = useState('');
  const history = useHistory();
  const track_id = useParams()
  // console.log('trackObj', tracksObj)
  const track = Object.values(track_id)[0]
  // console.log('trackid', track)

  const handlePost = e => {

    e.preventDefault()

    const newComment = {
      userId,
      track_id: track,
      annotationId: null,
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
