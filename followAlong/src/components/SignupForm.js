import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import useForm from './../hooks/useForm';
import Button from "../theme/Button";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));



const initialValues = {
  firstName:"", 
  lastName:"",
  email: ""
}


const useLocalStorage = (key, initialValue) => {
  //  When we create state, check to see if that value is in localStorage
  //  If it does, put that into our state value
  //  If it does not, put our initialValue into state AND localStorage
  //  When we update our state, save that update to localStorage

  // const [ value, setValue ] = useState(initialValue);

  const [ value, setValue ] = useState(()=> {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }

    window.localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });

  const setLocalStorageValue = value => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setValue(value);
  }

  return [value, setLocalStorageValue];
}

export default function SignupForm() {
  const classes = useStyles();
  const [ name, setName ] = useLocalStorage("name", "Warren");

  const [ values, handleChanges, clearForm ] = useForm(initialValues);
  
  const handleSubmit = e => {
    e.preventDefault();
    alert(`${values.firstName} ${values.lastName} ${values.email}`);
  };

  return (
    <div p={2} className="form">
      <p>{name}</p>
      <button onClick={()=>{
        setName("Chris");
      }}>Click me</button>
      <hr/>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="First Name"
            className={classes.textField}
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-name"
            label="Last Name"
            className={classes.textField}
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="outlined-name"
            label="Email"
            className={classes.textField}
            name="email"
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />

          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}