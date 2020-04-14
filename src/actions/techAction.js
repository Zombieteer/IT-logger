import { GET_TECHS, TECHS_ERROR, SET_LOADING } from '../actions/types'

// get techs from server
export const getTechs = () => async dispatch => {
    try {
        setLoading()
        const res = await fetch('/techs')
        const data = await res.json()
        dispatch({
            type: GET_TECHS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: TECHS_ERROR,
            payload: error.response.statusText
        })
    }
}

// set loading
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}