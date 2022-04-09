import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as trackActions from '../../store/track';

//TODO
//limit user to one vote per comment or annotation or anno comment
//if user has already voted on this specific comm/anno,
//clicking the same button will remove the vote

const Vote = ({ comment_id, anno, annoIdComment, annoCommentId }) => {
    const commentId = comment_id
    const annotationId = anno
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)
    const voteState = useSelector(state => state.track.votes)

    const [voted, setVoted] = useState(false)

    const { trackId } = useParams()
    const tracksObj = useSelector(state => state.track)
   
    useEffect(() => {
        dispatch(trackActions.getTrackThunk(trackId))
        dispatch(trackActions.getVoteThunk());
    }, [dispatch, voteState]);

    const handleUpVote = async (e) => {
        e.preventDefault()
        //if not a comment AND not a comment on an anno, it is annotation
        if (typeof commentId === 'undefined' && typeof annoCommentId === 'undefined') {
            const commentId = null
            //console.log('IS ANNOTATION')
            const annotationId = anno
            
            const newVote = {
                userId,
                annotationId,
                commentId,
                vote: true,
            }
            //console.log(newVote)
            
            await dispatch(trackActions.createVoteThunk(newVote))
            await dispatch(trackActions.getVoteThunk())
            await dispatch(trackActions.getTrackThunk(trackId))
        }
        //if does not have commentId it is not a track comment
        //therefore it is an annotation comment,
        //need the annotation id as well
        else if (typeof commentId === 'undefined') {
            //console.log('COMMENT UNDEFINED, NOT TRACK COMMENT, IS ANNO COMMENT')
            const commentId = null || annoCommentId
            const annotationId = annoIdComment

            const newVote = {
                userId,
                annotationId,
                commentId,
                vote: true
            }
            
            await dispatch(trackActions.createVoteThunk(newVote))
            await dispatch(trackActions.getVoteThunk())
            await dispatch(trackActions.getTrackThunk(trackId))
        }
        //if does not have annotationId it is not a annotation comment
        //therefore it is a track comment
        else if (typeof annotationId === 'undefined') {
            const annotationId = null

            const newVote = {
                userId,
                annotationId,
                commentId,
                vote: true
            }

            await dispatch(trackActions.createVoteThunk(newVote))
            await dispatch(trackActions.getVoteThunk())
            await dispatch(trackActions.getTrackThunk(trackId))
        }
        
    }
    //downvote is same as upvote but vote:false 
    const handleDownVote = async (e) => {
        e.preventDefault()

        if (typeof commentId === 'undefined' && typeof annoCommentId === 'undefined') {
            const commentId = null
            const annotationId = anno

            const newVote = {
                userId,
                annotationId,
                commentId,
                vote: false
            }
            await dispatch(trackActions.createVoteThunk(newVote))
            await dispatch(trackActions.getVoteThunk())
            await dispatch(trackActions.getTrackThunk(trackId))
        }
        else if (typeof commentId === 'undefined') {
            const commentId = null || annoCommentId
            const annotationId = annoIdComment

            const newVote = {
                userId,
                annotationId,
                commentId,
                vote: false
            }
            await dispatch(trackActions.createVoteThunk(newVote))
            await dispatch(trackActions.getVoteThunk())
            await dispatch(trackActions.getTrackThunk(trackId))
        }

        else if (typeof annotationId === 'undefined') {

            const annotationId = null

            const newVote = {
                userId,
                annotationId,
                commentId,
                vote: false
            }
            await dispatch(trackActions.createVoteThunk(newVote))
            await dispatch(trackActions.getVoteThunk())
            await dispatch(trackActions.getTrackThunk(trackId))
        }
        
    }

    return (
        <>  
            <button onClick={handleUpVote}>Up Vote</button>
            <button onClick={handleDownVote}>Down Vote</button>
        </>
    )
}
export default Vote;

