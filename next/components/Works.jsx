import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import utilStyles from '../styles/utils.module.scss'
import Card from './Card';

const Works = () => {
    const allWorksData = [{id: "tax-convert", title: "tax-convert" }, {id: "life-nadge", title: "Life-Nadge"}, {id: "beauty-helth", title: "BeautyHelth"}];
    const spacing = 4;

    return (
      <section className={utilStyles.section}>
        <h1 className={utilStyles.sectionTitle}>Works</h1>
        <div className={utilStyles.workSection}>
        <Grid container className={utilStyles.root} spacing={2}>
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
        </div>
      </section>
    )
}

export default Works;