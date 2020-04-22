import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { DefaultButton, NavlinkButton } from '../stories/button/button.stories';

describe('Renders Label component', () => {
    test('with default behavior', () => {
        const { container } = render(<DefaultButton />);
        expect(container).toBeTruthy();
    });

    test('with navLink variant', () => {
        const { container } = render(<NavlinkButton />);
        expect(container).toBeTruthy();
    });
});