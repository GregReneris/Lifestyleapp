import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const styles = theme => ({
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
});



class SpacingGrid extends React.Component {

    // state = {
    //     spacing: null 
    //   };

    // componentDidMount() {
    //     alert("componentDidMount")
    //   };

    render() {
        console.log("render")
        const { classes } = this.props;
        console.log(this.props)

        return (
            <Container id="wcon">
                <Grid container className={classes.root} spacing={3}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing='2'>
                            {this.props.activities.map(value => ( // this one line has been stumping greg. Make this only display 4 results.
                                <Grid key={value} item>
                                    <Paper className={classes.paper}>
                                        {value.id}
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                    </Grid>
                </Grid>
                {/* <Button variant="outlined" disabled>
                    Next
                </Button> */}
            </Container>
        );
}


// function SpacingGrid(props) { // this is an error with a invalid hook somehow.
//     const [spacing, setSpacing] = React.useState(2);
//     const classes = useStyles();

//     const handleChange = event => {
//         setSpacing(Number(event.target.value));
//     };

// let incomingInfo = [
//     {
//     id:0,
//     description: props.description[0],
//     activityName: props.activityName[0]
//     },
//     {
//     id:1,
//     description: props.description[1],
//     activityName: props.activityName[1]
//     },
//     {
//     id:2,
//     description: props.description[2],
//     activityName: props.activityName[2]
//     },
//     {
//     id:3,
//     description: props.description[3],
//     activityName: props.activityName[3]
//     }

// ];

//     return (
//         <Container id="wcon">
//             <Grid container className={classes.root} spacing={3}>
//                 <Grid item xs={12}>
//                     <Grid container justify="center" spacing={spacing}>
//                         {incomingInfo.map(value => ( // this one line has been stumping greg. Make this only display 4 results.
//                             <Grid key={value} item>
//                                 <Paper className={classes.paper} />
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Grid>
//                 <Grid item xs={12}>
//                 </Grid>
//             </Grid>
//             <Button variant="outlined" disabled>
//                 Next
//             </Button>
//         </Container>
//     );
// }

};

 export default withStyles(styles)( SpacingGrid );