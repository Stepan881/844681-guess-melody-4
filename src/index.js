import React from "react";
import ReactDOM from "react-dom";

import questions from "./mocks/questions.js";

import App from "./components/app/app.jsx";

const Settings = {
  ERRORS_COUNT: 3
};

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
