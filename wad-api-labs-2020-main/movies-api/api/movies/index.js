import express from 'express';
import movieModel from './movieModel';
import upcomingMoviesModel from './upcomingMoviesModel';
import topRatedModel from './topRatedModel';


const router = express.Router();


router.get('/', (req, res, next) => {
  movieModel.find().then(movies => res.status(200).send(movies)).catch(next);
});
router.get('/upcoming', (req, res, next) => {
  upcomingMoviesModel.find().then(upcoming => res.status(200).send(upcoming)).catch(next);
});
router.get('/toprated', (req, res, next) => {
  topRatedModel.find().then(toprated => res.status(200).send(toprated)).catch(next);
});
router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  movieModel.findByMovieDBId(id).then(movie => res.status(200).send(movie)).catch(next);
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

export default router;