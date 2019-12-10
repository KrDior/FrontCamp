/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImageStatic = 'https://static4.depositphotos.com/1014680/315/i/950/depositphotos_3154026-stock-photo-bw-film-background.jpg';

const styles = (theme) => ({
  background: {
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
  h5: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
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
});

function ProductHero(props) {
  const { classes } = props;
  const [inputValue, setInputValue] = useState('');
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) setAlignment(newAlignment);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue('');
  };

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImageStatic} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h3" marked="center" className={classes.h5}>
        Find your favorite movie
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Enjoy secret offers up to -70% off the best films catalogue every Sunday.
      </Typography>
      <Grid container spacing={1} direction="row" alignItems="center" justify="flex-end">
        <Grid item xs={6}>
          <span className={classes.searchText}>SEARCH BY</span>
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            size="small"
          >
            <ToggleButton value="left" aria-label="left aligned">
              Title
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
              Gengere
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
      <Grid container spacing={1} direction="column" alignItems="center" justify="center">
        <Grid item xs={12}>
          <TextField
            id="outlined-full-width"
            className={clsx(classes.textField, classes.input)}
            label="Movie name"
            style={{ margin: 8 }}
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
            component="a"
            href="/premium-themes/onepirate/sign-up/"
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
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
