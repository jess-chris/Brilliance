import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as trackActions from '../../store/track'
import * as modalActions from '../../store/modal';

import './AnnoForm.css'

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

const AnnoForm = () => {

    const annoCont = document.querySelector('.lyrics')

    let initialIndex; 
    let finalIndex;

    const sel = document.getSelection()

    if (sel.rangeCount > 0) {
        const range = sel.getRangeAt(0)
        let clone = range.cloneRange()
        clone.selectNodeContents(annoCont)
        clone.setEnd(range.startContainer, range.startOffset);
        initialIndex = clone.toString().length;
        clone.setEnd(range.endContainer, range.endOffset);
        finalIndex = clone.toString().length;
    }

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
        const newAnno = {
            content,
            user_id: sessionUser?.id,
            track_id: +id,
            initialAnnoIndex,
            finalAnnoIndex
        }


        await dispatch(modalActions.hideModal())
        await dispatch(trackActions.createAnnoThunk(newAnno))
        await dispatch(trackActions.getTrackThunk(track.id));
        }

    

    return (
        <div id='annoForm'>
            <form onSubmit={submitAnno}>
                <textarea
                rows='15'
                cols='75'
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder='Content'
                name='content'
                required
                >
                </textarea >
                <div id='anno-btn-bar'>
                    <button style={buttonStyle} type='Submit'><i className="fa-regular fa-circle-check"></i> Submit</button>
                </div>
            </form>
        </div>
    )
}
export default AnnoForm
