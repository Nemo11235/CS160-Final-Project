import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";
import "./GameGrid.scss";

const Item = styled(Paper)(({ theme }) => ({
  //return each cell component. item is cell
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(2), //margin between cells
  textAlign: "center",
  color: "black",
  fontWeight: "bold",
  fontSize: "20sp",
}));

NestedGrid.propTypes = {
  input: PropTypes.string,
  wordList: PropTypes.array,
  row: PropTypes.number,
  savedColor: PropTypes.array,
};

export default function NestedGrid({ input, wordList, row, savedColor }) {
  //this function returns the grid and calls FormRow() function to create row
  FormRow.propTypes = {
    word: PropTypes.string,
    colorArray: PropTypes.array,
  };

  function FormRow({ word, colorArray }) {
    //creating each row by calling this function
    // this function check that colorArray is not undefined and not empty
    // and change the cell color for each cell according to colorArray

    function checkColor(cellNum) {
      return colorArray && colorArray.length ? colorArray[cellNum] : "white";
    }

    return (
      <React.Fragment>
        <Grid item xs={false}>
          <Item className="cell_style" style={{ background: checkColor(0) }}>
            {word[0]}
          </Item>
        </Grid>
        <Grid item xs={false}>
          <Item className="cell_style" style={{ background: checkColor(1) }}>
            {word[1]}
          </Item>
        </Grid>
        <Grid item xs={false}>
          <Item className="cell_style" style={{ background: checkColor(2) }}>
            {word[2]}
          </Item>
        </Grid>
        <Grid item xs={false}>
          <Item className="cell_style" style={{ background: checkColor(3) }}>
            {word[3]}
          </Item>
        </Grid>
        <Grid item xs={false}>
          <Item className="cell_style" style={{ background: checkColor(4) }}>
            {word[4]}
          </Item>
        </Grid>
      </React.Fragment>
    );
  }
  return (
    <Box className="Grid-box-style">
      <Grid container spacing={1}>
        <Grid container item spacing={2}>
          {row !== 0 && (
            <FormRow word={wordList[0]} colorArray={savedColor[0]} />
          )}
          {row === 0 && <FormRow word={input} />}
        </Grid>
        <Grid container item spacing={2}>
          {row !== 1 && (
            <FormRow word={wordList[1]} colorArray={savedColor[1]} />
          )}
          {row === 1 && <FormRow word={input} />}
        </Grid>
        <Grid container item spacing={2}>
          {row !== 2 && (
            <FormRow word={wordList[2]} colorArray={savedColor[2]} />
          )}
          {row === 2 && <FormRow word={input} />}
        </Grid>
        <Grid container item spacing={2}>
          {row !== 3 && (
            <FormRow word={wordList[3]} colorArray={savedColor[3]} />
          )}
          {row === 3 && <FormRow word={input} />}
        </Grid>
        <Grid container item spacing={2}>
          {row !== 4 && (
            <FormRow word={wordList[4]} colorArray={savedColor[4]} />
          )}
          {row === 4 && <FormRow word={input} />}
        </Grid>
        <Grid container item spacing={2}>
          {row !== 5 && (
            <FormRow word={wordList[5]} colorArray={savedColor[5]} />
          )}
          {row === 5 && <FormRow word={input} />}
        </Grid>
      </Grid>
    </Box>
  );
}
