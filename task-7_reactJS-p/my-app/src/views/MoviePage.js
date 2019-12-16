/* eslint-disable react/forbid-prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { compose } from 'redux';
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
  root: {
    maxHeight: 600,
  },
  movieBackground: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  backgroundSeacrh: {},
  buttonGroup: {},
  cover: {
    marginTop: theme.spacing(8),
    marginRight: theme.spacing(3),
    height: 400,
    borderRadius: 5,
  },
  rating: {
    marginTop: theme.spacing(8),
  },
  date: {
    height: 50,
    width: 100,
    borderRadius: 15,
    padding: 0,
    boxShadow: '20px 10px 36px 28px rgba(70,140,176,0.65)',
    marginTop: theme.spacing(0),
    marginLeft: 10,
    display: 'inline-block',
    fontSize: 12,
  },
  button: {
    minWidth: 200,
  },
  h3: {},
  h5: {
    marginBottom: theme.spacing(2),
    marginTop: -200,
    maxHeight: 80,
  },
  more: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  textField: {},
  input: {},
  searchText: {},
  activeSort: {},
  notFound: {},
});

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

function MoviePage(props) {
  const {
    title, release_date, poster_path, vote_average, overview, runtime, classes,
  } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.movieBackground}>
      <div className={classes.root} id="moviePage">
        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="row"
          flexWrap="no-wrap"
          p={2}
          m={2}
        >
          <Box alignSelf="flex-start" flexShrink={1}>
            <img src={poster_path} alt="increase priority" className={classes.cover} />
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            flexWrap="wrap"
            flexShrink={1}
          >
            <Box alignSelf="flex-end" className={classes.rating}>
              <Typography component="legend">Likes</Typography>
              <StyledRating
                name="customized-color"
                value={vote_average / 2}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
              />
            </Box>
            <Box alignSelf="flex-start" className={classes.h5}>
              <Typography color="inherit" align="center" variant="h4" style={{ marginTop: -60 }}>
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
                <p style={{ marginTop: 2, marginBottom: 0, color: '#040404' }}>Release date:</p>
                <p style={{ marginTop: 0, marginBottom: -2 }}>{release_date}</p>
              </Button>
              <Button variant="contained" color="secondary" className={classes.date}>
                <p style={{ marginTop: 2, marginBottom: 0, color: '#040404' }}>Time:</p>
                <p style={{ marginTop: 0, marginBottom: -2 }}>{runtime}</p>
              </Button>
            </Box>
          </Box>
          <Box alignSelf="flex-start" flexShrink={4}>
            <Link underline="always" component={RouterLink} to="/">
              <SearchIcon color="secondary" style={{ fontSize: 40, marginTop: 80, marginLeft: 100 }} />
            </Link>
          </Box>
        </Box>
      </div>
    </ProductHeroLayout>
  );
}

MoviePage.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  overview: PropTypes.number.isRequired,
};

const MoviePageWithRouter = withRouter(MoviePage);

export default compose(
  withStyles(styles, { name: 'ProductCategories' }),
)(MoviePageWithRouter);
