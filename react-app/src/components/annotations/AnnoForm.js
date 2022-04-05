import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { createAnnoThunk, getAnnoThunk } from "../../store/annotation";
const AnnoForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const {id} = useParams();
    const [content, setContent] = useState('')
    const annotations = useSelector(state => state.annotation.entries[3])
    console.log('!!!!', annotations)

    useEffect(() => {
        dispatch(getAnnoThunk())
    }, [])


    const submitAnno = async (e) => {
        e.preventDefault();
        //const user_id = sessionUser?.id
        const data = {
            annotations_id: annotations?.id,
            content,
            user_id: sessionUser?.id,
            track_id: +id
        }
        //console.log('##########', data)

        await dispatch(createAnnoThunk(data))

    }

    const editAnno = async (e) => {
        e.preventDefault();
        let updatedAnno;
    }

    return (
        <div>
            <h1>{`${annotations?.content}`}</h1>

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
