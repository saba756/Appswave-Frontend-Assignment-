import React from "react";
import { StepLayout } from "../../StepLayout";

function LaborInformation(props)  {
  return (
    <StepLayout
      panelNo="panel5"
      heading="Labor information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      num="5"
    >
      Content Here
    </StepLayout>
  );
};

export default LaborInformation;