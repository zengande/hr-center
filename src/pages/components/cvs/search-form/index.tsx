import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Input, Button, Select } from 'antd'

const SearchForm = () => {
    const [expand, setExpand] = useState(false)
    const [form] = Form.useForm();

    return (
        <Form form={form}>
            <Row gutter={24}>
                <Col span={8}>
                    <Form.Item label="投递职位">
                        <Select value={0}>
                            <Select.Option value={0}>不限</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="投递职位">
                        <Select value={0}>
                            <Select.Option value={0}>不限</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            {expand &&
                <Row gutter={24}>
                    <Col span={8}>
                        <Form.Item label="现居城市">
                            <Select value={0}>
                                <Select.Option value={0}>不限</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="每周天数">
                            <Select value={0}>
                                <Select.Option value={0}>不限</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="实习时长">
                            <Select value={0}>
                                <Select.Option value={0}>不限</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="入职时间">
                            <Select value={0}>
                                <Select.Option value={0}>不限</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;历">
                            <Select value={0}>
                                <Select.Option value={0}>不限</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="毕业时间">
                            <Select value={0}>
                                <Select.Option value={0}>不限</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="学校类型">
                            <Select value={0}>
                                <Select.Option value={0}>不限</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业">
                            <Select value={0}>
                                <Select.Option value={0}>不限</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别">
                            <Select value={0}>
                                <Select.Option value={0}>不限</Select.Option>
                                <Select.Option value={1}>男</Select.Option>
                                <Select.Option value={2}>女</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            }
            <div style={{ textAlign: 'center' }}><Button type='link' onClick={() => setExpand(!expand)}>{expand ? '收起' : '展开'}更多选项</Button></div>
        </Form >
    )
}

export default SearchForm;