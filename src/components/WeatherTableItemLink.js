import React from 'react';
import { 
    createStyles,
    withStyles,
    Grid,
    Typography,
    IconButton,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';

const WeatherTableItemLink = (props) => {
    const classes = props.classes;
    return (
        <Grid item xs={2}>
            <Typography className={classes.text}>{props.input}</Typography>
            <IconButton onClick={() => props.handleClick()}>
                <RefreshIcon/>
            </IconButton>
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

export default withStyles(useStyles)(WeatherTableItemLink);