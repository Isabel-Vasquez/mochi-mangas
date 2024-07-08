// src/components/GenericForm/GenericForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './GenericForm.css';

const GenericForm = ({
  title,
  initialValues,
  validationSchema,
  onSubmit,
  fields = [],
}) => {
  return (
    <div className='container form-container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <h1 className='text-center'>{title}</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className='text-start'>
                {fields.map((field, index) => (
                  <div className='form-group' key={index}>
                    <label htmlFor={`form${field.name}`} className='form-label'>
                      {field.label}*
                    </label>
                    <Field
                      name={field.name}
                      type={field.type}
                      className='form-control'
                      id={`form${field.name}`}
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                    <ErrorMessage
                      name={field.name}
                      component='div'
                      className='text-danger'
                    />
                  </div>
                ))}
                <button
                  type='submit'
                  className='button-form-container w-100'
                  disabled={isSubmitting}
                >
                  {title.toUpperCase()}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default GenericForm;
