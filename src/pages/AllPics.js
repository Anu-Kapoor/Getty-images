
import React, { useState, useEffect, useCallback } from 'react';
import PicsList from '../components/pics/PicsList';


  const AllPics = () => {
    


    return(
      <React.Fragment>
     <PicsList />
   </React.Fragment>
    )

  };

 export default AllPics;


    // const [pics, setpics] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);

    //   const fetchpicsHandler = useCallback(async () => {
    //   setIsLoading(true);
    //   setError(null);
    //   try {
    //     const response = await fetch('https://picsum.photos/v2/list');
    //     if (!response.ok) {
    //       throw new Error('Something went wrong!');
    //     }
  
    //     const data = await response.json();
    //     console.log("data is: ", data, " end of data" );

    //     const dummy_images=[];
        
    //     for (const key in data) {
    //       dummy_images.push({
    //         id: key,
    //         author: data[key].author,
    //         url: data[key].download_url,
           
    //       });
    //     }

    //     console.log("dummy-data is: ", dummy_images, " end of data" );

    //     setpics(dummy_images);
    //   } catch (error) {
    //     setError(error.message);
    //   }
    //   setIsLoading(false);
    // }, []);
  
    // useEffect(() => {
    //   fetchpicsHandler();

    // }, [fetchpicsHandler]);
  
  
    // let content = <p>Found no pics.</p>;
  
    // if (pics.length > 0) {
    //  content = <PicsList pics={pics} />;   
    // }
  
    // if (error) {
    //   content = <p>{error}</p>;
    // }
  
    // if (isLoading) {
    //   content = <p>Loading...</p>;
    // }

