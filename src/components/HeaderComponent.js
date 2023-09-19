import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import * as React from 'react';


export default function Header() {
  return (
    
    <Container>
      <AppBar style={{backgroundColor:"#669999"}}>
        <Toolbar>
          <Grid item xs={11} >
          <Typography variant="h6" component="h1" style={{}}>
           BookShopManagementSystem
           </Typography>
          </Grid>
         {/*  <Grid item xs={1}>
          <Button color="black" variant="contained"  >BuyNow</Button>
          </Grid> */}
          <Grid item xs={1}>
          <Button color="black" variant="contained"  >Login</Button>
          </Grid>
          
        </Toolbar>
      </AppBar>
      </Container>
    
  );
}