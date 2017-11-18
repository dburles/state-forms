export const onChangeHandler = props => event => {
  const target = event.currentTarget;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;
  if (!name) {
    throw Error('Field must have a name attribute!');
  }
  props.setFormData(state => ({ ...state, [name]: value }));
};

export const mapFormData = ({ state, set }) => ({
  formData: state,
  setFormData: set,
});

export const mapValidationErrors = ({ state, set }) => ({
  errors: state,
  setValidationErrors: set,
});

export const mapError = ({ state, set }) => ({
  error: state,
  setError: set,
});

export const mapIsSubmitting = ({ state, set }) => ({
  isSubmitting: state,
  setIsSubmitting: set,
});
