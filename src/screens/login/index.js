import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { loginValidationSchema } from "./validator";
import { jobDetailsStyles } from "../styles";
import ValidationError from "../../sharedComponents/validationError";
import firebase from "../../firebaseConfig";
import { Colors } from "../../utils/colors";

const INVALID_CREDENTIALS_MSG = "Your email and/or password is incorrect.";

export const Login = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (formVals) => {
    try {
      setErrorMessage("");
      const { email, password } = formVals;
      await firebase.auth().signInWithEmailAndPassword(email, password);
      history.push("/", formVals);
    } catch (e) {
      setErrorMessage(
        e.code === "auth/user-not-found" ? INVALID_CREDENTIALS_MSG : e.message
      );
    }
  };
  return (
    <div style={jobDetailsStyles.outerContainer}>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmit}
        initialValues={{}}
        validationSchema={loginValidationSchema}
      >
        {({ errors }) => (
          <Form style={jobDetailsStyles.formSection}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <label style={jobDetailsStyles.largerTitle}>Login</label>
            </div>
            <div style={jobDetailsStyles.inputSection}>
              <label style={jobDetailsStyles.inputDesc}>Email</label>
              <Field
                name="email"
                placeholder="johndoe@gmail.com"
                style={jobDetailsStyles.inputTextfield}
              />
              <ValidationError message={errors.email} />
            </div>
            <div style={jobDetailsStyles.inputSection}>
              <label style={jobDetailsStyles.inputDesc}>Password</label>
              <Field
                name="password"
                placeholder="Something secret"
                style={jobDetailsStyles.inputTextfield}
                type={"password"}
              />
              <ValidationError message={errors.password} />
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
                Sign in
              </button>
            </div>
            <div style={{ width: "100%", textAlign: "center", paddingTop: 20 }}>
              {errorMessage && (
                <label
                  style={{
                    marginTop: 10,
                    color: Colors.red,
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                >
                  {errorMessage}
                </label>
              )}
              <a
                style={{
                  color: Colors.blue,
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={() => history.push("/register")}
              >
                New user? Click here.
              </a>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
