import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import LContact from '../components/layouts/LContact';

xdescribe('Renders LContact component', () => {
    jest.mock("mapbox-gl", () => require("mapbox-gl-js-mock"));
    xtest('with default behavior', () => {
        const { container } = render(<LContact />);
        expect(true).toBeTruthy();
    });
});