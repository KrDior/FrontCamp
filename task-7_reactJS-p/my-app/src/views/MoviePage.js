/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '../components/Typography';
import Button from '../components/Button';
import ProductHeroLayout from './ProductHeroLayout';


const backgroundImage = 'https://harpkaurwrites.files.wordpress.com/2016/01/273d705bfba3c478db2197cab595bb77-d5tog3t.jpg';

const styles = (theme) => ({
  movieBackground: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  backgroundSeacrh: {
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  buttonGroup: {
    width: 100,
    maxHeight: 50,
  },
  cover: {
    marginTop: theme.spacing(6),
    marginRight: theme.spacing(3),
    height: 400,
    borderRadius: 5,
  },
  rating: {
    marginTop: theme.spacing(6),
  },
  date: {
    height: 70,
    width: 150,
    borderRadius: 15,
    padding: 0,
    boxShadow: '20px 10px 36px 28px rgba(70,140,176,0.65)',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(-2),
  },
  more: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 600,
  },
  input: {
    fontSize: 20,
  },
  searchText: {
    marginLeft: 75,
    marginRight: 5,
  },
  activeSort: {
    backgroundColor: '#f94f8e',
  },
});

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const item = {
  id: 901,
  title: 'City Lights',
  vote_average: 8.2,
  release_date: '1931-01-30',
  poster_path: 'https://image.tmdb.org/t/p/w500/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg',
  overview:
    'City Lights is the first silent film that Charlie Chaplin directed after he established himself with sound accompanied films. The film is about a penniless man who falls in love with a flower girl. The film was a great success and today is deemed a cult classic.',
  genres: ['Comedy', 'Drama', 'Romance'],
  runtime: 87,
};

function MoviePage(props) {
  const { classes } = props;
  // const { id, title, release_date, poster_path, genres, vote_average } = props;
  const {
    id, title, release_date, poster_path, genres, vote_average, overview,
  } = item;

  return (
    <ProductHeroLayout backgroundClassName={classes.movieBackground}>
      <div className={classes.root}>
        <Box
          display="flex"
          alignItems="flex-center"
          justifyContent="center"
          flexDirection="row"
          flexWrap="no-wrap"
          p={10}
          m={10}
        >
          <Box alignSelf="flex-start">
            <img src={poster_path} alt="increase priority" className={classes.cover} />
          </Box>
          <Box display="flex" alignItems="flex-center" justifyContent="center" flexDirection="column" flexWrap="wrap">
            <Box alignSelf="flex-end" className={classes.rating}>
              <Typography component="legend">Likes</Typography>
              <StyledRating
                name="customized-color"
                value={vote_average / 2}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
              />
            </Box>
            <Box alignSelf="center">
              <Typography color="inherit" align="center" variant="h4" className={classes.h5}>
                {title}
              </Typography>
            </Box>
            <Box alignSelf="center">
              <Typography variant="body2" color="inherit" className={classes.more}>
                {overview}
              </Typography>
            </Box>
            <Box alignSelf="flex-end">
              <Button variant="contained" color="secondary" className={classes.date}>
                Release date:
                {' '}
                {release_date}
              </Button>
            </Box>
          </Box>
          <Box alignSelf="flex-start">
            <Link underline="always" component={RouterLink} to="/">
              <SearchIcon color="secondary" style={{ fontSize: 40, marginTop: 50, marginLeft: 100 }} />
            </Link>
          </Box>
        </Box>
      </div>
    </ProductHeroLayout>
  );
}

MoviePage.propTypes = {
  classes: PropTypes.object.isRequired,
  // id: PropTypes.number.isRequired,
  // title: PropTypes.string.isRequired,
  // release_date: PropTypes.string.isRequired,
  // poster_path: PropTypes.string.isRequired,
  // vote_average: PropTypes.number.isRequired,
};

const MoviePageWithRouter = withRouter(MoviePage);

export default withStyles(styles)(MoviePageWithRouter);
