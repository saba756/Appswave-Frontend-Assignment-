import React from "react";
import { StepLayout } from "../../StepForm-Layout/StepForm-Layout";
import { Typography } from '@mui/material';
import Button from "@mui/material/Button";
function TruckInformation(props)  {
  const next =() =>{
    props.ChangeSteps({
      from: "panel4",
      to: "panel5",
      currentPanel: "panel3",
    });
  }
  const previousButton =(event)=>{
    event.preventDefault();
    props.ChangeSteps({
      from: "panel2",
      to: "panel3",
    });
  }
  return (
    <StepLayout
      panelNo="panel3"
      heading="Truck information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      num="3"
      steps={props.steps}
    >
    <Typography variant="h6" component="h6">
    TruckInformation here
</Typography>
<div className="company-info-btn">
      <Button variant="contained" color="success" className="next" onClick={next} >
              Next
            </Button>
            <div className="previous">
            <button className="previous-btn" type="button" onClick={previousButton}>  Previous</button>
            </div>
          
      </div>
    </StepLayout>
  );
};
export default TruckInformation;