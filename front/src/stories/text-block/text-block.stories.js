import React from 'react'
import TextBlock from '../../components/molecules/TextBlock.jsx'

export const Titles = () => {
  const titles = [
    '# Heading title',
    '## Heading title',
    '### Heading title',
    '#### Heading title',
    '##### Heading title',
    '###### Heading title',
  ]
  const text = titles.join('  \n')
  return (
    <TextBlock text={text} />
  )
}
