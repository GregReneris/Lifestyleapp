import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import API from '../../../utils/api'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Moment from 'react-moment';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';





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
    button: {

    }
});

var cardStyle = {
    display: 'block',
    width: '15vw',
    transitionDuration: '0.3s',
    height: '20vw',
}

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
};


class Carousel extends Component {


    render() {
        const { classes } = this.props;
        let startIndex = this.props.offset;
        let endIndex = startIndex + this.props.pageSize;

        return (
            <div style={{ display: "inline-block" }} className="row">
                <Grid container className={classes.root} spacing={2}>
                    {this.props.activities.slice(startIndex, endIndex).map(event => {

                        return (
                            <div>


                                <List style={flexContainer, { alignItems: 'center' }}>
                                    <ListItem>
                                        <Slide direction="left" in="true" mountOnEnter unmountOnExit>
                                            <Card style={cardStyle}>
                                                <CardActionArea>
                                                    <CardContent>
                                                        <img src={event.imgurl} width="100%" height="auto" display="block"  />
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
                                                        <Button data-id={event.id} onClick={this.props.handleAdd2Event}>
                                                            <span data-id={event.id}>
                                                                Save
                                                              </span>
                                                        </Button>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Slide>
                                    </ListItem>
                                </List>
                            </div>
                        )
                    })}
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(Carousel); 
