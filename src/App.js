import { Route, Switch, Redirect } from 'react-router-dom';
import React, {Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AllPics from './pages/AllPics';
import PicDetail from './pages/PicDetail';
import NewQuote from './pages/NewQuote.tsx';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout'; 
import SearchAppBar from './components/layout/demo.tsx';
import CustomizedList from'./components/layout/footer.tsx';
import Cart from './components/cart/Cart';
import { fetchDummyData } from './store/dummy-actions';


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';



function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        gettyimages
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let isInitial = true;

function App() {
  
//const showCart = useSelector((state) => state.ui.cartIsVisible);
const cart = useSelector((state) => state.cart);
const dispatch = useDispatch();
  
useEffect(() => {

    if (!isInitial) {
     return;
    }
    isInitial = false;
    dispatch(fetchDummyData());
  }, [dispatch]);


  return (
    <Fragment>
      {/* {showCart && <Cart />} */}
      <SearchAppBar />
  
    <Layout>
      
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact>
        <AllPics />
        </Route>
        <Route path='/quotes'>
          <AllPics />
        </Route>
        <Route path='/cart' exact>
        <Cart />
        </Route>

        <Route path='/new-quote'>
        <NotFound />
        </Route>

        <Route path='/imageDetail/:imageId'>
          <PicDetail />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>

    <Box sx={{ bgcolor: 'rgba(113, 53, 233, 0.928)', p: 6, flexGrow: 1 }} component="footer">
    <Grid container spacing={3}>
        <Grid item xs={12} md={2}>
        <Avatar sx={{ width: 55, height: 55 }}>g</Avatar>
        </Grid>
        
        <Grid item xs={12} md={2}>
        <CustomizedList />
        </Grid>
        <Grid item xs={12} md={2}>
        <CustomizedList />
        </Grid>
        <Grid item xs={12} md={2}>
        <CustomizedList />
        </Grid>
        <Grid item xs={12} md={2}>
        <CustomizedList />
        </Grid>
      </Grid>
    
    
    
    
    
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>

    </Fragment>
  );
}

export default App;
