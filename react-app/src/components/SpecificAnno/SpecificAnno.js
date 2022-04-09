import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as trackActions from '../../store/track';
import Votes from '../Votes/index'

const SpecificAnno = ({viewAnnotation}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0]

    const currentAnnotation = track?.annotations.find(anno => anno.id == viewAnnotation)


    const deleteAnno = async (e) => {
        e.preventDefault();
        await dispatch(trackActions.deleteAnnoThunk(currentAnnotation.id))
        await dispatch(trackActions.getTrackThunk(track.id));
        history.push(`/tracks/${track.id}`)
    }

    return(
        <div className='annotationsRight'>
            <div id='annoCont'>{currentAnnotation?.content}</div>
            <div id='annoFooter'>
                Vote Score: {currentAnnotation?.vote_score}
                <Votes anno={currentAnnotation?.id}/>
            </div>
            <button id='deleteBtn' onClick={deleteAnno}>Delete</button>
        </div>
    )
}

export default SpecificAnno;