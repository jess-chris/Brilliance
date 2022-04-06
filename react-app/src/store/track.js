const GET_TRACK = 'track/GET_TRACK'
const GET_TRACKS = 'track/GET_TRACKS'
const NEW_TRACK = 'track/NEW_TRACK'
const DEL_TACO = 'track/DEL_TACO'

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

const deleteTrack = (track) => ({
    type: DEL_TACO,
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
        const track = await res.json();
        dispatch(newTrack(track));
    }

};

export const updateTrackThunk = (track) => async (dispatch) => {

    const res = await fetch('/api/tracks/edit', {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(track)
    });

    if (res.ok) {
        const updatedTrack = await res.json();
        dispatch(newTrack(updatedTrack));

    }
}

export const deleteTrackThunk = (trackId) => async (dispatch) => {

    const res = await fetch('/api/tracks/delete', {
        method: "DELETE",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({trackId})
    });

    if (res.ok) {
        const deletedTrack = await res.json();
        dispatch(deleteTrack(deletedTrack));
        return deletedTrack
    }
};

// --------------------------------

export const getAnnoThunk = () => async (dispatch) => {
    const res = await fetch('/api/annotations')
    //set up api ^^
    if (res.ok){
        const data = await res.json()
        return data
    }
}

export const createAnnoThunk = anno_data => async dispatch => {
    const res = await fetch(`/api/annotations/new`, {
        method: 'POST',
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(anno_data)
    })
    if (res.ok){
        const data = await res.json()
    }
}

export const editAnnoThunk = (anno_data) => async dispatch => {

    const res = await fetch(`/api/annotations/${anno_data.track_id}`, {
        method: 'PUT',
        headers: {'Content-Type': "application/json",
                    'Accept': 'application/json'},
        body: JSON.stringify(anno_data)
    })
    if (res.ok){
        const updatedAnno = await res.json()
    }
}

export const deleteAnnoThunk = id => async dispatch => {

    const res = await fetch(`/api/annotations/${id}`, {
        method: 'DELETE',
    });
    if (res.ok){
        const deletedAnno = await res.json()
        return deletedAnno 
    }
}


const initialState = {};

const trackReducer = (state = initialState, action) => {
    let newState;

    switch(action.type) {

        case GET_TRACK:
            let thisState = {};
            thisState[action.payload.id] = action.payload
            return thisState
        case GET_TRACKS:
            newState = {...state};
            action.payload.tracks?.forEach((track) => newState[track.id] = track)
            return newState;

        case NEW_TRACK:
            newState = {...state};
            newState[action.payload.id] = action.payload
            return newState;

        case DEL_TACO:
            newState = {...state};
            delete newState[action.payload.id];
            return newState;

        default: 
            return state 
    }
}

export default trackReducer