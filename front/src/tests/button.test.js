import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { DefaultButton, NavlinkButton } from '../stories/button/button.stories';

describe('Renders Button component', () => {
    let spy;

    beforeEach(() => {
      spy = jest.fn();
    });

    test('with default behavior', () => {
        const { container, getByTestId } = render(<DefaultButton onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('default-button')
        button.click()
        expect(spy).toHaveBeenCalled()
    });

    test('with navLink variant', () => {
        const { container, getByTestId } = render(<NavlinkButton onClick={spy} />);
        expect(container).toBeTruthy();
        const button = getByTestId('navlink-button')
        button.click()
        expect(spy).toHaveBeenCalled()
    });
});