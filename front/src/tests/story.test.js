import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { Story as StoryComp } from '../stories/story/story.stories.js';

describe('Renders Story component', () => {
    test('with default', () => {
        const { container } = render(<StoryComp text="coucou"/>);
        expect(container).toBeTruthy();
    });
});