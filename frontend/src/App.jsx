import React, { useState } from "react";
import SurveyForm from "./survey/SurveyForm";
import AfterForm from "./shared/components/AfterForm";
import "./App.scss";

const STATUS = {
  SUCCESS: 201,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

function App() {
  const [status, setStatus] = useState();

  if (Object.values(STATUS).includes(status?.code))
    return (
      <AfterForm message={{ title: status.title, detail: status.detail }} />
    );

  return (
    <div className="app">
      <SurveyForm setStatus={setStatus} />
    </div>
  );
}

export default App;
