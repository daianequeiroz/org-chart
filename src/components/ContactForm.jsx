import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ContactForm(props) {
  const initialFieldValues = {
    id: '',
    name: '',
    phone: '',
    email: '',
    address: ''
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    setValues({ ...props.currentContact });
  }, [props.currentContact]);

  const handleInputChange = e => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <input type="hidden" name="id" value="{values.id}}" />
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input className="form-control" name="name" placeholder="Full Name" value={values.name} onChange={handleInputChange} />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>

          <input className="form-control" name="phone" placeholder="Phone" value={values.phone} onChange={handleInputChange} />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input className="form-control" name="email" placeholder="Email" value={values.email} onChange={handleInputChange} />
        </div>
      </div>
      <div className="form-group">
        {/* instead of this input use textarea - issue with my syntax highlighter */}
        <input className="form-control" name="address" placeholder="Address" value={values.address} onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <input type="submit" value={props.currentContact === {} ? 'Save' : 'Update'} className="btn btn-primary btn-block" />
      </div>
    </form>
  );
}

ContactForm.propTypes = {
  currentContact: PropTypes.object.isRequired,
  addOrEdit: PropTypes.func.isRequired
};
