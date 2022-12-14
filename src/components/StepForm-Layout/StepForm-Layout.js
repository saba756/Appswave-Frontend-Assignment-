import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SuccessIcon from '../icon/Success'
export const StepLayout = function (props) {

  return (
    <Accordion
      disableGutters={true}
      expanded={props.expanded === props.panelNo}
      onChange={props.handleChange(props.panelNo)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={props.panelNo + "bh-content"}
        id={props.panelNo + "bh-header"}

      >

        <div className={props.steps[props.panelNo] ? {} : (props.expanded == props.panelNo ? 'numberActive' : 'numberCircle')}>
          {
            props.steps[props.panelNo] ? <SuccessIcon /> : props.num
          }
        </div>

        <Typography sx={{ width: "33%", flexShrink: 0 }} className={props.steps[props.panelNo] ? 'selected-heading' : ''}>
          {props.heading}
        </Typography>
        <p className="selectedValue">{props.selectedValues}</p>
      </AccordionSummary>
      <AccordionDetails>{props.children}</AccordionDetails>
    </Accordion>
  );
};
