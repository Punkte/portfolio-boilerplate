import React, {useEffect, useState} from 'react';
import Title from '../atoms/Title';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Field from '../molecules/Field';
import useForm from '../../hooks/useForm';
import Button from '../molecules/Button';

const StyledContainer = styled.div``;

const StyledMessageContainer = styled.div`
  grid-column: 1/3;
`;

const StyledFormContainer = styled.div`
  margin-top: 95px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 68px);
  grid-column-gap: 50px;
  grid-row-gap: 50px; 
`;

const StyledButtonContainer = styled.div`
  max-width: 100px;
`;

const defaultValues = {
  name: "",
  subject: "",
  company: "",
  email: "",
  message: "",
}

const ContactForm = ({title, onSubmit}) => {
  const {inputs, handleChange, resetForm} = useForm(defaultValues);
  const { name, subject, email, message } = inputs 
  const [validForm, setValidForm] = useState(false)
  useEffect(() => {
    if(!!name && !!subject && !!email && !!message) {
      setValidForm(true)
    }
  }, [name, subject, email, message])
  return (
    <StyledContainer>
      <Title size="small">{title}</Title>
      <StyledFormContainer>
        <Field 
          label="Nom et Prénom" 
          placeholder="Votre nom" 
          value={inputs.name}
          onChange={e => handleChange({name: "name", value: e.target.value})}
          data-testid="name"
        /> 
        <Field 
          label="Sujet" 
          placeholder="Votre sujet" 
          value={inputs.subject}
          onChange={e => handleChange({name: "subject", value: e.target.value})}
          data-testid="subject"
        />
        <Field 
          label="Entreprise" 
          placeholder="Votre entreprise" 
          value={inputs.company}
          onChange={e => handleChange({name: "company", value: e.target.value})}
          data-testid="company"
        />
        <Field 
          label="Email" 
          placeholder="Votre email" 
          value={inputs.email}
          onChange={e => handleChange({name: "email", value: e.target.value})}
          data-testid="email"
        />
        <StyledMessageContainer>
          <Field 
            label="Message" 
            placeholder="Votre message" 
            value={inputs.message}
            onChange={e => handleChange({name: "message", value: e.target.value})}
            as="textarea"
            data-testid="message"
          />
        </StyledMessageContainer>
      </StyledFormContainer>
      <StyledButtonContainer>
        <Button onClick={onSubmit} disabled={!validForm} data-testid="button">Valider</Button>
      </StyledButtonContainer>
    </StyledContainer>
  )
};

ContactForm.displayName = "ContactForm";

ContactForm.propTypes = {
  title: PropTypes.string,
}

export default ContactForm;

