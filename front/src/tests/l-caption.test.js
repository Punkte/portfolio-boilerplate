import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import LCaption from '../components/layouts/LCaption';

describe('Renders Label component', () => {
    test('with default behavior', () => {
        const { container } = render(<LCaption />);
        expect(container).toBeTruthy();
    });

    test('with links and contact infos', () => {
        const { container } = render(
            <LCaption />
        );
        expect(container).toBeTruthy();
    });
});