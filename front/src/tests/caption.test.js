import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { CaptionWithText } from '../stories/caption/caption.stories';

describe('Renders Caption component', () => {
    test('with default', () => {
        const { container } = render(<CaptionWithText />);
        expect(container).toBeTruthy();
    });
});