import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from './pages/AllQuotes';
<<<<<<< Updated upstream
//import QuoteDetail from '../../pages/QuoteDetail';
=======
//import QuoteDetail from './pages/QuoteDetail.js';
>>>>>>> Stashed changes
import NewQuote from './pages/NewQuote.tsx';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout'; 
import SearchAppBar from './components/layout/demo.tsx';
import { Fragment } from 'react';
import CustomizedList from'./components/layout/footer.tsx';
import Cart from './components/cart/Cart';
import { useSelector } from 'react-redux';

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
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function App() {
  
const showCart = useSelector((state) => state.ui.cartIsVisible);
const cart = useSelector((state) => state.cart);
  return (
    <Fragment>
      {showCart && <Cart />}
      <SearchAppBar />
  
    <Layout>
      
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' exact>
        <AllQuotes />
        </Route>
        <Route path='/quotes'>
          <AllQuotes />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
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
