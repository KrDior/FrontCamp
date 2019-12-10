/* eslint-disable camelcase */
import React from 'react';
import PropTypes, { string } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    marginLeft: 20,
    marginRight: 20,
  },
  media: {
    height: 350,
    width: '100%',
  },
});

export default function MediaCard(props) {
  const {
    id, title, release_date, poster_path, genres, overview,
  } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card} data-id={id}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={poster_path}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {overview}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {release_date}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {genres}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(string).isRequired,
  overview: PropTypes.string.isRequired,
};
