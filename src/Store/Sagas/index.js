import { all, takeLatest } from 'redux-saga/effects'

import { Types as DroneTypes } from '../Ducks/drone'

import { getDrone } from './drone'

export default function* rootSaga() {
    yield all([ takeLatest(DroneTypes.GET_DRONES_REQUEST, getDrone)])
}