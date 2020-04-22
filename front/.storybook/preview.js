import React from 'react'
import { addDecorator } from '@storybook/react';
import GlobalFont from '../src/assets/fonts'

addDecorator(s => (
  <>
    <GlobalFont />
    {s()}
  </>
));