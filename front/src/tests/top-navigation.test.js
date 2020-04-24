import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { TopNavigation } from '../stories/top-navigation/top-navigation.stories';

describe('Renders TopNavigation component', () => {
    test('with default', () => {
        const { container } = render(<TopNavigation />);
        expect(container).toBeTruthy();
    });
});