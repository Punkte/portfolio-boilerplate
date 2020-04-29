import React from 'react'
import ReactMarkdown from 'react-markdown'
import Title from '../atoms/Title'
import Text from '../atoms/Text'

const headingRenderer = ({ level, children, ...props }) => {
  switch(level) {
    case 1:
      return <Title as={`h${1}`} size="extra-large" {...props} >{children}</Title>
    case 2:
      return <Title as={`h${2}`} size="large" {...props} >{children}</Title>
    case 3:
      return <Title as={`h${3}`} size="medium" {...props} >{children}</Title>
    case 4:
      return <Title as={`h${4}`} size="small" {...props} >{children}</Title>
    default:
      return <Title size="small" {...props} >{children}</Title>
  }
}

const paragraphRenderer = ({ children }) => <Text as="p" weight="light">{children}</Text>

const strongRenderer = ({ children }) => <Text weight="bold">{children}</Text>

const TextBlock = ({ text, renderers, ...props }) => {
  return (
    <ReactMarkdown
      { ...props }
      source={text}
      renderers={{
        heading: headingRenderer,
        paragraph: paragraphRenderer,
        strong: strongRenderer,
        ...renderers,
      }}
    />
  )
}

export default TextBlock
