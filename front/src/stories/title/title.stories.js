import React from 'react'
import Title from '../../components/atoms/Title'


export const ExtraLargeTitle = ({ children, ...props }) => <Title size='extra-large' data-testid="extra-large-title" {...props}>{children}</Title>
export const LargeTitle = ({ children, ...props }) => <Title size='large' data-testid="large-title" {...props}>{children}</Title>
export const Medium = ({ children, ...props }) => <Title size='medium' data-testid="medium-title" {...props}>{children}</Title>
export const Small = ({ children, ...props }) => <Title size='small' data-testid="small-title" {...props}>{children}</Title>
