/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
    marginLeft: 20,
    marginRight: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  media: {
    height: 350,
    width: '100%',
  },
  genres: {
    color: '#e33e0b',
    fontSize: 12,
    marginTop: 5,
    marginBottom: 10,
  },
  date: {
    color: '#FFFFFF',
    background: '#333333',
    borderRadius: 4,
    textShadow:
      '#FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FF2D95 0px 0px 20px, #FF2D95 0px 0px 30px, #FF2D95 0px 0px 40px, #FF2D95 0px 0px 50px, #FF2D95 0px 0px 75px',
  },
  footer: {
    display: 'flex',
    wrap: 'nowrap',
    direction: 'column',
    alignContent: 'flex-end',
  },
});

export default function MovieCard(props) {
  const {
    id, title, release_date, poster_path, genres, vote_average,
  } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card} data-id={id}>
      <CardActionArea className={classes.body}>
        <CardMedia className={classes.media} image={poster_path} />
      </CardActionArea>
      <CardActionArea>
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography align="center" className={classes.genres}>
            {genres.map((genre, ind) => (
              <span key={id + ind} style={{ paddingRight: 3 }}>
                {genre}
              </span>
            ))}
          </Typography>
          <Typography align="right" gutterBottom variant="h6" component="h2" className={classes.date}>
            {release_date}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary" component={RouterLink} to={`/film/${id}`}>
            Learn More
          </Button>
          <Typography align="right" gutterBottom>
            <Rating name="half-rating" value={vote_average / 2} precision={0.5} />
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(string).isRequired,
  vote_average: PropTypes.number.isRequired,
};
