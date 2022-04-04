const GET_ANNO = 'annotation/GET_ANNO'
const NEW_ANNO = 'annotation/NEW_ANNO'
const EDIT_ANNO = 'annotation/EDIT_ANNO'
const DEL_ANNO = 'annotation/DEL_ANNO'

export const getAnno = annos => ({
    type: GET_ANNO,
    annos 
})

export const createAnno = newAnno => ({
    type: NEW_ANNO,
    newAnno 
})


export const getAnnoThunk = () => async (dispatch) => {
    const res = await fetch('/api/annotations')
    //set up api ^^
    if (res.ok){
        const data = await res.json()
        dispatch(getAnno(data))
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

const initialState = {entries: {}}

const annoReducer = (state = initialState, action) => {
    let newState
    let newEntries
    switch(action.type){
        case GET_ANNO:
            newState = {...state}
            newEntries = {}
            action.annos.forEach(anno => newEntries[anno.id] = anno)
            newState.entries = newEntries
            return newState

        case NEW_ANNO:
            newState = {...state}
            newEntries = {...state.entries}
            newEntries[action.newAnno.id] = action.newAnno
            newState.entries = newEntries
            return newState
    }
}

export default annoReducer;