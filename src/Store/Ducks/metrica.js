export const Types = {
    GET_METRICA_REQUEST: 'metrica/GET_METRICA_REQUEST',
    GET_METRICA_SUCCESS: 'metrca/GET_METRICA_REQUEST',
    GET_METRICA_ERROR: 'metrica/GET_METRICA_ERROR'
}

const INITIAL_STATE = {
    data: [],
    loading: false
}

export default function metrica(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_METRICA_REQUEST:
            return { ...state, loading: true, data: [] }
        
        case Types.GET_METRICA_SUCCESS:
            return { ...state, loading: false, data: action.data }
        
        case Types.GET_METRICA_ERROR:
                return { ...state, loading: false }
        default:
            return state
    }
}

export const Creators = {
    getMetricaRequest: () => ({ type: Types.GET_METRICA_REQUEST }),
    getMetricaSuccess: data => ({ type: Types.GET_METRICA_SUCCESS }),
    getMetricaError: () => ({ type: Types.GET_METRICA_ERROR })
}