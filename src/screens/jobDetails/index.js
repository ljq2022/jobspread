import { Field, Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { jobDetailValidationSchema } from "./validator";
import ValidationError from "../../sharedComponents/validationError";
import { jobDetailsStyles } from "../styles";

const INITIAL_VALUES = {
  jobType: "NA",
  payType: "hourly",
};
export const JobDetails = () => {
  const history = useHistory();

  const handleSubmit = async (formVals) => {
    history.push("/description", formVals);
  };

  return (
    <div style={jobDetailsStyles.outerContainer}>
      <label style={jobDetailsStyles.largerTitle}>Job Details</label>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
        initialValues={INITIAL_VALUES}
        validationSchema={jobDetailValidationSchema}
      >
        {({ errors }) => (
          <Form style={jobDetailsStyles.formSection}>
            <div style={jobDetailsStyles.inputSection}>
              <label style={jobDetailsStyles.inputDesc}>Job Title</label>
              <Field
                name="title"
                placeholder="Cashier"
                style={jobDetailsStyles.inputTextfield}
              />
              <ValidationError message={errors.title} />
            </div>
            <label style={jobDetailsStyles.inputDesc}>Job Location</label>
            <div style={jobDetailsStyles.inputSection}>
              <Field
                name="location"
                placeholder="1234 ABC Street"
                style={jobDetailsStyles.inputTextfield}
              />
              <ValidationError message={errors.location} />
            </div>
            <div style={jobDetailsStyles.checkBoxContainer}>
              <div
                style={{
                  marginRight: 30,
                }}
              >
                <label style={jobDetailsStyles.inputDesc}>
                  Job Type (optional)
                </label>
                <div style={{ marginTop: 11 }}>
                  <Field
                    style={jobDetailsStyles.inputTextfield}
                    as="select"
                    name="jobType"
                  >
                    <option value="NA">N/A</option>
                    <option value="fullTime">Full Time</option>
                    <option value="partTime">Part Time</option>
                    <option value="commission">Commission</option>
                  </Field>
                </div>
              </div>
              <div>
                <label style={jobDetailsStyles.inputDesc}>
                  Shift Schedule (optional)
                </label>
                <div>
                  <Field
                    type="checkbox"
                    name="day"
                    style={jobDetailsStyles.checkBox}
                  />
                  <label
                    style={{
                      ...jobDetailsStyles.inputTextfield,
                      border: "none",
                      paddingLeft: 0,
                      marginRight: 10,
                    }}
                  >
                    Day
                  </label>
                  <Field
                    type="checkbox"
                    name="night"
                    style={jobDetailsStyles.checkBox}
                  />
                  <label
                    style={{
                      ...jobDetailsStyles.inputTextfield,
                      border: "none",
                      paddingLeft: 0,
                      marginRight: 10,
                    }}
                  >
                    Night
                  </label>
                  <Field
                    type="checkbox"
                    name="flexible"
                    style={jobDetailsStyles.checkBox}
                  />
                  <label
                    style={{
                      ...jobDetailsStyles.inputTextfield,
                      border: "none",
                      paddingLeft: 0,
                      marginRight: 10,
                    }}
                  >
                    Flexible
                  </label>
                </div>
              </div>
            </div>
            <div style={jobDetailsStyles.inputSection}>
              <label style={jobDetailsStyles.inputDesc}>
                Compensation (optional)
              </label>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ marginRight: 5, marginTop: 8 }}>$</div>
                <Field
                  name="salaryLowerBound"
                  placeholder="15"
                  style={{
                    ...jobDetailsStyles.inputTextfield,
                    width: 100,
                    marginRight: 10,
                  }}
                />
                <div style={{ marginLeft: 5, marginRight: 15, marginTop: 8 }}>
                  to
                </div>
                <div style={{ marginRight: 5, marginTop: 8 }}>$</div>
                <Field
                  name="salaryUpperBound"
                  placeholder="17"
                  style={{
                    ...jobDetailsStyles.inputTextfield,
                    width: 100,
                    marginRight: 10,
                  }}
                />
                <div style={{ marginTop: 3, marginLeft: 8 }}>
                  <Field
                    style={jobDetailsStyles.inputTextfield}
                    as="select"
                    name="payType"
                  >
                    <option value="hourly">Hourly</option>
                    <option value="salary">Salary</option>
                  </Field>
                </div>
              </div>
              <ValidationError
                message={errors.salaryLowerBound || errors.salaryUpperBound}
              />
            </div>
            <div style={{ width: "100%" }}>
              <button
                style={{
                  ...jobDetailsStyles.nextStepButton,
                  position: "relative",
                  left: "32%",
                }}
                type="submit"
              >
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
