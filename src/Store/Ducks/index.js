import { combineReducers } from 'redux'
import drone from './drone'

const appReducer = combineReducers({ drone })

export default (state, action) => {
    return appReducer(state, action)
}