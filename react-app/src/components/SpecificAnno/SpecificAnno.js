import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as trackActions from '../../store/track';


const SpecificAnno = () => {

    const dispatch = useDispatch()
    

    // useEffect(() => {
    //     dispatch(trackActions.getAnnoThunk())
    // }, [dispatch])

    return(
        <>
        </>
    )
}

export default SpecificAnno;