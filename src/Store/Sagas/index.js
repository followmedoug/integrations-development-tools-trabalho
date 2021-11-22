import { all, takeLatest } from 'redux-saga/effects'

import { Types as DroneTypes } from '../Ducks/drone'
import { Types as MetricaTypes } from '../Ducks/metrica'

import { getDrone } from './drone'
import { getMetrica } from './metrica'

export default function* rootSaga() {
    yield all([ 
    takeLatest(DroneTypes.GET_DRONES_REQUEST, getDrone),
    takeLatest(MetricaTypes.GET_METRICA_REQUEST, getMetrica)
])
}