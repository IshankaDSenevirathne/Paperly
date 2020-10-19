import React from "react";

import Steps from "./Steps";

export default function CustomSurvey(props) {
  const { papersList, subject } = props;

  return (
    <div>
      <div className="content">
        <div style={{ paddingTop: "50px" }}>
          <Steps papersList={papersList} subject={subject} />
        </div>
      </div>
    </div>
  );
}
