import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { Logo } from '../stories/logo/logo.stories';

describe('Renders Logo component', () => {
    test('with default', () => {
        const { container } = render(<Logo />);
        expect(container).toBeTruthy();
    });
});