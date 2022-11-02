import React from "react";
import { StepLayout } from "../../StepForm-Layout/StepForm-Layout";
import { Typography } from '@mui/material';
import Button from "@mui/material/Button";
function DeclarationsAndCommitments(props)  {

  const previousButton =(event)=>{
    event.preventDefault();
    props.ChangeSteps({
      from: "panel7",
      to: "panel8",
    });
  }
  return (
    <StepLayout
      panelNo="panel8"
      heading="Declarations and Commitments"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      steps={props.steps}
      num="8"
    >
      <Typography variant="h6" component="h6">
      DeclarationsAndCommitments
</Typography>
<div className="company-info-btn">
      {/* <Button variant="contained" color="success" className="next" onClick={next} >
              Next
            </Button> */}
            <div className="previous">
            <button className="previous-btn" type="button"    onClick={previousButton}>  Previous</button>
            </div>
          
      </div>
    </StepLayout>
  );
};
export default DeclarationsAndCommitments;