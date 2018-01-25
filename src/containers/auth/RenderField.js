import React from 'react';
import TextField from 'material-ui/TextField';

const renderField = ({ input, placeholder, type, meta: { touched, error, warning } }) => (
  <div className="form-group-md">
  <TextField
        hintText={placeholder}
        floatingLabelText={placeholder}
        floatingLabelFixed={true}
        type={type}
        name={type}
        {...input}
        errorText={touched && error}
        errorStyle={{color: 'orange'}}
      />
  </div>
);

export default renderField;
