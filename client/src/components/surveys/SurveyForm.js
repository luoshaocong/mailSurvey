import _ from 'lodash';
import React, { Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import { Link } from'react-router-dom';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';
class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({label, name}) =>{
      return (
        <Field
        key={name}
        label={label}
        type="text"
        name={name}
        component={SurveyField}/>
      );

    });

  }
  render () {
    return (
      <div>
      <form
        onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
      >
        {this.renderFields()}
        <Link to="/surveys" className="red btn-flat left white-text">
          Cancel
        </Link>
        <button type="submit" className="teal btn-falt right white-text">
        Next
        <i className="material-icons right">done</i>
        </button>

       </form>
      </div>

    );
  }
}

function validate (values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields,({ name }) =>{
    if(!values[name]) {
      errors[name] ='you must provide a value';
    }
  });

  return errors;

}
export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount:false
})(SurveyForm);
//<Field type="text" name="surveyTitle" component="input" />