export const Types = {
    GET_DRONES_REQUEST: 'drone/GET_DRONES_REQUEST',
    GET_DRONES_SUCCESS: 'drone/GET_DRONES_SUCCESS',
    GET_DRONES_ERROR: 'drone/GET_DRONES_ERROR'
}

const INITIAL_STATE = {
    data: [],
    loading: false
}

export default function drone(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.GET_DRONES_REQUEST:
            return { ...state, loading: true, data: [] }

        case Types.GET_DRONES_SUCCESS:
            return { ...state, loading: false, data: action.data }
        
        case Types.GET_DRONES_ERROR:
            return {  ...state, loading: false }
        default:
            return state
    }
}

export const Creators  = {
    getDronesRequest: () => ({ type: Types.GET_DRONES_REQUEST }),
    getDronesSuccess: data => ({ type: Types.GET_DRONES_SUCCESS, data }),
    getDronesError: () => ({ type: Types.GET_DRONES_SUCCESS })
}