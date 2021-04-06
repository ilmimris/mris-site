import { Avatar, Space, Typography } from 'antd'

const { Text } = Typography

export default function ({ name, picture }) {
  return (
    <Space>
      <Avatar src={picture} />
      <Text strong> {name} </Text>
    </Space>

  )
}
