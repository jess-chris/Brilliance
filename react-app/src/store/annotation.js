const GET_ANNO = 'annotation/GET_ANNO'
const NEW_ANNO = 'annotation/NEW_ANNO'
const EDIT_ANNO = 'annotation/EDIT_ANNO'
const DEL_ANNO = 'annotation/DEL_ANNO'

export const getAnno = annos => (
    console.log('AASDASDASDASDA', annos.annotations),
    {
    type: GET_ANNO,
    annos
})


export const createAnno = newAnno => ({
    type: NEW_ANNO,
    newAnno
})

export const editAnno = editedAnno => ({
    type: EDIT_ANNO,
    editedAnno
})


export const getAnnoThunk = () => async (dispatch) => {
    const res = await fetch('/api/annotations')
    //set up api ^^
    if (res.ok){
        const data = await res.json()
        console.log('DATA!!!', data)
        dispatch(getAnno(data))
        return data
    }
}

export const createAnnoThunk = anno_data => async dispatch => {
    console.log('TOP OF THUNK', anno_data)
    const res = await fetch(`/api/annotations/${anno_data.track_id}`, {
        method: 'POST',
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(anno_data)
    })
    if (res.ok){
        console.log('####### RES OK #######')
        const data = await res.json()
        dispatch(createAnno(data))
    }
}

export const editAnnoThunk = (id, anno_data) => async dispatch => {
    const res = await fetch(`/api/annotations/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(anno_data)
    })
    if (res.ok){
        const updatedAnno = await res.json()
        dispatch(editAnno(id, updatedAnno))
    }
}


const initialState = {entries: {}}

const annoReducer = (state = initialState, action) => {
    console.log('in reducer')
    let newState
    let newEntries
    switch(action.type){
        case GET_ANNO:
            newState = {...state}
            newEntries = {}
            action.annos.annotations.forEach(anno => newEntries[anno.id] = anno)
            newState.entries = newEntries
            return newState

        case NEW_ANNO:
            newState = {...state}
            newEntries = {...state.entries}
            newEntries[action.newAnno.id] = action.newAnno
            newState.entries = newEntries
            return newState

        case EDIT_ANNO:
            newState = {...state};
            newEntries = {...state.entries}
            newEntries[action.editedAnno.id] = action.editedAnno;
            newState.entries = newEntries
            return newState

        default:
            return state
    }
}

export default annoReducer;
