const GET_ANNO = 'annotation/GET_ANNO'
const NEW_ANNO = 'annotation/NEW_ANNO'
// const EDIT_ANNO = 'annotation/EDIT_ANNO'
const DEL_ANNO = 'annotation/DEL_ANNO'

export const getAnno = annos => ({
    type: GET_ANNO,
    payload: annos
})


export const createAnno = newAnno => ({
    type: NEW_ANNO,
    payload: newAnno
})

// export const editAnno = editedAnno => ({
//     type: EDIT_ANNO,
//     payload: editedAnno
// })

export const deleteAnno = toDelete => ({
    type: DEL_ANNO,
    payload: toDelete
})


export const getAnnoThunk = () => async (dispatch) => {
    const res = await fetch('/api/annotations')
    //set up api ^^
    if (res.ok){
        const data = await res.json()
        dispatch(getAnno(data))
        return data
    }
}

export const createAnnoThunk = anno_data => async dispatch => {
    const res = await fetch(`/api/annotations/${anno_data.track_id}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(anno_data)
    })
    if (res.ok){
        const data = await res.json()
        dispatch(createAnno(data))
    }
}

export const editAnnoThunk = (id, anno_data) => async dispatch => {

    const res = await fetch(`/api/annotations/${anno_data.track_id}`, {
        method: 'PUT',
        headers: {'Content-Type': "application/json",
                    'Accept': 'application/json'},
        body: JSON.stringify(anno_data)
    })
    if (res.ok){
        const updatedAnno = await res.json()
        dispatch(createAnno(updatedAnno))
    }
}

export const deleteAnnoThunk = id => async dispatch => {

    const res = await fetch(`/api/annotations/${id}`, {
        method: 'DELETE',
    });
    if (res.ok){
        const deletedAnno = await res.json()
        dispatch(deleteAnno(deletedAnno))
        return deletedAnno 
    }
}


const initialState = {}

const annoReducer = (state = initialState, action) => {

    let newState

    switch(action.type) {
        
        case GET_ANNO:
            newState = {...state}
            action.payload.annos?.forEach((anno) => newState[anno.id] = anno)
            return newState

        case NEW_ANNO:
            newState = {...state}
            newState[action.payload.id] = action.payload
            return newState

        // case EDIT_ANNO:
        //     newState = {...state};
        //     newEntries = {...state.entries}
        //     newEntries[action.editedAnno.id] = action.editedAnno;
        //     newState.entries = newEntries
        //     return newState
        
        case DEL_ANNO:
            newState = {...state};
            delete newState[action.payload.id]
            return newState

        default:
            return state
    }
}

export default annoReducer;
