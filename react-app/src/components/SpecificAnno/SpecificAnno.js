import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as trackActions from '../../store/track';
import * as modalActions from '../../store/modal'
import EditAnnoForm from './EditAnnoForm';
import Votes from '../Votes/index'

const SpecificAnno = ({viewAnnotation}) => {

    const dispatch = useDispatch();
    const history = useHistory();

    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0]

    const currentAnnotation = track?.annotations.find(anno => anno.id === Number(viewAnnotation))
    const userId = useSelector(state => state.session.user.id)

    const editAnno = async (e) => {
        e.preventDefault();

        dispatch(modalActions.setCurrentModal(EditAnnoForm))
        dispatch(modalActions.showModal())
    }

    const deleteAnno = async (e) => {
        e.preventDefault();
        await dispatch(trackActions.deleteAnnoThunk(currentAnnotation.id))
        await dispatch(trackActions.getTrackThunk(track.id));
        document.getElementById('annotation-cont').style.visibility = "hidden"
        history.push(`/tracks/${track.id}`)
    }

    return(
        <div className='annotationsRight'>
            <div className='annoCont' id={currentAnnotation?.id}>{currentAnnotation?.content}</div>
            <div id='annoFooter'>
                Vote Score: {currentAnnotation?.vote_score}
                <Votes anno={currentAnnotation?.id}/>
            </div>
            {currentAnnotation?.user_id === userId && (
            <>
            <button id='deleteBtn' onClick={deleteAnno}>Delete</button>
            <button id='deleteBtn' onClick={editAnno}>Edit</button>
            </>
            )}
            
        </div>
    )
}

export default SpecificAnno;