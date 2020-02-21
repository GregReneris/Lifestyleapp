import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import API from '../../../utils/api'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import Moment from 'react-moment';
import Grid from '@material-ui/core/Grid';




const styles = theme => ({
    root: {
        minWidth: 275,
        flexGrow: 1,
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
    control: {
        padding: theme.spacing(2),
    },
});

var cardStyle = {
    display: 'block',
    width: '20vw',
    transitionDuration: '0.3s',
    height: '30vw',
}

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
};


class Carousel extends Component {

    render() {


        
        const { classes } = this.props;

        return (
            <div style={{ display: "inline-block" }} className="row">
                 <Grid container className={classes.root} spacing={2}>
                {this.props.activities.map(event => {

                    return (
                        <List style={flexContainer, { alignItems: 'center' }}>
                            <ListItem>
                                <Card style={cardStyle}>
                                    <CardActionArea>
                                        <CardContent>
                                            <img src={event.imgurl} width="100%" height="auto" display="block"/>
                                            <Typography variant="body2" color="textPrimary" className={classes.title}>
                                                {event.activityName}
                                            </Typography>
                                            <Moment format="MM/DD/YYYY">
                                           {event.startTime}
                                           </Moment>
                                            <hr />
                                            <hr />
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                Travel Time {event.travelTime} minutes
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </ListItem>
                        </List>
                    )

                })}
                </Grid>
            </div>


        );
    }
}
export default withStyles(styles)(Carousel);