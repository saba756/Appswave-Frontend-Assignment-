import React from "react";
import { Typography } from "@mui/material";
import { StepLayout } from "../../StepForm-Layout/StepForm-Layout";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import mapImage from "../../../assets/map.png";
import Information from "../../icon/Information"
import Button from "@mui/material/Button";
import { Formik, Form, Field } from 'formik';


function CompanyInformation(props) {

  const [value, setValue] = React.useState(null);



  const previousButton = (event) => {
    event.preventDefault();
    props.ChangeSteps({
      from: "panel1",
      to: "panel2",
    });
  }



  return (
    <StepLayout
      panelNo="panel2"
      heading="Company information"
      handleChange={props.handleChange}
      expanded={props.expanded}
      ChangeSteps={props.ChangeSteps}
      data={props.data}
      steps={props.steps}
      num="2"
    >
      <Formik
        enableReinitialize
        validateOnChange={true}

        initialValues={{ crNumber: '' }}
        onSubmit={(data) => {
          console.log("data ", data)
          props.ChangeSteps({
            from: "panel3",
            to: "panel4",
            currentPanel: "panel2",
          });
        }}
      >
        {(errors, touched) => (
          <Form>

            <Typography variant="body1" className="categorybody" sx={{ marginLeft: 4 }}>Please Enter your company information</Typography>
            <div className="cr-number">
              <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16 }}>CR number *</Typography>
            </div>
            <div className="textFieldInput">
              <input name="crNumber" type="text" placeholder="Write something" className="input-text" required />

              <div className="info-icon">
                <Information />
              </div>

            </div>

            <Card sx={{ minWidth: 275, marginTop: 5 }}>
              <CardContent>
                <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16 }}>Company name</Typography>
                <div className="label" >

                  <label type="text" className="input-label">Nahdi Pharmacy</label>
                </div>
                {/* <Typography>Nahdi Pharmacy</Typography> */}
                <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16, marginBottom: 1 }}>Manager name</Typography>
                <div className="tag">
                  <span className="tag-element">Ahmed Emad</span>
                  <span className="tag-element">Ahmed Emad</span>
                  <span className="tag-element">Ahmed Emad</span>
                  <span className="tag-element">Ahmed Emad</span>
                </div>
                <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16, marginBottom: 1 }}>Partner name</Typography>

                <div className="tag">
                  <span className="tag-element">Ahmed Emad</span>
                  <span className="tag-element">Ahmed Emad</span>
                  <span className="tag-element">Ahmed Emad</span>
                  <span className="tag-element">Ahmed Emad</span>
                </div>
                <div>
                  <div className="cr-issue">
                    <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16 }}>CR Issue date</Typography>

                    <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16 }}>CR Expiry date</Typography>
                  </div>
                  <div className="cr-input">
                    <div className="label margin-issue" >
                      <label type="text" className="input-label">Write Something</label>
                    </div>
                    <div className="label" >
                      <label type="text" className="input-label">Write Something</label>
                    </div>
                  </div>
                  <div>

                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="license" >
              <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16 }}>Commercial License Number *</Typography>
            </div>
            <div className="textFieldInput">
              <input type="text" placeholder="Write something" className="input-text" required />
            </div>

            <Card sx={{ minWidth: 275, marginTop: 5 }}>
              <CardContent>
                <div>
                  <div className="cr-license">
                    <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16 }}>Commercial License Issue date</Typography>
                    <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16 }}>Commercial License Expiry date</Typography>
                  </div>

                  <div className="cr-input">
                    <div className="label" >
                      <label type="text" className="input-label" >Write Something</label>
                    </div>
                    <div className="label" >
                      <label type="text" className="input-label">Write Something</label>
                    </div>
                  </div>

                </div>
              </CardContent>
            </Card>
            <div className="license" >
              <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16 }}>National Waste Center License Number *</Typography>
            </div>
            <div className="textFieldInput">
              <input type="text" placeholder="Write something" name="licenseNumber" className="input-text" required />
            </div>
            <div>
              <div className="license">
                <div className="licenses-date">
                  <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16 }}>License Issue date *</Typography>
                  <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16 }}>License Expiry date *</Typography>
                </div>

                <div className="cr-input">
                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                      label={"write something"}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          name="founded"
                          {...params}
                        />
                      )}
                      required
                    />
                  </LocalizationProvider>

                  <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                      label={"write something"}
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          name="founded"
                          {...params}
                          required
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>

              </div>

            </div>
            <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16, marginTop: 4 }}>Working area*</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
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
                        label="Alaqiq"
                        color="success"
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{
                          color: '#3B5E71',
                          '&.Mui-checked': {
                            color: '#009378',
                          },
                        }} />}
                        label="Quibaa"
                        color="success"
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{
                          color: '#3B5E71',
                          '&.Mui-checked': {
                            color: '#009378',
                          },
                        }} />}
                        label="Alawali"
                        color="success"
                      />
                      <FormControlLabel
                        control={<Checkbox sx={{
                          color: '#3B5E71',
                          '&.Mui-checked': {
                            color: '#009378',
                          },
                        }} />}
                        label="Uhud"
                        color="success"
                      />
                    </FormGroup>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <img src={mapImage} />
              </Grid>
            </Grid>
            <Typography variant="h4" component="h4" sx={{ fontWeight: 700, fontSize: 16, marginTop: 0 }}>Company image</Typography>
            <Card sx={{ minWidth: 85, marginTop: 2 }} className="file-card">
              <label htmlFor="file-upload" className="custom-file-upload">
                Select file
              </label>
              <input id="file-upload" type="file" accept=".png, .jpeg" />
            </Card>
            <div className="company-info-btn">
              <Button variant="contained" color="success" className="next" type="submit"  >
                Next
              </Button>
              <div className="previous">
                <button className="previous-btn" type="button" onClick={previousButton}>Previous</button>
              </div>

            </div>

          </Form>
        )}
      </Formik>
    </StepLayout>
  );
};
export default CompanyInformation;