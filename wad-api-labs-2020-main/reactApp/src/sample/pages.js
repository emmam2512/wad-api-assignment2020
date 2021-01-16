import React from 'react';
import { useContext} from 'react';
import { MoviesContext } from './contexts/moviesContext';

export const PublicPage = () => {
    return <h2>Public page</h2>
 }
 export const Movies = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Movies Data </h2>
        <div>
            {context.movies.map(movie => { return <>{movie.id},{movie.title}<br /></> })}
        </div>
    </>
}
 export const Profile = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Upcoming movies </h2>
        <div>
            {context.upcoming.map(upcoming => { return <>{upcoming.id},{upcoming.title}<br /></> })}
        </div>
    </>
}
 export const HomePage = () => {
    const context = useContext(MoviesContext);
    return <>
        <h2>Top rated movies  </h2>
        <div>
            {context.toprated.map(toprated => { return <>{toprated.id},{toprated.title}<br /></> })}
        </div>
    </>
 }
 