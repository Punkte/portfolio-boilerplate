import React from 'react';
import Title from '../atoms/Title';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useForm from '../../hooks/useForm';

const defaultValues = {
  name: "",
  subject: "",
  company: "",
  email: "",
  message: "",
}

const ContactForm = ({...props}) => {
  const {fields, handleChange, resetForm} = useForm(defaultValues);
};

ContactForm.displayName = "ContactForm";

export default ContactForm;


