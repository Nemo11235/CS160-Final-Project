import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

const Item = styled(Paper)(({ theme }) => ({
  //return each cell component. item is cell
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2), //margin between cells
  textAlign: "center",
  color: "black",
  fontWeight: "bold",
}));
FormRow.propTypes = {
  word: PropTypes.string,
};

function FormRow({ word }) {
  //creating each row by calling this function
  return (
    <React.Fragment>
      <Grid item xs={false}>
        <Item>{word[0]}</Item>
      </Grid>
      <Grid item xs={false}>
        <Item>{word[1]}</Item>
      </Grid>
      <Grid item xs={false}>
        <Item>{word[2]}</Item>
      </Grid>
      <Grid item xs={false}>
        <Item>{word[3]}</Item>
      </Grid>
      <Grid item xs={false}>
        <Item>{word[4]}</Item>
      </Grid>
    </React.Fragment>
  );
}
NestedGrid.propTypes = {
  word: PropTypes.string,
};

export default function NestedGrid(props) {
  //this function returns the grid and calls FormRow() function to create row
  return (
    <Box className="Grid-box-style">
      <Grid container spacing={1}>
        <Grid container item spacing={2}>
          <FormRow word={props.word} />
        </Grid>
        <Grid container item spacing={2}>
          <FormRow word={props.word} />
        </Grid>
        <Grid container item spacing={2}>
          <FormRow word={props.word} />
        </Grid>
        <Grid container item spacing={2}>
          <FormRow word={props.word} />
        </Grid>
        <Grid container item spacing={2}>
          <FormRow word={props.word} />
        </Grid>
        <Grid container item spacing={2}>
          <FormRow word={props.word} />
        </Grid>
      </Grid>
    </Box>
  );
}
