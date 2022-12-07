
import React, { useState } from 'react';
import headerImage from '../Assets/gettyPic.jpg';
import ActionAreaCard from '../components/UI/MediaCard.tsx';
import UnsplashPicsData from '../components/UI/UnsplashPicsData';
import { Grid } from '@mui/material';


const Collections = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <React.Fragment>

      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <img src={headerImage} alt="gettybackground" class="d-block w-100" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className="mb-4">Visual inspiration, curated by the experts</h1>
              <h4>
                Explore the best of our images and videos in the featured sets below. Exceptional curated content, captured by our leading photographers and videographers. Right here and ready to use.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-10'>
        <h1 className='display-4 text-center'>
          Stay on top of what’s trending
        </h1>

        <p className='fs-5 text-center'>
          Our visual experts study proprietary data, advertising trends, and shifts in consumer behavior, then carefully hand‑pick content based on these insights to help you elevate your work. With the world’s most comprehensive image and video libraries at hand, they can afford to be choosy.
        </p>

        <div className="form-group">
          
            <input type="text"
              className="form-control mb-4"
              placeholder="Search items"
              onChange={(e) => setSearchTerm(e.target.value)} />

              <Grid container spacing={2}>
            {UnsplashPicsData.filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.type
                  .toLocaleLowerCase()
                  .includes(searchTerm.toLocaleLowerCase())
              ) {
                return val;
              }
            }).map((val) => {
              return (
                <Grid item xs={12} md={4}>
                <div className="success mb-4" key={val.id}>
                  <ActionAreaCard url={val.url} type={val.type} />
                </div>
                </Grid>
              );
            })}
          </Grid>
        </div>

      </div>


    </React.Fragment>
  )
};

export default Collections;