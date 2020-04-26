import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { Titles } from '../stories/text-block/text-block.stories';

describe('Renders TextBlock component', () => {
  test('with default', () => {
    const { container } = render(<Titles />);
    expect(container).toBeTruthy();
  });
});