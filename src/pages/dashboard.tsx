import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';

export default function Component() {
  return (
    <Layout hasSider className='absolute top-0 left-0 h-full w-full'>
      <Layout.Sider theme='light'>
        <Menu
          mode="inline"
          items={[]}
        />
      </Layout.Sider>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
}
