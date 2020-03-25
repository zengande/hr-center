import { Effect, Reducer, request } from 'umi';
import { CurriculumVitaeModel } from '@/@types/cv';

export interface CVsModelState {
    total?: number;
    data?: CurriculumVitaeModel[]
}

export interface CVsModelType {
    namespace: 'cvs',
    state: CVsModelState,
    effects: {
        fetch: Effect
    },
    reducers: {
        save: Reducer<CVsModelState>;
    }
}

const Model: CVsModelType = {
    namespace: "cvs",
    state: {},
    effects: {
        *fetch({ payload }, { put }) {
            const result = yield request('/api/cvs', { params: payload });
            yield put({
                type: 'save',
                payload: { ...result }
            });
        }
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    }
}

export default Model;