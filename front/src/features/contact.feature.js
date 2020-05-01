import { defineFeature, loadFeature } from 'jest-cucumber'
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ContactForm from '../components/organisms/ContactForm'

const contactFeature = loadFeature('./src/features/contact.feature')

defineFeature(contactFeature, test => {
  test('User sending email', ({ given, then, when, and }) => {
    let getElement;
    let button;
    let name;
    let password;

    beforeEach(() => {
      const { getByTestId } = render(<ContactForm />);
      getElement = getByTestId;
    });

    given(/^I'm a user attempting to send a message to Christella$/, () => {
      button = getElement('button')
      expect(button.disabled).toBe(true)
    })

    
  })
})