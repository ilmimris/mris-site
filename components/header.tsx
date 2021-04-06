import Link from 'next/link'
import { Layout, Menu } from 'antd';

const { Header: AntdHeader } = Layout;

export default function Header() {
  return (
    <AntdHeader >
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link as={`/`} href="/"> Blog </Link>
        </Menu.Item>
        <Menu.Item key="2">LinkedIn</Menu.Item>
        <Menu.Item key="3">GitHub</Menu.Item>
      </Menu>
    </AntdHeader>
  )
}
