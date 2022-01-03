import React, { CSSProperties } from "react";
import { Colors } from "../utils/colors";

const ValidationError = ({ message }) => {
  if (!message) {
    return null;
  }
  return <label style={styles.errorText}>{message}</label>;
};

const styles = {
  errorText: {
    marginTop: 10,
    color: Colors.red,
    fontSize: 14,
    fontWeight: 600,
  },
};

export default ValidationError;
