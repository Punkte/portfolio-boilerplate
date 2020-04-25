import React from 'react';
import { render } from '@testing-library/react';
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';

import { Footer } from '../stories/footer/footer.stories';

describe('Renders Label component', () => {
    test('with default behavior', () => {
        const { container } = render(<Footer />);
        expect(container).toBeTruthy();
    });

    test('with links and contact infos', () => {
        const { container } = render(
            <Footer 
                email="christella.levieux@icloud.com" 
                phone="+33 6 98 92 84 01"
                links={[
                    {label: "Linkedin", href: "https://www.linkedin.com/in/christella-levieux/"},
                    {label: "Twitter", href: "https://twitter.com/christella_kl"},
                ]}
            />
        );
        expect(container).toBeTruthy();
    });
});