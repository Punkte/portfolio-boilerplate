import React from 'react'
import ReactMarkdown from 'react-markdown'
import Text from '../atoms/Text'
import Title from '../atoms/Title'


const Caption = ({ text }) => {
  return (
    <ReactMarkdown
      source={text}
      renderers={{
        paragraph: ({children}) => <Text size="extra-large" weight="light" as={'div'}>{children}</Text>,
        strong: ({children}) => <Title size="medium" style={{display: 'inline'}} as={'h1'}>{children}</Title>,
      }}
    />
  )
}

export default Caption