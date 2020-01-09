/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import MovieIcon from '@material-ui/icons/Movie';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import BootstrapButton from '../components/ButtonSort';
import { getSortBy } from '../store/actions/actionCreator';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.light,
    height: 100,
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(-4),
    marginBottom: theme.spacing(1),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
  active: {
    backgroundColor: '#92bbf9',
  },
  counterMovie: {
    position: 'relative',
    left: 0,
    top: 15,
  },
  sort: {
    position: 'relative',
    left: 50,
  },
  icon: {
    position: 'relative',
    left: 0,
  },
});

function ProductValues(props) {
  const { classes } = props;
  const location = useLocation();
  const [sortBy, setSortBy] = React.useState('rating');
  const [genres, setGenres] = React.useState('');
  const [isMovieSelect, setIsMovieSelect] = React.useState(false);
  const [countMovie, setCountMovie] = React.useState('0');
  const movieData = useSelector((state) => state.movie);
  const movieSelected = useSelector((state) => state.movieId);
  const dispatchSortParam = useDispatch();

  const handleSortBy = (event, newSortBy) => {
    if (newSortBy !== null) {
      setSortBy(newSortBy);
      dispatchSortParam(getSortBy(newSortBy));
    }
  };

  useEffect(() => {
    if (movieData.movies && movieData.movies.data) {
      setCountMovie(movieData.movies.data.data.length);
      dispatchSortParam(getSortBy(sortBy));
    }
    if (movieSelected.movie) {
      setIsMovieSelect(true);
      setGenres(movieSelected.movie.data.genres[0]);
    }
    if (!location.pathname.includes('/film/')) {
      setIsMovieSelect(false);
    }
  }, [movieData.movies, movieSelected]);

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={1} justify="space-around">
          <Grid item sm>
            <div className={clsx(classes.title)}>
              <Badge className={classes.counterMovie} badgeContent={countMovie} color="primary">
                <MovieIcon fontSize="large" className={classes.icon} />
              </Badge>
            </div>
          </Grid>
          <Grid item sm>
            {isMovieSelect && (
              <Typography variant="h6" className={clsx(classes.item)}>
                film by
                {' '}
                {genres}
                {' '}
                genre
              </Typography>
            )}
          </Grid>
          <Grid item sm>
            <div className={clsx(classes.item, classes.sort)}>
              <Typography variant="h6" className={clsx(classes.title)}>
                SORT BY
              </Typography>
              <ToggleButtonGroup
                value={sortBy}
                exclusive
                onChange={handleSortBy}
                aria-label="text alignment"
                size="small"
              >
                <BootstrapButton value="release" aria-label="left aligned">
                  Release
                </BootstrapButton>
                <BootstrapButton value="rating" aria-label="right aligned">
                  Rating
                </BootstrapButton>
              </ToggleButtonGroup>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
