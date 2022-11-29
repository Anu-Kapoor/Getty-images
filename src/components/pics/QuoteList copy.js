

// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// export default function QuoteList(props) {
//   return (
    // <ImageList sx={{ width: 1000, height: 450 }} cols={4} rowHeight={164}>
      
    // </ImageList>
//   );
// }


import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function FullBorderedGrid(props) {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        {props.movies.map((item) => (
          <Grid
            key={item.id}
            {...{ xs: 12, sm: 6, md: 4, lg: 3 }}
            minHeight={160}
          >
           
        <ImageListItem key={item.id} >
          <img
            src={`${item.url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.author}
            loading="lazy"
          />
          <ImageListItemBar
           // title={item.author}
            subtitle={<span>by: {item.author}</span>}
            position="bottom"
          />
        </ImageListItem>
    
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
