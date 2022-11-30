import Fragment, {useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/dataslice';


export default function PicsList( ) {
  const pics = useSelector((state) => state.cart.pics);
  const dispatch = useDispatch();

  const Edithandler = (id) => {
    dispatch(cartActions.setSelectedpic(id));
   }


  return (

    <Container maxWidth="xl">
      <Box sx={{ bgcolor: '#cfe8fc' }}>
        
      <ImageList variant="masonry"  {...{ xs: 12, sm: 12, md: 3, lg: 4 }}>
        { pics.map((item) => (
           <Link to={`/imageDetail/${item.id}`}>
             <div class="portrait">
          <ImageListItem key={item.id}>
        
            <img
              src={`${item.download_url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.download_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() => Edithandler(item.id)}
              onMouseOver={(e) => (e.currentTarget.style = { transform: "scale(1.25)", overflow: "hidden" })}
              onMouseOut={(e) => (e.currentTarget.style = { transform: "scale(1)", overflow: "hidden" })}
              sx={{
                
                '&:hover, &:focus': {
                  bgcolor: 'unset',
                  transform: 'translateX(-4px) rotate(-20deg)',
                  boxShadow: '0px 0px 0px 8px' ,
                },
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  height: '80%',
                  display: 'block',
                  left: 0,
                  width: '1px',
                  bgcolor: 'divider',
                },
              }}
            />
            
            <ImageListItemBar position="bottom" title={item.author} />
          </ImageListItem>
          </div>
          </Link> 
        ))}
      </ImageList>
   
      </Box>
    </Container>
  );
}




  // <ImageList variant="masonry">
  //
  //           <ImageListItemBar position="bottom" title={item.author} />
  //         </ImageListItem>
  //         </Link>
  //       ))}
  //     </ImageList>
