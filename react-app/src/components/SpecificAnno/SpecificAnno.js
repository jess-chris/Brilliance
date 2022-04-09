import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as trackActions from '../../store/track';


const SpecificAnno = ({viewAnnotation}) => {


    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0]

    const currentAnnotation = track?.annotations.find(anno => anno.id == viewAnnotation)


    // useEffect(() => {
    //     dispatch(trackActions.getAnnoThunk())
    // }, [dispatch])

    return(
        <div className='annotationsRight'>
            <div id='annoCont'>{currentAnnotation?.content}</div>
            <div id='annoFooter'>
                <button>Upvote</button>
                Vote Score: {currentAnnotation?.vote_score}
                <button>Downvote</button>
            </div>
        </div>
    )
}

export default SpecificAnno;