import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'
import { WechatOutlined } from '@ant-design/icons'
import { ConfigProvider } from 'antd'
export default class App extends Component {
  render() {
    return (
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b',
          },
        }}
      >
        <div>
          App <Button type="default">Primary Button</Button>
          <DatePicker picker="year" />
          <WechatOutlined />
        </div>
      </ConfigProvider>
    )
  }
}
