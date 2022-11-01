import React from "react";
import { Typography } from "@mui/material";
import { StepLayout } from "../../StepLayout";
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
export const CompanyInformation = function (props) {
  const [value, setValue] = React.useState(null);
  return (
    <StepLayout
      panelNo="panel2"
      heading="Company information"
      handleChange={props.handleChange}
      expanded={props.expanded}
    >
      <Typography variant="body1"  className="categorybody" sx={{marginLeft:4}}>Please Enter your company information</Typography>
      <div className="cr-number">
        <Typography  variant="h4" component="h4" sx={{fontWeight:700,fontSize:16}}>CR number *</Typography>
      </div>
      <div className="textFieldInput">
        <input type="text" placeholder="Write something"  className="input-text"/>
     <div class="info-icon">
     <Information/>
     </div>
 
      </div>
      {/* <TextField
        hiddenLabel
        id="outlined-basic"  variant="outlined"
        placeholder="Write something"
  
        // sx={{height: }}
      /> */}
      <Card sx={{ minWidth: 275, marginTop: 5 }}>
        <CardContent>
          <Typography variant="h4" component="h4" sx={{fontWeight:700,fontSize:16}}>Company name</Typography>
          <div className="label" >

        <label type="text"  className="input-label">Nahdi Pharmacy</label>
        </div>
          {/* <Typography>Nahdi Pharmacy</Typography> */}
          <Typography variant="h4" component="h4" sx={{fontWeight:700,fontSize:16}}>Manager name</Typography>
          <div>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
          </div>
          <Typography>Partner name</Typography>

          <div>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
            <span>Ahmed Emad</span>
          </div>
          <div>
            <div>
              <Typography>CR Issue date</Typography>
              <TextField
                id="standard-basic"
                placeholder="Write Something"
                variant="standard"
              />
            </div>
            <div>
              <Typography>CR Expiry date</Typography>
              <TextField
                id="standard-basic"
                placeholder="Write Something"
                variant="standard"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <div>
        <Typography>Commercial License Number *</Typography>
      </div>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        placeholder="write numbers"
      />
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div>
            <div>
              <Typography>Commercial License Issue date</Typography>
              <TextField
                id="standard-basic"
                placeholder="Write Something"
                variant="standard"
              />
            </div>
            <div>
              <Typography>Commercial License Expiry date</Typography>
              <TextField
                id="standard-basic"
                placeholder="Write Something"
                variant="standard"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <div>
        <Typography>National Waste Center License Number *</Typography>
      </div>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        placeholder="write numbers"
      />
      <div>
        <div>
          <Typography>License Issue date *</Typography>

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
                  // error={!!errors.founded}
                  // helperText={
                  //   errors.founded &&
                  //   String(messages["addBusiness.form.founderDate"])
                  // }
                />
              )}
            />
          </LocalizationProvider>
        </div>
        <div>
          <Typography>License Expiry date *</Typography>
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
                  // error={!!errors.founded}
                  // helperText={
                  //   errors.founded &&
                  //   String(messages["addBusiness.form.founderDate"])
                  // }
                />
              )}
            />
          </LocalizationProvider>
        </div>
      </div>
      <Typography>Working area*</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Alaqiq"
                  color="success"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Quibaa"
                  color="success"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Alawali"
                  color="success"
                />
                <FormControlLabel
                  control={<Checkbox />}
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
      <Typography>Company image</Typography>
      <Card>
        <input type="file" />
      </Card>
      <button>Next</button>
      <button className="rating-button">Previous</button>
    </StepLayout>
  );
};