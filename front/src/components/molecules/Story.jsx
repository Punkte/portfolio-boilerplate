import React from 'react'
import ReactMarkdown from 'react-markdown'
import Text from '../atoms/Text'
import Title from '../atoms/Title'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Story = ({ text, ...props }) => {
  return (
    <div {...props}>
      <ReactMarkdown
        source={text}
        renderers={{
          paragraph: ({children, ...props}) => <Text size="large" weight="light" as={'div'} {...props}>{children}</Text>,
          strong: ({children, ...props}) => <Text weight="bold" style={{display: 'inline'}} as={'strong'} {...props}>{children}</Text>,
        }}
      />
    </div>
  )
}

Story.propTypes = {
  text: PropTypes.string
}

export default Story