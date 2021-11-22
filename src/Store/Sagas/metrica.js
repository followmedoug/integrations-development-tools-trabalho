import { call, put } from 'redux-saga/effects'
import api from '../../Services/api'

import { Creators as MetricaActions } from '../Ducks/metrica'

export function* getMetrica() {
    try {
        const response = yield call(api.get, '/metrica')

        if(response.status === 200) {
            yield put(MetricaActions.getMetricaSuccess(response.data))
        }
    } catch (error) {
        throw new Error('houve um erro ao buscar metricas')
    }
}