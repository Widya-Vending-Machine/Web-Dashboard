import { Button, Card, Form, Input } from 'antd';

type FieldType = {
  email?: string;
  password?: string;
};

export default function Component() {
  function onFinish(values: FieldType) {
    console.log('values', values);
  }

  return (
    <Card title="Login" style={{ width: 300 }}>
      <Form name='login-form' onFinish={onFinish} autoComplete='off'>
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
