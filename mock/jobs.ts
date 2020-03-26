import { JobSummary } from '@/@types/job';
import mockjs from 'mockjs';

const titles = ['前端工程师', '产品经理', '项目经理', '.net core 开发工程师', '技术支持（Azure）']

export default {
    'GET /api/jobs': (req: any, res: any) => {

        const data = new Array<JobSummary>();
        const total = mockjs.Random.integer(0, 1000);
        const count = total > 10 ? 10 : total;
        for (let i = 0; i < count; i++) {
            data.push({
                id: mockjs.Random.guid(),
                name: titles[mockjs.Random.integer(0, titles.length - 1)],
                updateTime: mockjs.Random.date('yyyy-MM-dd HH:mm'),
                status: mockjs.Random.integer(1, 2),
                requirement: "杭州 - 本科",
                heat: mockjs.Random.integer(0, 100)
            })
        }

        setTimeout(() => {
            res.send({ total, data });
        }, mockjs.Random.integer(0, 3) * 1000);
    }
}