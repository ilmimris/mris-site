import { Content } from "antd/lib/layout/layout";

export default function PostBody({ content }) {
  return (
    <Content
      dangerouslySetInnerHTML={{ __html: content?.html }}
    />
  )
}
