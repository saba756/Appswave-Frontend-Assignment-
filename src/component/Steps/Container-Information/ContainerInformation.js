import React from "react";
import { StepLayout } from "../../StepLayout";

function ContainerInformation(props)  {
  return (
    <StepLayout
      panelNo="panel4"
      heading="Container information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      num="4"
    >
      Content Here
    </StepLayout>
  );
};

export default ContainerInformation;