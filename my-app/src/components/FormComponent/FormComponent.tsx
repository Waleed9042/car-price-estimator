import React from "react";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import "../FormComponent/formComponent.css";
import { Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { getEstimateCost } from "../../utils/estimationUtil";

export interface Props {
  handleViewChange: (value: any) => void;
  cost: number;
  setCost: (value: any) => void;
}

const FormComponent: React.FC<Props> = (props) => {
  const [series, setSeries] = React.useState("");
  const [color, setColor] = React.useState("");
  const [type, setType] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleSeriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeries((event.target as HTMLInputElement).value);
    setError(false);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor((event.target as HTMLInputElement).value);
    setError(false);
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType((event.target as HTMLInputElement).value);
    setError(false);
  };

  const handlePostalCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPostalCode((event.target as HTMLInputElement).value);
    setError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    var patt = /^[a-zA-z0-9]{4}-[a-zA-Z0-9]{4}$/g;
    if (series === "" || color === "" || type === "" || postalCode === "") {
      alert("all the form fields are mandotary");
      return;
    }
    if (patt.test(postalCode) === false) {
      alert("postal code should follow this mask XXXX-XXXX");
      return;
    }
    const estimatedCost = getEstimateCost(series, color, type, postalCode);
    if (estimatedCost) {
      props.setCost(estimatedCost);
      props.handleViewChange(true);
    }
  };

  const WhiteRadio = withStyles({
    root: {
      color: "#ffffff",
      "&$checked": {
        color: "fb055a",
      },
    },
    checked: {},
  })((props: RadioProps) => <Radio color='default' {...props} />);

  return (
    <form onSubmit={handleSubmit} className='formContainer'>
      <FormControl component='fieldset' error={error}>
        <div style={{ paddingBottom: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={2} md={2}>
              <div className='form-label'>Serie</div>
            </Grid>
            <Grid item xs={12} lg={10} md={10}>
              <RadioGroup
                name='Serie'
                value={series}
                onChange={handleSeriesChange}
                className='radio-container'
              >
                <FormControlLabel
                  value='C1'
                  control={<WhiteRadio />}
                  label='C1'
                  style={{
                    color: "white",
                    fontSize: "25px",
                    paddingLeft: "20px",
                  }}
                />
                <FormControlLabel
                  value='C2'
                  control={<WhiteRadio />}
                  label='C2'
                  style={{
                    color: "white",
                    fontSize: "25px",
                    paddingLeft: "20px",
                  }}
                />
                <FormControlLabel
                  value='C3'
                  control={<WhiteRadio />}
                  label='C3'
                  style={{
                    color: "white",
                    fontSize: "25px",
                    paddingLeft: "20px",
                  }}
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4} md={4}>
              <div className='form-label'>Color</div>
            </Grid>
            <Grid item xs={12} lg={8} md={8}>
              <RadioGroup
                name='Color'
                value={color}
                onChange={handleColorChange}
                className='radio-container'
              >
                <FormControlLabel
                  value='grey'
                  control={<WhiteRadio />}
                  label='grey'
                  style={{
                    color: "white",
                    fontSize: "25px",
                  }}
                />
                <FormControlLabel
                  value='dark'
                  control={<WhiteRadio />}
                  label='dark'
                  style={{
                    color: "white",
                    fontSize: "25px",
                    paddingLeft: "20px",
                  }}
                />
                <FormControlLabel
                  value='blue'
                  disabled={series !== "C3"}
                  control={<WhiteRadio />}
                  label='blue'
                  style={{
                    color: "white",
                    fontSize: "25px",
                    paddingLeft: "20px",
                  }}
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={2} md={2}>
              <div className='form-label'>Type</div>
            </Grid>
            <Grid item xs={12} lg={10} md={10}>
              <RadioGroup
                name='Type'
                value={type}
                onChange={handleTypeChange}
                className='radio-container'
              >
                <FormControlLabel
                  value='manual'
                  control={<WhiteRadio />}
                  label='manual'
                  style={{
                    color: "white",
                    fontSize: "25px",
                    paddingLeft: "20px",
                  }}
                />
                <FormControlLabel
                  value='automatic'
                  control={<WhiteRadio />}
                  label='automatic'
                  style={{
                    color: "white",
                    fontSize: "25px",
                    paddingLeft: "20px",
                  }}
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={2} md={2}>
              <div className='form-label'>Postal Code</div>
            </Grid>
            <Grid item xs={12} lg={10} md={10}>
              <Input
                className='input-field'
                placeholder={"XXXX-XXXX"}
                onChange={handlePostalCodeChange}
                value={postalCode}
              />
            </Grid>
          </Grid>
        </div>
      </FormControl>
      <Button
        type='submit'
        variant='outlined'
        color='primary'
        className='form-button'
      >
        Submit
      </Button>
    </form>
  );
};

export default FormComponent;
