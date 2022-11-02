import React, {useState} from "react";
import { StepLayout } from "../../StepForm-Layout/StepForm-Layout";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import { Formik, Field, Form } from 'formik';

function Categorization(props) {
const [selectedValues, setSelectedValues] = useState('')
  return (
    <StepLayout
      panelNo="panel1"
      heading="Categorization"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      num="1"
      steps={props.steps}
      selectedValues ={selectedValues}
    >
      <Box sx={{ flexGrow: 1 }}>

        <Formik
          initialValues={{
            commercialActivities: '',
            constructionWaste: '',
            specialMedicalWaste: '',
            treatedMedicalWaste: '',
            sewageWater: '',
            transporterType: ''
          }}
          onSubmit={async (values) => {
            props.ChangeSteps({
              from: "panel2",
              to: "panel3",
              category: values,
              currentPanel: "panel1",
              values: values
            });
            console.log("values", values)
            const keys = Object.keys(values)
            var waterType = 0;
            var categoryValues =""
            keys.forEach(key => {
              console.log(values[key])
              if (values[key] != '' ){
                if (values[key] == 'commercialActivities' || 
                values[key] == 'constructionWaste' || 
                values[key] == 'sewageWater' ||
                values[key] == 'specialMedicalWaste' ||
                values[key] == 'treatedMedicalWaste')
                waterType = waterType + 1;
                else {
                  categoryValues = categoryValues + values[key]
                }
              }
            });
              
              if (waterType > 0){
                categoryValues = categoryValues + " , "+ waterType +" wastes types"
              }
              setSelectedValues(categoryValues)
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <span className="categoryheading">
                    Transporter type
                  </span>
                  <Typography variant="body1" className="categorybody" >
                    Please select your type.
                  </Typography>
                  <Card sx={{ minWidth: 275, }} className="radio-group-container">
                    <CardContent >
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Digging Contractor"
                            control={<Radio
                              sx={{
                                color: '#3B5E71',
                                '&.Mui-checked': {
                                  color: '#009378',
                                },
                              }}

                            />}
                            label="Digging Contractor"
                            className="radioLabel"
                            name="transporterType"
                            onChange={(event) => setFieldValue("transporterType", event.target.value)}

                          />
                          <Typography variant="body1" className="radioDescription">
                            Description will be here for the type.
                          </Typography>
                          <FormControlLabel
                            value="Private Transporter"
                            control={<Radio
                              sx={{
                                color: '#3B5E71',
                                '&.Mui-checked': {
                                  color: '#009378',
                                },
                              }}

                            />}
                            name="transporterType"
                            label="Private Transporter"
                            onChange={(event) => setFieldValue("transporterType", event.target.value)}
                          />
                          <Typography variant="body1" className="radioDescription">
                            Description will be here for the type.
                          </Typography>
                          <FormControlLabel
                            value="Construction and commercial waste transportation company"
                            control={<Radio
                              sx={{
                                color: '#3B5E71',
                                '&.Mui-checked': {
                                  color: '#009378',
                                },
                                lineHeight: 11

                              }}
                              onChange={(event) => setFieldValue("transporterType", event.target.value)}
                            />}
                            name="transporterType"
                            label="Construction and commercial waste transportation company"

                          />
                          <Typography variant="body1" className="radioDescription">
                            Description will be here for the type.
                          </Typography>
                        </RadioGroup>
                      </FormControl>
                    </CardContent>
                  </Card>

                  <Button variant="contained" color="success" className="next" type="submit">
                    Next
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <span className="categoryheading">
                    Waste Type
                  </span>

                  <Typography variant="body1" className="categorybody" >
                    Please select waste type.
                  </Typography>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox defaultChecked sx={{
                            color: '#3B5E71',
                            '&.Mui-checked': {
                              color: '#009378',
                            },
                          }} />}
                          label="Commercial Activities"
                          value="commercialActivities"
                          color="success"
                          name="commercialActivities"
                          onChange={(event) => setFieldValue("commercialActivities", event.target.value)}
                        />
                        <FormControlLabel
                          control={<Checkbox sx={{
                            color: '#3B5E71',
                            '&.Mui-checked': {
                              color: '#009378',
                            },
                          }} />}
                          label="Construction Waste"
                          value="constructionWaste"
                          color="success"
                          name="constructionWaste"
                          onChange={(event) => setFieldValue("constructionWaste", event.target.value)}
                        />
                        <FormControlLabel
                          control={<Checkbox sx={{
                            color: '#3B5E71',
                            '&.Mui-checked': {
                              color: '#009378',
                            },
                          }} />}
                          label="Special Medical waste"
                          value="specialMedicalWaste"
                          color="success"
                          name="specialMedicalWaste"
                          onChange={(event) => setFieldValue("specialMedicalWaste", event.target.value)}
                        />
                        <FormControlLabel
                          control={<Checkbox sx={{
                            color: '#3B5E71',
                            '&.Mui-checked': {
                              color: '#009378',
                            },
                          }} />}
                          label="Treated medical waste"
                          value="treatedMedicalWaste"
                          color="success"
                          name="treatedMedicalWaste"
                          onChange={(event) => setFieldValue("treatedMedicalWaste", event.target.value)}
                        />
                        <FormControlLabel
                          control={<Checkbox sx={{
                            color: '#3B5E71',
                            '&.Mui-checked': {
                              color: '#009378',
                            },
                          }} />}
                          label="Sewage Water"
                          value="sewageWater"
                          color="success"
                          name="sewageWater"
                          onChange={(event) => setFieldValue("sewageWater", event.target.value)}
                        />
                      </FormGroup>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

            </Form>
          )}
        </Formik>
      </Box>
    </StepLayout>
  );
};
export default Categorization;