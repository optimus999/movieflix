import React from 'react';
import MovieCard from "../components/moviecard";
import styles from "../styles/common.module.css"

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


    const url = process.env.RAPID_KEY;

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '92748d6588msh9ba2112aee57b26p1f9030jsnd66cb05d70a7',
        'x-rapidapi-host': 'netflix54.p.rapidapi.com'
      }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    // console.log("yoyo",data);/

    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
      {data.map((season) => (
        season.episodes.map((episode) => (
          <MovieCard 
            key={episode.episodeId} 
            episodeData={episode} // Pass the entire episode object
          />
        ))
      ))}
    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;