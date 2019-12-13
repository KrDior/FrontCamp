/* eslint-disable react/forbid-prop-types */
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { compose } from 'redux';
import { Switch, useParams, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import MoviePage from './MoviePage';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import NotFound from '../components/NotFound';
import { getSortBy, getSearchBy, getMovie } from '../store/actions/actionCreator';

const backgroundImageStatic =  'https://static4.depositphotos.com/1014680/315/i/950/depositphotos_3154026-stock-photo-bw-film-background.jpg';

const styles = (theme) => ({
  backgroundSeacrh: {
    backgroundImage: `url(${backgroundImageStatic})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  buttonGroup: {
    width: 100,
    maxHeight: 50,
  },
  h3: {
    marginBottom: theme.spacing(6),
    marginTop: theme.spacing(6),
  },
  h5: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(0),
    },
  },
  more: {
    marginTop: theme.spacing(2),
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
  notFound: {
    marginBottom: theme.spacing(15),
    marginTop: theme.spacing(15),
  },
});

function Movie(props) {
  return <MoviePage {...props} />;
}

function ProductHero(props) {
  const { classes } = props;
  const inputEl = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const [searchParam, setSearchParam] = React.useState('title');
  const dispatchSeachParam = useDispatch();
  const dispatchGetMovie = useDispatch();

  const handleSeachByParam = (event, newSearchParam) => {
    if (newSearchParam !== null) {
      setSearchParam(newSearchParam);
      dispatchSeachParam(getSearchBy(searchParam));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatchGetMovie(getMovie(inputValue));
    dispatchSeachParam(getSearchBy(searchParam));
    setInputValue('');
  };

  return (
    <Switch>
      <Route exact path="/film/:id" render={() => <Movie {...props} />} />
      <Route exact path="/">
        <ProductHeroLayout backgroundClassName={classes.backgroundSeacrh}>
          {/* Increase the network loading priority of the background image. */}
          <img style={{ display: 'none' }} src={backgroundImageStatic} alt="increase priority" />
          <Typography color="inherit" align="center" variant="h3" marked="center" className={classes.h3}>
            Find your favorite movie
          </Typography>
          <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
            Enjoy secret offers up to -70% off the best films catalogue every Sunday.
          </Typography>
          <Grid container spacing={1} direction="row" alignItems="center" justify="flex-end">
            <Grid item xs={6}>
              <span className={classes.searchText}>SEARCH BY</span>
              <ToggleButtonGroup
                value={searchParam}
                exclusive
                onChange={handleSeachByParam}
                aria-label="text alignment"
                size="small"
              >
                <ToggleButton value="title" aria-label="left aligned">
                  Title
                </ToggleButton>
                <ToggleButton value="gengere" aria-label="right aligned">
                  Gengere
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Grid container spacing={1} direction="column" alignItems="center" justify="center">
            <Grid item xs={12}>
              <TextField
                id="outlined-full-width"
                ref={inputEl}
                className={clsx(classes.textField, classes.input)}
                style={{ margin: 20 }}
                label="Movie name"
                placeholder="Let's try to find..."
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                color="secondary"
                value={inputValue}
                onChange={(evt) => setInputValue(evt.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                onClick={handleSubmit}
              >
                <span>Find movie</span>
              </Button>
            </Grid>
          </Grid>
          <Typography variant="body2" color="inherit" className={classes.more}>
            Discover the experience
          </Typography>
        </ProductHeroLayout>
      </Route>
      <Route render={() => <NotFound />} />
    </Switch>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

const ProductHeroWithRouter = withRouter(ProductHero);

export default compose(
  withStyles(styles, { name: 'ProductHeroWithRouter' }),
)(ProductHeroWithRouter);
