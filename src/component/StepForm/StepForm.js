
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Categorization from '../Steps/Categorization/Categorization'
import CompanyInformation from '../Steps/Company-Information/CompanyInformation'
import ContainerInformation from '../Steps/Container-Information/ContainerInformation'
import DeclarationsAndCommitments from '../Steps/DeclarationsAndCommitments/DeclarationsAndCommitments'
import LaborInformation from '../Steps/Labor-Information/LaborInformation'
import LocationInformation from '../Steps/Location-Information/Location-Information'
import TruckInformation from '../Steps/Truck-Information/Truck-Information'
import RequiredDocuments from '../Steps/Required-Documents/RequiredDocuments'
export const StepForm = function () {
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState({
    from: "panel1",
    to: "panel2",
    Step1: {},
    Step2: {},
  });

  const [steps, setSteps] = React.useState({
    
    "panel1": false, "panel2": false, "panel3": false,
    "panel4": false, "panel5": false, "panel6": false, "panel7": false, "panel8": false
  
})
  
  const handleChange = (step) => (event, isExpanded) => {
    if(data.from === step){
      setExpanded(isExpanded ? step : false);
    }
  };

  const ChangeSteps = function (newData) {

    console.log("neew",newData)
    setData({ ...data, ...newData }); 
    setExpanded(newData.from);
    if(steps[newData.currentPanel] === false){
      steps[newData.currentPanel] = true
      setSteps({...steps})
    }
  };
 
  return (
    <section>
      <Categorization handleChange={handleChange} expanded={expanded} ChangeSteps={ChangeSteps}  data={data} steps={steps} />
      <CompanyInformation handleChange={handleChange} expanded={expanded} ChangeSteps={ChangeSteps} data={data} steps={steps}  />
      <TruckInformation handleChange={handleChange} expanded={expanded}  ChangeSteps={ChangeSteps} data={data}  steps={steps}/>
      <ContainerInformation handleChange={handleChange} expanded={expanded} ChangeSteps={ChangeSteps} data={data} steps={steps} />
      <LaborInformation handleChange={handleChange} expanded={expanded} ChangeSteps={ChangeSteps} data={data} steps={steps}  />
      <LocationInformation handleChange={handleChange} expanded={expanded} ChangeSteps={ChangeSteps} data={data} steps={steps}  />
      <RequiredDocuments handleChange={handleChange} expanded={expanded}  ChangeSteps={ChangeSteps} data={data } steps={steps}/>
      <DeclarationsAndCommitments
        handleChange={handleChange}
        expanded={expanded}
        data={data}
        ChangeSteps={ChangeSteps}
        steps={steps}
      />
    </section>
  );
};
export default StepForm;