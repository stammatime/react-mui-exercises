import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import CreateDialog from '../exercises/dialogs/create';


export default props =>
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{flex: 1}}>
        Display 1
      </Typography>
      <CreateDialog></CreateDialog>
    </Toolbar>
  </AppBar>