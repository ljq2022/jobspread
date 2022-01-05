import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { jobDetailsStyles } from "../styles";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { convertToHTML } from "draft-convert";
import firebase from "../../firebaseConfig";

export const JobDescription = () => {
  const history = useHistory();
  const location = useLocation();
  const [description, setDescription] = useState(EditorState.createEmpty());
  const handleSubmit = () => {
    const state = location.state;
    const htmlString = String(convertToHTML(description.getCurrentContent()));
    history.push("/questions", {
      description: htmlString,
      ...state,
    });
  };

  useEffect(() => {
    const user = firebase.auth().currentUser;
    if (!user) {
      history.push("/login");
    }
  }, []);

  return (
    <div style={{ ...jobDetailsStyles.outerContainer, paddingLeft: 5 }}>
      <label style={jobDetailsStyles.largerTitle}>Job Description</label>
      <div
        style={{
          boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
          height: 500,
        }}
      >
        <Editor
          editorState={description}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={setDescription}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          onClick={handleSubmit}
          style={jobDetailsStyles.nextStepButton}
          type="submit"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
