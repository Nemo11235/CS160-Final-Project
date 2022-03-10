//TODO: need to make dynamic grid column
//so that it will change the grid colum size according to the number of letters
import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  //return each cell component. item is cell
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2), //margin between cells
  textAlign: "center",
  color: "black",
  fontWeight: "bold",
}));

function FormRow() {
  //creating each row by calling this function
  return (
    <React.Fragment>
      <Grid item xs={false}>
        <Item>A</Item>
      </Grid>
      <Grid item xs={false}>
        <Item>B</Item>
      </Grid>
      <Grid item xs={false}>
        <Item>C</Item>
      </Grid>
      <Grid item xs={false}>
        <Item>D</Item>
      </Grid>
      <Grid item xs={false}>
        <Item>E</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function NestedGrid() {
  //this function returns the grid and calls FormRow() function to create row
  return (
    <Box className="Grid-box-style">
      <Grid container spacing={1}>
        <Grid container item spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item spacing={2}>
          <FormRow />
        </Grid>
        <Grid container item spacing={2}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
