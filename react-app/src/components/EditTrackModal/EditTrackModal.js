import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { hideModal } from '../../store/modal';

import './EditTrackModal.css'

export const EditTrackModal = () => {

  const dispatch = useDispatch();

  const mount = useSelector(state => state.modal.modalMount);
  const display = useSelector(state => state.modal.display);
  const Current = useSelector(state => state.modal.currentModal);

  const closeModal = () => {
    dispatch(hideModal());
    // dispatch(trackActions.getAllTracksThunk());
  }


  return display && mount && ReactDOM.createPortal(
    <div className='modal-background' onClick={closeModal}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        <Current />
      </div>
    </div>
    , mount)
}

export default EditTrackModal;