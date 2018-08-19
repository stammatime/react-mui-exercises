import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import ExerciseDialog from '../exercises/dialog';


export default ({muscles, onExerciseCreate}) =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{flex: 1}}>
        Display 1
      </Typography>
      <ExerciseDialog 
        muscles={muscles}
        onCreate={onExerciseCreate}
      ></ExerciseDialog>
    </Toolbar>
  </AppBar>