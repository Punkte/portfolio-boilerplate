import React, {useState} from 'react';

// initial correspond à un objet contenant les valeurs par défaut de chaque champ du formulaire
function useForm(initial) {
  const [inputs, setInputs] = useState(initial);
  
  const handleChange = ({name, value}) => {
    // on met à jour tout le formulaire avec la nouvelle valeur du champ à modifier 
    console.log({name, value})
    setInputs({ ...inputs, [name]: value });
  };

  // pour réinitialiser le formulaire
  const resetForm = () => {
    setInputs(initial);
  };

  return {inputs, handleChange, resetForm};
};

export default useForm;