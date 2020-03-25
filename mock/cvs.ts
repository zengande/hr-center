import mockjs from 'mockjs'
const titles = ['前端工程师', '产品经理', '项目经理', '.net core 开发工程师', '技术支持（Azure）']
const colleges = ['北京大学', '清华大学', '浙江大学', '复旦大学', '中国人民大学']
const edus = ['高中', '大专', '本科']
export default {
    'GET /api/cvs': (req: any, res: any) => {
        let total = mockjs.Random.integer(0, 1000);
        const data: any = []
        if (total > 0) {
            let count = total > 10 ? 10 : total;
            for (var i = 0; i < count; i++) {
                data.push({
                    id: mockjs.Random.guid(),
                    avatar: mockjs.Random.image('100x100'),
                    name: mockjs.Random.cname(),
                    position: titles[mockjs.Random.integer(0, titles.length - 1)],
                    postTime: mockjs.Random.datetime('yyyy-MM-dd HH:mm'),
                    properties: [
                        colleges[mockjs.Random.integer(0, colleges.length - 1)],
                        edus[mockjs.Random.integer(0, edus.length - 1)],
                        `${mockjs.Random.date('yyyy')}届`,
                        `现居${mockjs.Random.province()}`
                    ]
                })
            }
        }

        setTimeout(() => {
            res.send({ total, data })
        }, mockjs.Random.integer(0, 3) * 1000);
    }
}