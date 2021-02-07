import React from 'react';
import { 
    createStyles,
    withStyles,
    Grid,
    Typography,
} from '@material-ui/core';

const WeatherTableItem = (props) => {
    const classes = props.classes;
    return (
        <Grid item xs={2}>
            <Typography className={classes.text}>{props.input}</Typography>
        </Grid> 
    );
}
const useStyles = (theme) => createStyles({
    text: {
        fontFamily: theme.palette.typography.fontFamily,
        fontWeight: 500,
        fontSize: '1rem',
        padding: '1rem',
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            fontSize: '.5rem',
        },
    },
})

export default withStyles(useStyles)(WeatherTableItem);