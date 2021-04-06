import { Typography } from "antd"

const { Title } = Typography

export default function PostTitle({ children }) {
  return (
    <Title level={1}>
      {children}
    </Title>
  )
}
