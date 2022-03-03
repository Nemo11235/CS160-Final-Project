
//TODO: need to make dynamic grid column 
//so that it will change the grid colum size according to the number of letters 
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({ //return each cell component. item is cell
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2), //margin between cells
  textAlign: 'center',
  color: 'black',
  fontWeight:'bold'
}));

function FormRow() { //column
  return (
    <React.Fragment>
      <Grid item xs={'auto'}>
        <Item>A</Item>
      </Grid>
      <Grid item xs={'auto'}>
        <Item>B</Item>
      </Grid>
      <Grid item xs={'auto'}>
        <Item>C</Item>
      </Grid>
      <Grid item xs={'auto'}>
        <Item>D</Item>
      </Grid>
      <Grid item xs={'auto'}>
        <Item>E</Item>
      </Grid>
      
    </React.Fragment>
  );
}

export default function NestedGrid() { //creating row
  return (
    <Box style={{
      position: 'absolute',
      left: '50%', top: '40%',right:'25%',
      transform: 'translate(-50%, -50%)'
    }} >
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
