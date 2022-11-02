import React from "react";
import { StepLayout } from "../../StepForm-Layout/StepForm-Layout";
import { Typography } from '@mui/material';
import Button from "@mui/material/Button";
function LocationInformation(props)  {
  const next =() =>{
    props.ChangeSteps({
      from: "panel7",
      to: "panel8",
      currentPanel: "panel6",
    });
  }
  const previousButton =(event)=>{
    event.preventDefault();
    props.ChangeSteps({
      from: "panel5",
      to: "panel6",
    });
  }
  return (
    <StepLayout
      panelNo="panel6"
      heading="Location information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      num="6"
      steps={props.steps}
    >
      
      <Typography variant="h6" component="h6">
      LocationInformation here
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
export default LocationInformation;
