/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import MovieCard from '../components/MovieCard';
import Typography from '../components/Typography';
import LinearDeterminate from '../components/LinearProgress';
import { sortByRating, sortByRelease } from '../store/actions/actionCreator';
import { sortByRating as ratingSort } from '../utils/helpers';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  rootGrid: {
    marginTop: theme.spacing(8),
  },
  title: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(-10),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
  noFound: {},
});

function ProductCategories(props) {
  const { classes } = props;
  const [movies, setMovie] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const movieData = useSelector((state) => state.movie);
  const store = useSelector((state) => state);
  const dispatchSeachRating = useDispatch();

  useEffect(() => {
    const { movies: moviesArr, isFetching } = movieData;

    if (isFetching) setIsLoading(true);
    setTimeout(() => {
      setIsLoading(isFetching);
      if (moviesArr && moviesArr.data) {
        const {
          data: { data },
        } = moviesArr;
        setMovie(ratingSort(data));
      }
    }, 1000);
  }, [movieData]);

  useEffect(() => {
    if (movies.length && store.sortBy === 'rating') {
      dispatchSeachRating(sortByRating(movies));
    } else if (movies.length) {
      dispatchSeachRating(sortByRelease(movies));
    }
  }, [store.sortBy]);

  return (
    <Container className={classes.root} component="section">
      {isLoading && <LinearDeterminate />}
      {movies.length && !isLoading ? (
        <>
          <Typography
            variant="h4"
            marked="center"
            align="center"
            component="h2"
            className={clsx(classes.title, classes.noFound)}
          >
            For all tastes and all desires
          </Typography>
          <Grid container spacing={1} className={classes.rootGrid}>
            {movies.map((movie) => (
              <Grid container item xs={3} spacing={3} key={movie.id} className={classes.images}>
                <MovieCard {...movie} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
          No films found
        </Typography>
      )}
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default compose(
  withStyles(styles, { name: 'ProductCategories' }),
)(ProductCategories);
