import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
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

export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = event => {
        setSpacing(Number(event.target.value));
    };

    return (
        <Container id="wcon">
            <Grid container className={classes.root} spacing={3}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {[0, 1, 2, 3].map(value => (
                            <Grid key={value} item>
                                <Paper className={classes.paper} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
            <Button variant="outlined" disabled>
                Next
            </Button>
        </Container>
    );
}