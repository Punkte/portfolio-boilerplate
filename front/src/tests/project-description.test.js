import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { SNCFProjectDescription } from '../stories/project-description/project-description.stories';

describe('Renders project-description component', () => {
    test('with default', () => {
        const { container } = render(<SNCFProjectDescription />);
        expect(container).toBeTruthy();
    });
});