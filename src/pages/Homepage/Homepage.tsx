import { Breadcrumb, Layout, Menu, Button} from 'antd';
import React from 'react';

const { Header, Content, Footer } = Layout;

export const Homepage: React.FC = () => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['3']}
        items={new Array(3).fill(null).map((_, index) => ({
          key: String(index + 1),
          label: ['Why Construct.ly']
        }))}
      />
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
        Better Planing Less Waste
      </div>
      <div>
        <Button type="primary">Plan</Button>
        <Button type="primary">Community</Button>
        <Button type="primary">Buy & Sell</Button>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Construct.ly ©2022 Created by asepBalon</Footer>
  </Layout>
);