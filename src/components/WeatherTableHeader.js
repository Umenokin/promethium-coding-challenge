import React from 'react';
import {
    Box,
    Grid,
    createStyles,
    withStyles,
} from '@material-ui/core';
import WeatherTableItem from './WeatherTableItem';

const WeatherTableHeader = (props) => {
    const classes = props.classes;
    return (
        <Box m={1} className={classes.tableHeader}>
            <Grid
            className={classes.infoTitleHeader}
            container
            direction="row"
        >
                <WeatherTableItem input={props.cityName}/>  
                <WeatherTableItem input={props.temperature}/>  
                <WeatherTableItem input={props.minTemperature}/>  
                <WeatherTableItem input={props.updatedAt}/>  
            </Grid>
        </Box> 
    );
}

const useStyles = (theme) => createStyles({
    tableHeader: {
        display: 'flex',
        backgroundColor: theme.palette.primary.main, 
        margin: '0rem',
        marginTop: '.5rem',
    },
})

export default withStyles(useStyles)(WeatherTableHeader);