import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import LWorks from '../components/layouts/LWorks';

describe('Renders Label component', () => {
    test('with default behavior', () => {
        const { container } = render(<LWorks />);
        expect(container).toBeTruthy();
    });

    test('with links and contact infos', () => {
        const { container } = render(
            <LWorks />
        );
        expect(container).toBeTruthy();
    });
});