
import React, { useState, useEffect, useCallback } from 'react';
import QuoteList from '../components/quotes/QuoteList';

  const AllQuotes = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

      const fetchMoviesHandler = useCallback(async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('https://picsum.photos/v2/list');
        if (!response.ok) {
          throw new Error('Something went wrong!');
        }
  
        const data = await response.json();
        console.log("data is: ", data, " end of data" );

        const dummy_images=[];
        
        for (const key in data) {
          dummy_images.push({
            id: key,
            author: data[key].author,
            url: data[key].download_url,
           
          });
        }

        console.log("dummy-data is: ", dummy_images, " end of data" );

        setMovies(dummy_images);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }, []);
  
    useEffect(() => {
      fetchMoviesHandler();

    }, [fetchMoviesHandler]);
  
  
    let content = <p>Found no movies.</p>;
  
    if (movies.length > 0) {
     content = <QuoteList movies={movies} />;   
    }
  
    if (error) {
      content = <p>{error}</p>;
    }
  
    if (isLoading) {
      content = <p>Loading...</p>;
    }
    return(
      <React.Fragment>
      <section>{content}</section>
   </React.Fragment>
    )

  };

 export default AllQuotes;



