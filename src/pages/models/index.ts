import { Effect, Reducer, request } from 'umi';
import { CalendarModel, InterviewModel, CalendarItem } from '@/@types/calendar';
import moment from 'moment'

export interface IndexModelState {
    calendar?: CalendarModel[]
    interviewList?: InterviewModel
}

export interface IndexModelType {
    namespace: 'index';
    state: IndexModelState;
    effects: {
        fetchCalendar: Effect;
        fetchInterviewList: Effect;
    };
    reducers: {
        save: Reducer<IndexModelState>;
    };
    // subscriptions: { setup: Subscription };
}

const model: IndexModelType = {
    namespace: 'index',
    state: {

    },
    effects: {
        *fetchCalendar({ payload }, { call, put }) {
            const calendar = yield request('/api/calendar');
            yield put({
                type: 'save',
                payload: {
                    calendar
                }
            })

            yield put({ type: 'fetchInterviewList', payload })
        },
        *fetchInterviewList({ payload }, { select, put }) {
            const calendar: CalendarModel[] = yield select(({ index }: { index: IndexModelState }) => index.calendar || []);
            const _list = calendar?.find(item => item.date === payload)?.list;
            const temp = new Array<{ time: string, list: CalendarItem[] }>();
            let total = _list?.length || 0;

            _list?.forEach(item => {
                var index = temp.findIndex(i => i.time === item.time);
                if (index < 0) {
                    temp.push({ time: item.time, list: [{ ...item }] })
                } else {
                    let newList = temp[index].list
                    newList.push(item);
                    temp[index].list = newList
                }
            })

            const sorted = temp.sort((a, b) => moment(`1999/01/01 ${a.time}`).isBefore(moment(`1999/01/01 ${b.time}`)) ? -1 : 1) || []
            yield put({
                type: 'save',
                payload: {
                    interviewList: { total, data: sorted }
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
export default model;