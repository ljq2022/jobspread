import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { JobDetails } from "./screens/jobDetails";
import { JobDescription } from "./screens/jobDescription";
import { JobQuestions } from "./screens/jobQuestions";
import { Login } from "./screens/login";
import { Register } from "./screens/register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={JobDetails} />
        <Route exact path="/description" component={JobDescription} />
        <Route exact path="/questions" component={JobQuestions} />
      </Switch>
    </Router>
  );
}

export default App;
