import { Alert, Button, Card, Input, Space, Tag, Typography } from 'antd'

export default function AntdShowcase() {
  return (
    <Card title="Ant Design Example">
      <Typography.Paragraph>
        This card shows the same UI idea built with Ant Design components.
      </Typography.Paragraph>

      <Space wrap style={{ marginBottom: 12 }}>
        <Tag color="blue">Button</Tag>
        <Tag color="purple">Input</Tag>
        <Tag color="green">Card</Tag>
      </Space>

      <Space direction="vertical" style={{ width: '100%' }}>
        <Input placeholder="Project Name (example: Study Dashboard)" />
        <Button type="primary">Save Project</Button>
        <Alert type="success" message="AntD includes a complete component set out of the box." />
      </Space>
    </Card>
  )
}
