import Avatar from './avatar'
import Date from './date'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import React from 'react'
import { Col, Divider, Row, Space, Typography } from 'antd'

const { Title } = Typography

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <Row justify="center">
        <Col span={24} style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coverImage?.url})`,
          height: '50vh',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'relative'
        }}>
          <div style={{
            textAlign: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <Title style={{
              color: 'white',
            }}>{title}</Title>
            <Space style={{
              color: 'white',
            }}>
              <Avatar name={author.name} picture={author.picture.url} />
              <Date dateString={date} />
            </Space>
          </div>
        </Col>
      </Row>
    </>
  )
}
