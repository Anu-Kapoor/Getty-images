
import { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/dataslice';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableHead } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const PicDetail = () => {

  const licData = [
    {
      "value": "extrasmall",
      "label": "Extra small",
      "cost": 50,
      "description": "773 x 456 px (10.74 x 6.33 in) 72 dpi|0.4 MP"
    },
    {
      "value": "small",
      "label": "Small",
      "cost": 175,
      "description": "773 x 456 px (10.74 x 6.33 in) 72 dpi|0.4 MP"
    },
    {
      "value": "medium",
      "label": "Medium",
      "cost": 375,
      "description": "2258 x 1332 px (7.53 x 4.44 in)300 dpi|3.0 MP"
    },
    {
      "value": "large",
      "label": "Large",
      "cost": 575,
      "description": "6984 x 4121 px (23.28 x 13.74 in) 300 dpi|28.8 MP"
    },
  ]

  const [value, setValue] = useState('large');
  const [selectedOption, setSelectedOption] = useState(licData[3]);
  const [Add, setAdd] = useState(true);
  const [update, setupdate] = useState(false);
  const [go, setgo] = useState(true);
  const [existingCARTitem, setexistingCartitem] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const selectedPic = useSelector((state) => state.cart.selectedPic);
  const params = useParams(); 
  const { imageId } = params;

  useEffect(() => {
    if (value !== "freeze") {
      let dumm = licData.find(item => item.value === value);
      setSelectedOption(dumm);
    }
    const foundCartItem = cartItems.find(item => item.id === selectedPic.id)
    setexistingCartitem(foundCartItem);

  }, [dispatch, value, cartItems, imageId, selectedPic.id]);

  useEffect(() => {
    if (!existingCARTitem) {
      setupdate(false);
      setAdd(true);
      setgo(false);
      return;
    }

    if (existingCARTitem.price !== selectedOption.cost) {
      setupdate(true);
      setAdd(false);
      setgo(false);
    }

    else if (existingCARTitem.price === selectedOption.cost) {
      setupdate(false);
      setAdd(false);
      setgo(true);
    }

  }, [dispatch, selectedOption, existingCARTitem]);


  const handleChange = (event) => {
    setValue(event.target.value);

  };

  const updateCart = (event) => {
    event.preventDefault();
    let item = {
      id: selectedPic.id,
      cost: selectedOption.cost,
    };
    dispatch(cartActions.updateCartItemPrice(item));
    setupdate(false);
    setAdd(false);
    setgo(true);
  };



  const AddtoCart = (event) => {
    event.preventDefault();
    if (!existingCARTitem) {
      dispatch(cartActions.addItemToCart(selectedOption));
      setupdate(false);
      setAdd(false);
      setgo(true);
    }
  };

  return (

    <Grid container spacing={2}>
      <Grid item md={8} xs={12}>
        <Item>
          <img
            src={selectedPic.download_url}
            height="100%"
            width="100%"
            fit="scale-down"
            alt={selectedPic.title}
          />
        </Item>
      </Grid>
      <Grid item md={4} xs={12}>
        <Item>
          <Card >
            <CardHeader
              title="PURCHASE A LICENSE"
              subheader="All Royalty-Free licenses include global use rights, comprehensive protection, simple pricing with volume discounts available."
            />
            <CardContent>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="large"
                  name="radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 350 }} aria-label="simple table">
                      <TableBody>
                        {(licData.map((item, i) => (
                          < TableRow key={item.cost}>
                            <TableCell align="left">
                              <FormControlLabel value={item.value} control={<Radio />} label={item.label} />
                            </TableCell>
                            <TableCell align="right">${item.cost}.00</TableCell>
                          </TableRow>
                        ))
                        )}
                        <TableRow>
                          <TableCell colSpan={2} align="justify" >
                            <FormControlLabel value="freeze" control={<Radio />} label="Market freeze" />
                            <br />Protect your creative work - we'll remove this image from our site for as long as you need it.
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </RadioGroup>
                {(value !== "freeze") && (<><h1>${selectedOption.cost}.00 CAD</h1>
                  {(Add) && <button onClick={AddtoCart}>ADD TO CART</button>}
                  {(update) && <button onClick={updateCart}>UPDATE CART</button>}
                  {(go) && <>
                    <Link to='/cart'>
                      <button>GO TO CART</button>
                    </Link>
                  </>}
                </>)}

                {(value === "freeze") && (<button> CONTACT US</button>)}
              </FormControl>
            </CardContent>
            <Item>
              <Typography variant="body2" color="text.secondary">
                <Table size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={2}> Details: </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell> Credit: </TableCell>
                      <TableCell> {selectedPic.author} </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell> Creative#: </TableCell>
                      <TableCell> {selectedPic.id} </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell> License type: </TableCell>
                      <TableCell> Royalty-free </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Typography>
            </Item>
          </Card>
        </Item>
      </Grid>
    </Grid>

  );
};

export default PicDetail;


// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         title="PURCHASE A LICENSE"
//         subheader="All Royalty-Free licenses include global use rights, comprehensive protection, simple pricing with volume discounts available."
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the
//           mussels, if you like.
//         </Typography>
//       </CardContent>

//       <ExpandMore
//         expand={expanded}
//         onClick={handleExpandClick}
//         aria-expanded={expanded}
//       >
//         Hello
//       </ExpandMore>

//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }



// import HighlightedQuote from '../components/quotes/HighlightedQuote';
// import Comments from '../components/comments/Comments';
// import useHttp from '../hooks/use-http';
// import { getSingleQuote } from '../lib/api';
// // import LoadingSpinner from '../components/UI/LoadingSpinner';

// const QuoteDetail = () => {
  

//   // const { sendRequest, status, data: loadedQuote, error } = useHttp(
//   //   getSingleQuote,
//   //   true
//   // );

//   return (
//     <Fragment>
//       <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
//       <Route path={match.path} exact>
//         <div className='centered'>
//           <Link className='btn--flat' to={`${match.url}/comments`}>
//             Load Comments
//           </Link>
//         </div>
//       </Route>
//       <Route path={`${match.path}/comments`}>
//         <Comments />
//       </Route>
//     </Fragment>
//   );
// };

// export default QuoteDetail;