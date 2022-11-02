import React from "react";
import { StepLayout } from "../../StepLayout";

function LocationInformation(props)  {
  return (
    <StepLayout
      panelNo="panel6"
      heading="Location information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      num="6"
    >
      
      Content Here
    </StepLayout>
  );
};
export default LocationInformation;
