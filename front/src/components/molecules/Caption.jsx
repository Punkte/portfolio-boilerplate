import React from 'react'
import ReactMarkdown from 'react-markdown'
import Text from '../atoms/Text'
import Title from '../atoms/Title'
import PropTypes from 'prop-types'

const renderers = {
  paragraph: ({children, ...props}) => <Text size="extra-large" weight="light" as={'div'} {...props}>{children}</Text>,
  strong: ({children, ...props}) => <Title size="medium" style={{display: 'inline'}} as={'strong'} {...props}>{children}</Title>,
}

const Caption = ({ text, ...props }) => {
  return (
    <div {...props}>
      <ReactMarkdown
        source={text}
        renderers={renderers}
      />
    </div>
  )
}

Caption.propTypes = {
  text: PropTypes.string
}

export default Caption