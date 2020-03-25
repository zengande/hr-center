import mockjs from 'mockjs';
import moment from 'moment';
import { CalendarItem } from '@/@types/calendar';

const titles = ['前端工程师', '产品经理', '项目经理', '.net core 开发工程师', '技术支持（Azure）']

export default {
    'GET /api/calendar': (req: any, res: any) => {
        let count = mockjs.Random.integer(10, 20);
        const result = new Array<{ date: string, count: Number, list?: Array<CalendarItem> }>();
        const dates = new Array<string>(count);
        for (var i = 0; i < count; i++) {
            let date = moment().add(mockjs.Random.integer(-1, 1), 'M')
                .add(mockjs.Random.integer(-15, 15), 'd').format('YYYY/MM/DD');
            if (dates.indexOf(date) >= 0) {
                i--;
                continue;
            }
            dates.push(date);
            let _count = mockjs.Random.integer(0, 20);
            if (_count <= 0) continue;
            const list = new Array<CalendarItem>();
            for (var j = 0; j < _count; j++) {
                list.push({
                    name: mockjs.Random.cname(),
                    title: titles[mockjs.Random.integer(0, titles.length - 1)],
                    time: `${mockjs.Random.integer(8, 19)}:${mockjs.Random.boolean() ? '00' : '30'}`,
                    avatar: mockjs.Random.image('32x32')
                })
            }

            result.push({ date: date, count: _count, list })
        }
        res.send(result);
    }
}