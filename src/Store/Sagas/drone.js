import { call, put } from 'redux-saga/effects'
import api from '../../Services/api'

import { Creators as DroneActions } from '../Ducks/drone'

export function* getDrone() {
    try {
        const response = yield call(api.get, `/drone`)

        if(response.status === 200) {
            yield put(DroneActions.getDronesSuccess(response.data))
        }
    } catch (error) {
        throw new Error('houve um erro ao buscar drones')
    }
}