import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import FormComponent from "./components/FormComponent/FormComponent";
import Estimate from "./components/Estimate/Estimate";
import "./App.css";

function App() {
  const [changeView, setChangeView] = React.useState(false);
  const [estCost, setEstCost] = React.useState(0);
  return (
    <div className='container'>
      <Paper className='paper'>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6} md={6}>
            <div className='main-heading'>
              Onsectetur adipiscing elit sed do
            </div>
            <div className='sub-heading'>
              Onsectetur adipiscing elit,sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </div>
            {!changeView ? (
              <FormComponent
                handleViewChange={setChangeView}
                setCost={setEstCost}
                cost={estCost}
              />
            ) : (
              <Estimate
                handleViewChange={setChangeView}
                cost={estCost}
                setCost={setEstCost}
              />
            )}
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <div className='image rotateimg180'></div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
