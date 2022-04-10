import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import * as trackActions from '../../store/track'
import { hideModal } from '../../store/modal';

import './AnnoModal.css'


export const AnnoModal = () => {

  const dispatch = useDispatch();


  const mount = useSelector(state => state.modal.modalMount);
  const display = useSelector(state => state.modal.display);
  const Current = useSelector(state => state.modal.currentModal);
  const trackObj = useSelector(state => state.track)
  const track = Object.values(trackObj)[0]



  const closeModal = () => {
    dispatch(hideModal());
    dispatch(trackActions.getTrackThunk(track.id));
  }


  return display && mount && ReactDOM.createPortal(
    <div className='modal-background-anno' onClick={closeModal}>
      <div className='modal-content-anno' onClick={(e) => e.stopPropagation()}>
        <Current />
      </div>
    </div>
    , mount)
}

export default AnnoModal;