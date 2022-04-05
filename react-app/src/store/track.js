const GET_TRACK = 'track/GET_TRACK'
const GET_TRACKS = 'track/GET_TRACKS'
const NEW_TRACK = 'track/NEW_TRACK'
const UPDATED_TRACK = 'track/UPDATED_TRACK'
const DEL_TRACK = 'track/DEL_TRACK'

const getTrack = (track) => ({
    type: GET_TRACK,
    payload: track
})

const getAllTracks = (tracks) => ({
    type: GET_TRACKS,
    payload: tracks
})

const newTrack = (track) => ({
    type: NEW_TRACK,
    payload: track
})

const updateTrack = (track) => ({
    type: UPDATED_TRACK,
    payload: track
})

const deleteTrack = (track) => ({
    type: DEL_TRACK,
    payload: track
})


export const getTrackThunk = (trackId) => async (dispatch) => {
    const res = await fetch(`/api/tracks/${trackId}`)

    if (res.ok){
        const data = await res.json()
        dispatch(getTrack(data))
    }
}

export const getAllTracksThunk = () => async (dispatch) => {

    const res = await fetch('/api/tracks')

    if (res.ok){
        const data = await res.json()
        dispatch(getAllTracks(data))
    }
}


export const addNewTrackThunk = (track) => async (dispatch) => {

    const res = await fetch('/api/tracks/new', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(track)
    });

    if (res.ok) {
        const newTrack = await res.json();
        dispatch(newTrack(newTrack));
    }

};



// export default function reducer(state = {all_tracks: []}, action) {
    
    //     const getCommentsAndAnnotations = (array) => {
        //         const stateObj = {}
        //         array.forEach(track => {
            //             stateObj[track.id] = track
            //             if(track.hasOwnProperty("annotations")){
                //                 stateObj[track.id].annotations = {...getCommentsAndAnnotations(track.annotations), all: track.annotations}
//             } else if (track.annotations.hasOwnProperty("comments")){
    //                 stateObj[track.id].comments = {...getCommentsAndAnnotations(track.comments), all: track.comments}
    //             }
    //         })
    //         console.log(stateObj)
    //         return stateObj
    
    
    
    //     }
const initialState = {};

export default function trackReducer(state = initialState, action) {
    let newState
    let newTracks

    switch(action.type) {

        //case GET_TRACK:


        case GET_TRACKS:
            newState = {...state};
            action.payload.tracks?.forEach((track) => newState[track.id] = track)
            return newState;

        default: 
            return state 
    }
}
