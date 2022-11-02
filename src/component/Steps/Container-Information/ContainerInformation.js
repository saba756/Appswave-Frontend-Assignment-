import React from "react";
import { StepLayout } from "../../StepForm-Layout/StepForm-Layout";
import { Typography } from '@mui/material';
import Button from "@mui/material/Button";

function ContainerInformation(props)  {
  const next =() =>{
    props.ChangeSteps({
      from: "panel5",
      to: "panel6",
    });
  }
  return (
    <StepLayout
      panelNo="panel4"
      heading="Container information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      steps={props.steps}
      num="4"
    >
        <Typography variant="h6" component="h6">
        ContainerInformation here
</Typography>
<div className="company-info-btn">
      <Button variant="contained" color="success" className="next" onClick={next} >
              Next
            </Button>
            <div className="previous">
            <button className="previous-btn">  Previous</button>
            </div>
          
      </div>
    </StepLayout>
  );
};

export default ContainerInformation;