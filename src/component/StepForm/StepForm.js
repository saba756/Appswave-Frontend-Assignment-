
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

  
  const handleChange = (steps) => (event, isExpanded) => {
    if(data.from === steps){
      setExpanded(isExpanded ? steps : false);
    }
  
  };

  const ChangeSteps = function (newData) {
    setData({ ...data, ...newData }); 
    setExpanded(newData.from);
  };
 
  return (
    <section>
      <Categorization handleChange={handleChange} expanded={expanded} ChangeSteps={ChangeSteps}  data={data} />
      <CompanyInformation handleChange={handleChange} expanded={expanded} ChangeSteps={ChangeSteps} data={data}  />
      <TruckInformation handleChange={handleChange} expanded={expanded}  ChangeSteps={ChangeSteps} data={data} />
      <ContainerInformation handleChange={handleChange} expanded={expanded} ChangeSteps={ChangeSteps} data={data} />
      <LaborInformation handleChange={handleChange} expanded={expanded} ChangeSteps={ChangeSteps} data={data}  />
      <LocationInformation handleChange={handleChange} expanded={expanded} ChangeSteps={ChangeSteps} data={data}  />
      <RequiredDocuments handleChange={handleChange} expanded={expanded}  ChangeSteps={ChangeSteps} data={data } />
      <DeclarationsAndCommitments
        handleChange={handleChange}
        expanded={expanded}
        data={data}
        ChangeSteps={ChangeSteps}
      />
    </section>
  );
};
export default StepForm;