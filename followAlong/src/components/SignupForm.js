import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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

const useForm = (initialValues) => {
  const [values, setValue] = useState(initialValues);

  const handleChanges = e => {
    setValue({
      firstName: e.target.value
    });
  };

  const clearForm = e => {
    e.preventDefault();
    setValue(initialValues);
  };

  return([ values, handleChanges, clearForm ]);
}

const initialValues = {
  firstName:"Warren", 
  lastName:"Chris"
}

export default function SignupForm() {
  const classes = useStyles();
  const [ values, handleChanges, clearForm ] = useForm(initialValues);
  
  const handleSubmit = e => {
    e.preventDefault();
    alert(values.firstName);
  };

  console.log(values);

  return (
    <div p={2} className="form">
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