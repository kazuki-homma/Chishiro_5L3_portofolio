import React from 'react';
import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import utilStyles from '../styles/utils.module.scss'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

export default function WorkCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Link href={'/'}>
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/lion.jpg"
        title="Paella dish"
      />
      <p>テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト
      テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト</p>
    </Card>
    </Link>
  );
}