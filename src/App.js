import { Route, Switch, Redirect } from 'react-router-dom';
import React, {Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui-slice';

import AllPics from './pages/AllPics';
import PicDetail from './pages/PicDetail';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout'; 
import SearchAppBar from './components/layout/SearchAppBar copy.tsx';
import CustomizedList from'./components/layout/footer.tsx';
import Cart from './components/cart/Cart';
import { fetchDummyData, fetchCartData, fetchDummyQuotes } from './store/dummy-actions';
import {cartActions} from './store/dataslice';
import AddUser from './components/Users/AddUser';
import Notification from './components/UI/Notification';
import CheckOut from './pages/Checkout';
import CheckOutForm from './components/UI/checkOutForm';
import SearchFilter from './components/layout/SearchFilter';
import Collections from './pages/Collections';
import MainNavigation from './components/layout/MainNavigation';

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
const notification = useSelector((state) => state.ui.notification);
const dispatch = useDispatch();
  
useEffect(() => {
    if (!isInitial) {
      if (cart.changed) {
        dispatch(
          uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!',
          })
        );
      window.localStorage.setItem("CartItems", JSON.stringify(cart.items));
      // localStorage.setItem("totalPrice", cart.totalPrice);
      // localStorage.setItem("totalQuantity", cart.totalQuantity);
  
      
        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Sent cart data successfully!',
          })
        );
        }

     return;
    }
    isInitial = false;
    dispatch(fetchDummyData());
    dispatch(fetchDummyQuotes());
    // let localtotalQuan = localStorage.getItem("totalQuantity");
    // let localtotalPrice = parseFloat(localStorage.getItem("totalPrice"));
    let localItems = JSON.parse(window.localStorage.getItem("CartItems"));
    console.log(localItems);
    let localcartdata = {'items': localItems, 
    // 'totalQuantity': localtotalQuan,
    // 'totalPrice': localtotalPrice,
  }
  
  console.log(localcartdata);
    dispatch(cartActions.replaceCart(localcartdata));

  }, [cart, dispatch]);

  



  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
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
        <Route path='/home/Welcome' exact>
        <AllPics />
        </Route>
        <Route path='/add-user' exact>
        <AddUser />
        </Route>
        <Route path ='/checkout' exact>
          <CheckOutForm />
        </Route>
        <Route path='/cart' exact>
        <Cart />
        </Route>
        <Route path='/editorial' exact>
        <SearchFilter />
        </Route>

        <Route path='/collections' exact>
        <Collections />
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
