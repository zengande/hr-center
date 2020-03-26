import { JobSummary } from '@/@types/job';
import { Effect, Reducer, request } from 'umi';

export interface JobCenterModelState {
    total?: number;
    data?: JobSummary[]
}

export interface JobCenterModelType {
    namespace: 'job_center',
    state: JobCenterModelState,
    effects: {
        fetch: Effect
    },
    reducers: {
        save: Reducer<JobCenterModelType>
    }
}

const Model: JobCenterModelType = {
    namespace: "job_center",
    state: {},
    effects: {
        *fetch({ payload }, { put }) {
            const result = yield request('/api/jobs', { params: payload });
            yield put({
                type: "save",
                payload: {
                    ...result
                }
            })
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