import Footer from './footer'
import Meta from './meta'
import { Layout as AntdLayout } from 'antd';
import Header from './header';

const { Content } = AntdLayout;

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <AntdLayout>
        <Header />
          {/* <Alert preview={preview} /> */}
          <Content>{children}</Content>
        <Footer />
      </AntdLayout>
    </>
  )
}
