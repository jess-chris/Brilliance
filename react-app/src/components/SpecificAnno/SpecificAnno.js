import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as trackActions from '../../store/track';


const SpecificAnno = () => {

    const dispatch = useDispatch()
    const annotation = useSelector(state => state.track.annotations)

    useEffect(() => {
        dispatch(trackActions.getAnnoThunk())
    }, [dispatch])

    return(
        <>
        {annotation}
        </>
    )
}

export default SpecificAnno;