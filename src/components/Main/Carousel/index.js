import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import API from '../../../utils/api'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
<<<<<<< HEAD
}));

function SpacingGrid(props) {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = event => {
        setSpacing(Number(event.target.value));
    };

let incomingInfo = [
    {
    id:0,
    description: props.description[0],
    activityName: props.activityName[0]
    },
    {
    id:1,
    description: props.description[1],
    activityName: props.activityName[1]
    },
    {
    id:2,
    description: props.description[2],
    activityName: props.activityName[2]
    },
    {
    id:3,
    description: props.description[3],
    activityName: props.activityName[3]
    }

];

    return (
        <Container id="wcon">
            <Grid container className={classes.root} spacing={3}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        {incomingInfo.map(value => ( // this one line has been stumping greg. Make this only display 4 results.
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


export default SpacingGrid()
=======
    pos: {
        marginBottom: 12,
    },
});

class Carousel extends Component {
    // state = {
    //     events: []
    // }

    // componentDidMount() {
    //     API.getEvents().then(event => {
    //         console.log(event.data);

    //         this.setState({ events: event.data })            
    //     })
    // }



    render() {
        // const [spacing, setSpacing] = React.useState(2);
        // const classes = useStyles();

        // const handleChange = event => {
        //     setSpacing(Number(event.target.value));
        // };

        // console.log(this.state.events);
        
        const { classes } = this.props;

        return (
            <div>
                {this.props.activities.map(event => {
                        return (
                            <Card>
                    <CardContent>
                       {event.activityName}
                    </CardContent>
                </Card>
                        )                
                })}
                </div>

        );
    }


}
export default withStyles(styles)(Carousel);
>>>>>>> origin
