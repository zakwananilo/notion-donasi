import React from 'react'
import Row from './grid/Row'
import Column from './grid/Column'
import Text from './typography/Text'

function NotFound() {
  return (
    <Row center className="h-full">
      <Column className="h-full">
        <Text size="lg" color="primary" weight={400}>Not Found</Text>
      </Column>
    </Row>
  )
}

export default NotFound