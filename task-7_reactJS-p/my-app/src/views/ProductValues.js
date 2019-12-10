/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import MovieIcon from '@material-ui/icons/Movie';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import BootstrapButton from '../components/ButtonSort';

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
  },
  sort: {
    position: 'relative',
    left: 180,
  },
  icon: {
    position: 'relative',
    left: 0,
  },
});

function ProductValues(props) {
  const { classes } = props;
  const [alignment, setAlignment] = React.useState('right');
  const [countMovie, setCountMovie] = React.useState('0');

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) setAlignment(newAlignment);
  };

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={1} justify="space-around">
          <Grid item sm>
            <div className={clsx(classes.title)}>
              <MovieIcon fontSize="large" className={classes.icon} />
              <Typography variant="h6" className={classes.counterMovie}>
                {countMovie}
                -movie found
              </Typography>
            </div>
          </Grid>
          <Grid item sm>
            <div className={clsx(classes.item, classes.sort)}>
              <Typography variant="h6" className={clsx(classes.title)}>
                SORT BY
              </Typography>
              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
                size="small"
              >
                <BootstrapButton value="left" aria-label="left aligned">
                  Release date
                </BootstrapButton>
                <BootstrapButton value="right" aria-label="right aligned">
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
