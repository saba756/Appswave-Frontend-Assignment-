import React from "react";
import { StepLayout } from "../../StepForm-Layout/StepForm-Layout";
import { Typography } from '@mui/material';
import Button from "@mui/material/Button";
function LaborInformation(props)  {
  const next =() =>{
    props.ChangeSteps({
      from: "panel6",
      to: "panel7",
    });
  }
  return (
    <StepLayout
      panelNo="panel5"
      heading="Labor information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      steps={props.steps}
      num="5"
    >
    <Typography variant="h6" component="h6">
    LaborInformation here
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

export default LaborInformation;