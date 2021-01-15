import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import Card from './Card';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


const Works = () => {
    const allWorksData = [{id: "tax-convert", title: "tax-convert" }, {id: "life-nadge", title: "Life-Nadge"}, {id: "beauty-helth", title: "BeautyHelth"}];
    const spacing = 4;
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing}>
            {allWorksData.map((work) => (
                <Grid key={work.id} item>
                <Card title={work.title} id={work.id}/>
                </Grid>
            ))}
            </Grid>
          </Grid>
        </Grid>
    )
}

export default Works;