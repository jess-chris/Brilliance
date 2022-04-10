import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as trackActions from '../../store/track'
import * as modalActions from '../../store/modal';

import '../AnnoForm/AnnoForm.css'

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

const EditAnnoForm = () => {


    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0]
    const [content, setContent] = useState('')
    

    const editAnno = async (e) => {
        e.preventDefault();

        const annotations_id = track.annotations.id
        const updatedAnno = {
            annotations_id,
            content,
            user_id: sessionUser?.id,
        }


        await dispatch(trackActions.editAnnoThunk(updatedAnno))
        await dispatch(trackActions.getTrackThunk(track.id));
        await dispatch(modalActions.hideModal())
    }

    // const deleteAnno = async (e) => {
    //     e.preventDefault();
    //     await dispatch(trackActions.deleteAnnoThunk(track.annotations.id))
    //     await dispatch(trackActions.getTrackThunk(track.id));
    //     await dispatch(modalActions.hideModal())
    // }

    return (
        <div id='annoForm'>
            <form onSubmit={editAnno}>
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
                    <button style={buttonStyle} type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default EditAnnoForm
