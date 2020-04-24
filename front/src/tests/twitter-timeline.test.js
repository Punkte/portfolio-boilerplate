import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { Timeline } from '../stories/twitter-timeline/twitter-timeline.stories';

describe('Renders Timeline component', () => {
    test('with default', () => {
        const { container } = render(<Timeline />);
        expect(container).toBeTruthy();
    });
});