import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { Input } from '../stories/input/input.stories';

describe('Renders Input component', () => {
    test('with default', () => {
        const { container } = render(<Input />);
        expect(container).toBeTruthy();
    });
});