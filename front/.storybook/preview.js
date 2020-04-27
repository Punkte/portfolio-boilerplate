import React from 'react'
import { addDecorator } from '@storybook/react';
import GlobalFont from '../src/assets/fonts'
import GlobalReset from '../src/assets/css/reset';

addDecorator(s => (
  <>
    <GlobalReset />
    <GlobalFont />
    {s()}
  </>
));