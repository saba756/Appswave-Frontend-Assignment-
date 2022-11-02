import React from "react";
import { StepLayout } from "../../StepLayout";

function RequiredDocuments(props)  {
  return (
    <StepLayout
      panelNo="panel7"
      heading="Required documents"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      num="7"
    >
      Content Here
    </StepLayout>
  );
};
export default RequiredDocuments;