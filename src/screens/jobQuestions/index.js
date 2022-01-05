import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { jobDetailsStyles } from "../styles";
import { Formik, Field } from "formik";
import { Form } from "react-formik-ui";
import { AIRTABLE_API_URL, config } from "../../utils/axios";
import { validate } from "./validator";
import axios from "axios";
import ValidationError from "../../sharedComponents/validationError";
import Swal from "sweetalert2";

export const JobQuestions = () => {
  const history = useHistory();
  const location = useLocation();
  const handleSubmit = async (formVals) => {
    const state = location.state;
    const bodyParameters = { records: [{ fields: { ...state, ...formVals } }] };
    await axios.post(AIRTABLE_API_URL, bodyParameters, config);
    Swal.fire({
      title: "Success",
      text: "Your job has been posted to 10+ job boards. We will email and text you about new candidate applications.",
      icon: "success",
      confirmButtonText: "Home",
      preConfirm: () => {
        history.push("/");
      },
    });
  };
  return (
    <div
      style={{
        ...jobDetailsStyles.outerContainer,
        paddingLeft: 5,
      }}
    >
      <label style={jobDetailsStyles.largerTitle}>Job Questions</label>
      <div>
        <Formik
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={handleSubmit}
          initialValues={{}}
          validate={validate}
        >
          {({ errors }) => (
            <Form style={jobDetailsStyles.formSection}>
              <table style={{ width: 600 }}>
                <thead style={{ textAlign: "center" }}>
                  <th>Active</th>
                  <th>Required</th>
                  <th>Field</th>
                </thead>
                <tbody style={{ textAlign: "center" }}>
                  <tr>
                    <td>
                      <Field type="checkbox" name="resumeActiveStatus" />
                    </td>
                    <td>
                      <Field type="checkbox" name="resumeRequiredStatus" />
                    </td>
                    <td>Attach Resume</td>
                  </tr>
                  <tr>
                    <td>
                      <Field type="checkbox" name="coverLetterActiveStatus" />
                    </td>
                    <td>
                      <Field type="checkbox" name="coverLetterRequiredStatus" />
                    </td>
                    <td>Attach Cover Letter</td>
                  </tr>
                  <tr>
                    <td>
                      <Field type="checkbox" name="phoneActiveStatus" />
                    </td>
                    <td>
                      <Field type="checkbox" name="phoneRequiredStatus" />
                    </td>
                    <td>Phone</td>
                  </tr>
                  <tr>
                    <td>
                      <Field type="checkbox" name="addressActiveStatus" />
                    </td>
                    <td>
                      <Field type="checkbox" name="addressRequiredStatus" />
                    </td>
                    <td>Address</td>
                  </tr>
                  <tr>
                    <td>
                      <Field type="checkbox" name="educationActiveStatus" />
                    </td>
                    <td>
                      <Field type="checkbox" name="educationRequiredStatus" />
                    </td>
                    <td>Highest Level of Education</td>
                  </tr>
                  <tr>
                    <td>
                      <Field type="checkbox" name="employmentActiveStatus" />
                    </td>
                    <td>
                      <Field type="checkbox" name="employmentRequiredStatus" />
                    </td>
                    <td>Employment Eligibility</td>
                  </tr>
                  <tr>
                    <td>
                      <Field type="checkbox" name="locationActiveStatus" />
                    </td>
                    <td>
                      <Field type="checkbox" name="locationRequiredStatus" />
                    </td>
                    <td>Lives Within 100 miles of work</td>
                  </tr>
                </tbody>
              </table>
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
              <div
                style={{ width: "100%", textAlign: "center", paddingTop: 20 }}
              >
                <ValidationError
                  message={
                    errors.resumeActiveStatus ||
                    errors.coverLetterActiveStatus ||
                    errors.phoneActiveStatus ||
                    errors.addressActiveStatus ||
                    errors.educationActiveStatus ||
                    errors.employmentActiveStatus ||
                    errors.locationActiveStatus
                  }
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
