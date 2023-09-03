import { ConfigProvider } from 'antd';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from '~react-pages';

export default function App() {
  return (
    <ConfigProvider>
      <RouterProvider
        router={createBrowserRouter(routes)}
        fallbackElement={'Loading...'}
      />
    </ConfigProvider>
  );
}
