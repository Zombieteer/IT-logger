import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, SET_CURRENT, DELETE_LOG, UPDATE_LOG, CLEAR_CURRENT, SEARCH_LOGS } from './types'

// get logs from server
export const getLogs = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs')
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}

// Add new log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}

// set current
export const setCurrent = (log) => {
    return ({
        type: SET_CURRENT,
        payload: log
    });
}

// clear current
export const clearCurrent = () => {
    return ({
        type: CLEAR_CURRENT,
    });
}

// Update Log
export const updateLog = (log) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}

// search logs from server
export const searchLogs = (text) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/logs?q=${text}`)
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}


// Delete log
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();
        await fetch(`/logs/${id}`, {
            method: 'DELETE'
        })
        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.statusText
        })
    }
}


//set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}