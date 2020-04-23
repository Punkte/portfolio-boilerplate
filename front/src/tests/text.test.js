import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import { 
  ExtraLargeText,
  LargeText,
  MediumText,
  SmallText,
  ExtraSmallText
} from '../stories/text/text.stories';

describe('Renders text component', () => {
    test('with extra-large variant', () => {
        const { container, getByTestId } = render(<ExtraLargeText />);
        expect(container).toBeTruthy();
        const text = getByTestId('extra-large-text')
        expect(text).toHaveStyleRule('font-size', '38px');
    });

    test('with large variant', () => {
        const { container, getByTestId } = render(<LargeText />);
        expect(container).toBeTruthy();
        const text = getByTestId('large-text')
        expect(text).toHaveStyleRule('font-size', '22px');
    });

    test('with medium variant', () => {
        const { container, getByTestId } = render(<MediumText />);
        expect(container).toBeTruthy();
        const text = getByTestId('medium-text')
        expect(text).toHaveStyleRule('font-size', '20px');
    });
    
    test('with small variant', () => {
        const { container, getByTestId } = render(<SmallText />);
        expect(container).toBeTruthy();
        const text = getByTestId('small-text')
        expect(text).toHaveStyleRule('font-size', '18px');
    });

    test('with extra-small variant', () => {
        const { container, getByTestId } = render(<ExtraSmallText />);
        expect(container).toBeTruthy();
        const text = getByTestId('extra-small-text')
        expect(text).toHaveStyleRule('font-size', '16px');
    });
});