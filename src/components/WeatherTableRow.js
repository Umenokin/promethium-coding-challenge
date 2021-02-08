import React from 'react';
import {
    Box,
    Grid,
    createStyles,
    withStyles,
} from '@material-ui/core';
import WeatherTableItem from './WeatherTableItem';
import WeatherTableItemLink from './WeatherTableItemLink';

const WeatherTableRow = (props) => {
    const classes = props.classes;
    return (
        <Box m={1} display="flex" className={classes.tableRow}>
            <Grid
            className={classes.tableRowHeader}
            container
            direction="row"
        >
                <WeatherTableItemLink handleClick = {() => props.handleSingleReload()} input={props.cityName}/>  
                <WeatherTableItem input={props.temperature}/>  
                <WeatherTableItem input={props.minTemperature}/>  
                <WeatherTableItem input={props.updatedAt}/>  
            </Grid>
        </Box> 
    );
}

const useStyles = (theme) => createStyles({
    tableRow: {
        margin: '0rem',
    },
    tableRowHeader: {
        backgroundColor: theme.palette.secondary.main,
        marginTop: '0rem',
        display: 'flex',
        opacity: '.75',
        justifyContent: 'left',
    },
})

export default withStyles(useStyles)(WeatherTableRow);