import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { 
  ExtraLargeTitle,
  LargeTitle,
  Medium,
  Small,
} from '../stories/title/title.stories';

describe('Renders title component', () => {
    test('with extra-large variant', () => {
        const { container, getByTestId } = render(<ExtraLargeTitle />);
        expect(container).toBeTruthy();
        const title = getByTestId('extra-large-title')
        expect(title).toHaveStyleRule('font-size', '54px');
        // expect(title).toHaveStyleRule('font-family', "'Serial-Bold',Arial,Helvetica,sans-serif");
    });

    test('with large variant', () => {
        const { container, getByTestId } = render(<LargeTitle />);
        expect(container).toBeTruthy();
        const title = getByTestId('large-title')
        expect(title).toHaveStyleRule('font-size', '44px');
    });

    test('with medium variant', () => {
        const { container, getByTestId } = render(<Medium />);
        expect(container).toBeTruthy();
        const title = getByTestId('medium-title')
        expect(title).toHaveStyleRule('font-size', '38px');
    });
    
    test('with small variant', () => {
        const { container, getByTestId } = render(<Small />);
        expect(container).toBeTruthy();
        const title = getByTestId('small-title')
        expect(title).toHaveStyleRule('font-size', '34px');
    });

});