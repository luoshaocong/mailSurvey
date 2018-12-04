import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview =({ onCancel ,formValues,submitSurvey,history}) => {
      //es6 destructure  formFields ->{name,label}
  const reviewFields =_.map(formFields, ({name,label})=> {
    return(
        <div key={name}>
          <label>{label}</label>
          <div>
            {formValues[name]}
          </div>
        </div>



    );
  });
  return (
    <div>
      <h5> hello</h5>
      <div>
      {reviewFields}
      </div>
      <button className="yellow arken-3 white-text btn-falt" onClick={onCancel}>
        back
      </button>
      <button   //submitSurvey after click the button
        onClick={() => submitSurvey(formValues,history)}
        className="green btn-falt right white-text">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};
function mapStateToProps(state) {
 return {formValues: state.form.surveyForm.values};

}
export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));
