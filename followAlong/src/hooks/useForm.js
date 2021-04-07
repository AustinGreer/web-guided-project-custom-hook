import {useState} from 'react';
import useLocalStorage from './useLocalStorage';

const useForm = (initialValues) => {
    const [values, setValue] = useState(initialValues);
  
    const handleChanges = e => {
      setValue({
        ...values,
        [e.target.name]: e.target.value
      });
    };
  
    const clearForm = e => {
      e.preventDefault();
      setValue(initialValues);
    };
  
    return([ values, handleChanges, clearForm ]);
}

export default useForm;