import React from "react";
import { StepLayout } from "../../StepForm-Layout/StepForm-Layout";
import { Typography } from '@mui/material';
import Button from "@mui/material/Button";
function RequiredDocuments(props)  {
  const next =() =>{
    props.ChangeSteps({
      from: "panel8",
      to: "panel9",
      currentPanel: "panel7",
    });
  }
  const previousButton =(event)=>{
    event.preventDefault();
    props.ChangeSteps({
      from: "panel7",
      to: "panel8",
    });
  }
  return (
    <StepLayout
      panelNo="panel7"
      heading="Required documents"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      num="7"
      steps={props.steps}
    >
      <Typography variant="h6" component="h6">
      RequiredDocuments here
</Typography>
<div className="company-info-btn">
      <Button variant="contained" color="success" className="next" onClick={next} >
              Next
            </Button>
            <div className="previous">
            <button className="previous-btn" type="button"    onClick={previousButton}>  Previous</button>
            </div>
          
      </div>
    </StepLayout>
  );
};
export default RequiredDocuments;