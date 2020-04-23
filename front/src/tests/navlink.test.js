import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { NavLink } from '../stories/navlink/navlink.stories';

describe('Renders NavLink component', () => {
    test('with default', () => {
        const { container } = render(<NavLink />);
        expect(container).toBeTruthy();
    });
});