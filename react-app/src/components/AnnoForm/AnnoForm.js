import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as trackActions from '../../store/track'

const AnnoForm = () => {

    const annoCont = document.querySelector('.lyrics')
    const sel = document.getSelection()
    const range = sel.getRangeAt(0)

    let clone = range.cloneRange()
    clone.selectNodeContents(annoCont)
    clone.setEnd(range.startContainer, range.startOffset);
    const initialIndex = clone.toString().length;
    clone.setEnd(range.endContainer, range.endOffset);
    const finalIndex = clone.toString().length;


    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0]
    const [initialAnnoIndex] = useState(initialIndex)
    const [finalAnnoIndex] = useState(finalIndex)
    const [content, setContent] = useState('')
    

    const submitAnno = async (e) => {
        e.preventDefault();
        //const user_id = sessionUser?.id
        const id = track.id
        const data = {
            content,
            user_id: sessionUser?.id,
            track_id: +id,
            initialAnnoIndex,
            finalAnnoIndex
        }

        await dispatch(trackActions.createAnnoThunk(data))

    }

    const editAnno = async (e) => {
        e.preventDefault();

        const annotations_id = track.annotations.id
        const updatedAnno = {
            annotations_id,
            content,
            user_id: sessionUser?.id,
        }


        await dispatch(trackActions.editAnnoThunk(updatedAnno))
    }

    const deleteAnno = async (e) => {
        e.preventDefault();
        await dispatch(trackActions.deleteAnnoThunk(track.annotations.id))
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
                <button onClick={editAnno} type='submit'>Edit</button>
                <button onClick={deleteAnno}>Delete</button>
            </form>
        </div>
    )
}
export default AnnoForm
