import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import "./GameGrid.scss";

const Item = styled(Paper)(({ theme }) => ({
  //return each cell component. item is cell
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2), //margin between cells
  textAlign: "center",
  color: "black",
  fontWeight: "bold",
  fontSize: "20sp",
}));
FormRow.propTypes = {
  word: PropTypes.string,
};

function FormRow({ word }) {
  //creating each row by calling this function
  return (
    <React.Fragment>
      <Grid item xs={false}>
        <Item className="cell_style">{word[0]}</Item>
      </Grid>
      <Grid item xs={false}>
        <Item className="cell_style">{word[1]}</Item>
      </Grid>
      <Grid item xs={false}>
        <Item className="cell_style">{word[2]}</Item>
      </Grid>
      <Grid item xs={false}>
        <Item className="cell_style">{word[3]}</Item>
      </Grid>
      <Grid item xs={false}>
        <Item className="cell_style">{word[4]}</Item>
      </Grid>
    </React.Fragment>
  );
}
NestedGrid.propTypes = {
  input: PropTypes.string,
  wordList: PropTypes.array,
  row: PropTypes.number,
};

export default function NestedGrid({ input, wordList, row }) {
  //this function returns the grid and calls FormRow() function to create row

  return (
    <Box className="Grid-box-style">
      <Grid container spacing={1}>
        <Grid container item spacing={2}>
          {row != 0 && <FormRow word={wordList[0]} />}
          {row == 0 && <FormRow word={input} />}
        </Grid>
        <Grid container item spacing={2}>
          {row != 1 && <FormRow word={wordList[1]} />}
          {row == 1 && <FormRow word={input} />}
        </Grid>
        <Grid container item spacing={2}>
          {row != 2 && <FormRow word={wordList[2]} />}
          {row == 2 && <FormRow word={input} />}
        </Grid>
        <Grid container item spacing={2}>
          {row != 3 && <FormRow word={wordList[3]} />}
          {row == 3 && <FormRow word={input} />}
        </Grid>
        <Grid container item spacing={2}>
          {row != 4 && <FormRow word={wordList[4]} />}
          {row == 4 && <FormRow word={input} />}
        </Grid>
        <Grid container item spacing={2}>
          {row != 5 && <FormRow word={wordList[5]} />}
          {row == 5 && <FormRow word={input} />}
        </Grid>
      </Grid>
    </Box>
  );
}
