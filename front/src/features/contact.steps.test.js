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
    let email;
    let message
    let subject
    
    beforeEach(() => {
      const { getByTestId } = render(<ContactForm onSubmit={() => spy()} />);
      getElement = getByTestId;
    });
  
    const theButtonIsDisabled = () => {
      button = getElement('button')
      expect(button.disabled).toBe(true)
    }
    const theButtonIsNotDisabled = () => {
      button = getElement('button')
      expect(button.disabled).toBe(false)
    }
    const submitClick = () => {
      button = getElement('button')
      button.click()
    }

    given(/^I'm a user attempting to send a message to Christella$/, theButtonIsDisabled)
    when(/^I type ("([^\\"]|\\")*") as name$/, (nameValue) => {
      name = getElement('name');
      fireEvent.change(name, {target : {value : nameValue}});
    })
    then(/^submit button should still be disabled$/, theButtonIsDisabled)
    
    when(/^I type ("([^\\"]|\\")*") as email$/, (emailValue) => {
      email = getElement('email');
      fireEvent.change(email, {target : {value : emailValue}});
    })
    then(/^submit button should still be disabled$/, theButtonIsDisabled)

    when(/^I click on submit button$/, submitClick)

    and(/^I type ("([^\\"]|\\")*") as subject$/, (subjectValue) => {
      subject = getElement('subject');
      fireEvent.change(subject, {target : {value : subjectValue}});
    })
    then(/^submit button should still be disabled$/, theButtonIsDisabled)

    when(/^I type ("([^\\"]|\\")*") as message$/, (messageValue) => {
      message = getElement('message');
      fireEvent.change(message, {target : {value : messageValue}});
    })
    then(/^submit button should'nt be disabled$/, theButtonIsNotDisabled)
  
  })
})