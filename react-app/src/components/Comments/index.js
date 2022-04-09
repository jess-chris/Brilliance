import React, { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import * as trackActions from '../../store/track';


const Comment = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)
  const tracksObj = useSelector(state => state.track)

  const [commentContent, setCommentContent] = useState('');
  const [errors, setErrors] = useState([])

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

    if(commentContent) {
      setErrors([]);
      history.push(`/tracks/${+track}`);
      return dispatch(trackActions.addNewCommentThunk(newComment))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors)
        })
    }
    return setErrors(["Content cannot be empty"])


  };

  return (
    <>
      <form onSubmit={handlePost}>
      <div>
            <ul className="errors">
                  {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
      </div>

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
