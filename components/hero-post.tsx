import Date from './date'
import CoverImage from './cover-image'
import Link from 'next/link'

import { Layout, Row, Col, Avatar, Typography, Space } from 'antd';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Content style={{
      margin: '24px auto'
    }}>
      <Row justify="center">
        <Col span={20}>
          <CoverImage slug={slug} title={title} url={coverImage?.url} />
        </Col>
      </Row>
      <Row justify="center">
        <Col span={10}>
          <Title level={1}>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              {title}
            </Link>
          </Title>
          <Text>
            <Date dateString={date} />
          </Text>
        </Col>
        <Col span={10}>
          <Paragraph> {excerpt} </Paragraph>
          <Space>
            <Avatar src={author?.picture?.url} />
            <Text strong> {author?.name} </Text>
          </Space>
        </Col>
      </Row>
    </Content>
  )
}
