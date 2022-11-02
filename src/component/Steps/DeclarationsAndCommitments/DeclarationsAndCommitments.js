import React from "react";
import { StepLayout } from "../../StepForm-Layout/StepForm-Layout";

function DeclarationsAndCommitments(props)  {
  return (
    <StepLayout
      panelNo="panel8"
      heading="Declarations and Commitments"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      num="8"
    >
      Content Here
    </StepLayout>
  );
};
export default DeclarationsAndCommitments;