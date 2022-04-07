import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as trackActions from '../../store/track';

const Vote = () => {

    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)

    const { trackId } = useParams()
    const tracksObj = useSelector(state => state.track)
    const track = Object.values(tracksObj)[0];


    useEffect(() => {
        dispatch(trackActions.getTrackThunk(trackId));
    }, [dispatch]);

  
    const handleUpVote = async (e) => {
        e.preventDefault()

        //provide annotation id only if applicable

        //provide comment id only if applicable
        

        //provide both comment/anno id if applicable

        //limit user to one vote per comment or annotation or anno comment
        //if user has already voted on this specific comm/anno,
        //  clicking the same button will remove the vote
        const newVote = {
            userId,
            annotationId: null,
            commentId: '6',
            vote: true
        }
        console.log(newVote)

        return await dispatch(trackActions.createVoteThunk(newVote))

    }

    const handleDownVote = async (e) => {
        e.preventDefault()

        const newVote = {
            userId,
            annotationId: '3',
            commentId: null,
            vote: false
        }
        console.log(newVote)
        return await dispatch(trackActions.createVoteThunk(newVote))
    }

    return (
        <>
            <form onSubmit={handleUpVote}>
                <button type='submit'>Up Vote</button>
            </form>
            <form onSubmit={handleDownVote}>
                <button type='submit'>Down Vote</button>
            </form>

        </>
    )
}
export default Vote;

