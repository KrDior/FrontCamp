/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import MovieCard from '../components/MovieCard';
import Typography from '../components/Typography';
import movieReducer from '../store/reducers/movieReducer';
import { getStartMovie } from '../store/actions/actionCreator';

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
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const { classes } = props;
  const [movies, setMovie] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://reactjs-cdp.herokuapp.com/movies?search=20');
      setMovie({ hits: result.data.data });
      dispatch(getStartMovie());
    };
    fetchData();
  }, [dispatch]);

  return (
    <Container className={classes.root} component="section">
      {movies ? (
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
            {movies.hits.map((movie) => (
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

const mapStateToProps = ({ ui }) => ({
  ui,
});

export default compose(
  withStyles(styles, { name: 'ProductCategories' }),
  connect(mapStateToProps, null),
)(ProductCategories);
