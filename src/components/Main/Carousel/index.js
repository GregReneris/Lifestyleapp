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
                            <Card >
                    <CardContent >
                       {event.activityName}
                       {event.description}
                       {/* <img src ={event.imgurl} /> */}
                       
                    </CardContent> 
                    <Button data-id={event.id} onClick = {this.props.handleAdd2Event}> 
                        <span data-id={event.id}>
                            Click Me to Save This Activity! Reference id on this 
                        </span>
                    </Button>
                </Card>
                        )                
                })}
                </div>

        );
    }


}
export default withStyles(styles)(Carousel);