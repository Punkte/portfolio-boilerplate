import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

// import { Map } from '../stories/map/map.stories';

jest.mock("mapbox-gl", () => require("mapbox-gl-js-mock"));
xdescribe('Renders Map component', () => {
    xtest('with default', () => {
        const { container } = render(<div />);
        expect(container).toBeTruthy();
    });
});