import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { Experience } from '../stories/experience/experience.stories';

describe('Renders Experience component', () => {
    test('with default', () => {
        const { container } = render(<Experience start="2018-09-30" end="2019-07-31" />);
        expect(container).toBeTruthy();
    });
});