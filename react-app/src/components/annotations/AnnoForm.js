import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { createAnnoThunk } from "../../store/annotation";
const AnnoForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const id = useParams();
    //console.log('###', id)
    const track_id = id.id
    //console.log('@@@@@', track_id)
    const [content, setContent] = useState('')


    const submitAnno = async (e) => {
        e.preventDefault();
        //const user_id = sessionUser?.id
        const data = {
            content,
            user_id: sessionUser?.id,
            track_id: 1
        }
        //console.log('##########', data)

        await dispatch(createAnnoThunk(data))

    }

    return (
        <div>
            <form onSubmit={submitAnno}>
                <textarea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder='Content'
                name='content'
                >
                </textarea >
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default AnnoForm