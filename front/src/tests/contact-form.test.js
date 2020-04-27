import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { ContactForm } from '../stories/contact-form/contact-form.stories';

describe('Renders normal', () => {
    test('with default behavior', () => {
        const { container } = render(<ContactForm />);
        expect(container).toBeTruthy();
    });
});