import React from 'react'
import ReactMarkdown from 'react-markdown'
import Title from '../atoms/Title'
import Text from '../atoms/Text'

const headingRenderer = ({ level, children }) => {
  switch(level) {
    case 1:
      return <Title as={`h${1}`} size="extra-large">{children}</Title>
    case 2:
      return <Title as={`h${2}`} size="large">{children}</Title>
    case 3:
      return <Title as={`h${3}`} size="medium">{children}</Title>
    case 4:
      return <Title as={`h${4}`} size="small">{children}</Title>
    default:
      return <Title size="small">{children}</Title>
  }
}

const paragraphRenderer = ({ children }) => <Text as="p" weight="light">{children}</Text>

const strongRenderer = ({ children }) => <Text weight="bold">{children}</Text>

const TextBlock = ({ text }) => {
  return (
    <ReactMarkdown 
      source={text}
      renderers={{
        heading: headingRenderer,
        paragraph: paragraphRenderer,
        strong: strongRenderer
      }}
    />
  )
}

export default TextBlock
